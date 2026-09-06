#!/usr/bin/env python3
"""Fetch Narayaneeyam verses from narayaneeyam-firststep.org.

    python3 tools/fetch-verses.py 41 50            # fetch and print
    python3 tools/fetch-verses.py 41 50 -o v.json  # also save as JSON

Prints every verse of each dasakam, ready to paste into src/data/dasakams.js.

Two traps this script exists to avoid, both of which produced silently wrong
Sanskrit before:

1. Do NOT read these pages through a summarising fetch. It returns only the
   first line of each verse and has corrupted Devanagari outright, splicing a
   Latin "iti" into verse 10.2. Always parse the raw HTML.

2. Do NOT parse the page as flat text. Each verse is followed by a word-by-word
   gloss laid out in table cells; a flat parse pulls those fragments into the
   verse. Dasakam 4 came out unusable that way. The verses live in <p> elements,
   so that is what we read.

Also handled here:
  - a pada ending in "-" continues into the next line without a space
  - the site writes visarga as an ASCII colon; normalised to U+0903
  - verse markers are kept tight as ॥N॥ so the app's line-splitter does not
    strand the number on a line of its own, and a single danda before the
    number is accepted (verse 12.3 is written "।३॥" on the site)
"""

import argparse, html, json, re, sys, urllib.request

URL = "https://narayaneeyam-firststep.org/dashaka{}"
DEVANAGARI = r'[ऀ-ॿ]'


def fetch(n):
    req = urllib.request.Request(URL.format(n), headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")


def tidy(text):
    text = re.sub(r'(?<=' + DEVANAGARI + r'):', 'ः', text)          # colon -> visarga
    # the source is inconsistent: verse 12.3 closes "।३॥" with a single danda,
    # and verse 93.3 closes "॥३" with the final danda missing altogether
    text = re.sub(r'[।॥]\s*([०-९]+)\s*$', lambda m: '॥' + m.group(1) + '॥', text.rstrip())
    text = re.sub(r'[।॥]\s*([०-९]+)\s*॥', lambda m: '॥' + m.group(1) + '॥', text)
    return re.sub(r'\s+', ' ', text).strip()


def verses(page):
    """{verse number: full verse} for one dasakam page."""
    out = {}
    for block in re.finditer(r'<p\b[^>]*>(.*?)</p>', page, flags=re.S | re.I):
        inner = re.sub(r'<br\s*/?>', '\n', block.group(1), flags=re.I)
        inner = html.unescape(re.sub(r'<[^>]+>', '', inner))
        if not re.search(DEVANAGARI, inner):
            continue
        # Dasakam 100's second verse carries no marker at all on the page, so a
        # marker cannot be required. Verse blocks are long; the closing
        # invocation and other stray Devanagari are short.
        num = re.search(r'[।॥]\s*([०-९]+)\s*॥', inner)
        if not num and len(re.findall(DEVANAGARI, inner)) < 60:
            continue
        joined = ''
        for pada in (l.strip() for l in inner.split('\n') if l.strip()):
            joined = (joined[:-1] + pada) if joined.endswith('-') else \
                     ((joined + ' ' + pada) if joined else pada)
        printed = int(''.join(str('०१२३४५६७८९'.index(c))
                              for c in num.group(1))) if num else None
        # Number by document order, not by the printed marker: Dasakam 40 gives
        # its sixth verse the marker ॥५॥, so trusting the marker silently drops
        # a verse. The marker is reported when it disagrees.
        seq = len(out) + 1
        if printed is None:
            print(f"  ! verse {seq} carries no marker in the source", file=sys.stderr)
        elif printed != seq:
            print(f"  ! verse {seq} is marked \u0965{num.group(1)}\u0965 in the source",
                  file=sys.stderr)
        out[seq] = tidy(joined)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("first", type=int)
    ap.add_argument("last", type=int, nargs="?")
    ap.add_argument("-o", "--out", help="also write JSON here")
    a = ap.parse_args()
    last = a.last or a.first
    if not 1 <= a.first <= last <= 100:
        sys.exit("dasakam numbers must run 1..100")

    collected = {}
    for n in range(a.first, last + 1):
        v = verses(fetch(n))
        if not v:
            print(f"D{n}: NO VERSES FOUND — page layout may have changed", file=sys.stderr)
            continue
        collected[n] = v
        lens = [len(t) for t in v.values()]
        print(f"\n=== Dasakam {n} — {len(v)} verses, {min(lens)}-{max(lens)} chars")
        for k in sorted(v):
            print(f"{n}.{k}\n  {v[k]}")
        missing = [i for i in range(1, max(v) + 1) if i not in v]
        if missing:
            print(f"  ! gaps at {missing}", file=sys.stderr)

    if a.out:
        json.dump(collected, open(a.out, "w"), ensure_ascii=False, indent=1)
        print(f"\nwrote {a.out}", file=sys.stderr)


if __name__ == "__main__":
    main()
