// Narayaneeyam Quiz Data — 3 questions per Dasakam, drawn from the Narayaneeyam text
// Populated: Dasakams 1-10 (D1), 11-20 (D1B), 21-30 (D2). D2B = 31-40 (pending)
// vt = main takeaway from the dasakam

const D1 = [
{n:1,t:"Glory of the Lord",kv:"1.1",
vt:"The Supreme Brahman — dense concentrated Bliss and Pure Consciousness, beyond time and space — manifests visibly at Guruvāyūr. What fortune for all seekers!",
vs:"सान्द्रानन्दावबोधात्मकमनुपमितं कालदेशावधिभ्यां निर्मुक्तं नित्यमुक",
qs:[
{q:"What does Bhattathiri compare the Lord at Guruvayur to?",o:["The Parijata wish-fulfilling tree","The Ganga river","Mount Meru","The Sudarshana chakra"],a:0,exp:"Bhattathiri calls Guruvayurappan the wish-fulfilling tree of blessings."},
{q:"According to Dasakam 1, what quality of the Lord at Guruvayur makes His presence uniquely purifying?",o:["His ancient age","His pure Sattva nature, untouched by Rajas and Tamas","His location near the sea","His hidden form"],a:1,exp:"The Lord's Sattva nature makes Him uniquely pure and purifying."},
{q:"In Dasakam 1, Bhattathiri says the Lord grants boons even to whom?",o:["Only to brahmins","Only to those who perform elaborate rituals","Those who have not even asked — simply by bowing","Only to his devotees"],a:2,exp:"The Lord grants boons even to those who simply bow, without asking."}
]},
{n:2,t:"Formful Aspect of the Lord",kv:"2.1",
vt:"The Lord's form — crown rivalling the sun, merciful eyes, sweet smile, Kaustubha gem on His chest, adorned with Vanamālā and Śrīvatsa — is meditated upon by the blessed.",
vs:"सूर्यस्पर्धिकिरीटमूर्ध्वतिलकप्रोद्भासिफालान्तरं कारुण्याकुलनेत्र",
qs:[
{q:"What gem from the churning of the ocean adorns the Lord's chest?",o:["Syamantaka","Chintamani","Padmaraga","Kaustubha"],a:3,exp:"The Kaustubha gem, which emerged during the Samudra Manthan, adorns the Lord's chest."},
{q:"According to Dasakam 2, the Lord's form is described as being free from what two limitations?",o:["Time and space","Birth and death","Hunger and thirst","Sin and merit"],a:0,exp:"Bhattathiri describes the Lord as beyond time and space."},
{q:"What color is the Lord's form described as in Dasakam 2?",o:["Golden like the sun","Dark as a rain cloud","White like the moon","Red like the dawn"],a:1,exp:"The Lord is described as Shyamala (dark) like a rain cloud."}
]},
{n:3,t:"Suppliant Devotee",kv:"3.10",
vt:"Until Your compassion descends, I shall remain at Your feet, spending my days in prostration, praise, and worship to the best of my ability.",
vs:"किमुक्तैर्भूयोभिस्तव हि करुणा यावदुदियादहं तावद्देव प्रहितविविधार्थ",
qs:[
{q:"Bhattathiri composed Narayaneeyam while suffering from what ailment?",o:["Blindness","Deafness","Paralysis (rheumatism)","Fever"],a:2,exp:"Melapathur Narayana Bhattathiri was afflicted with severe paralysis (rheumatism)."},
{q:"How did Bhattathiri acquire his disease according to tradition?",o:["From a curse","From bathing in cold water","It was a test from the Lord","He took on his guru Achyuta Pisharadi's paralysis out of compassion"],a:3,exp:"Bhattathiri took on his guru's paralysis out of compassion."},
{q:"What does Bhattathiri ask for in the famous closing verse of Dasakam 3?",o:["Health, long life, and happiness to continue singing the Lord's glories","Wealth and prosperity","Liberation from rebirth","Supernatural powers"],a:0,exp:"Bhattathiri asks for health and life to continue worshipping the Lord."}
]},
{n:4,t:"Progress of the Spiritual Aspirant",kv:"4.1",
vt:"Grant me sufficient health so that I may worship You through the eight-limbed yoga. All paths of yoga ultimately lead to the Lord.",
vs:"कल्यतां मम कुरुष्व तावतीं कल्यते भवदुपासनं यया ।",
qs:[
{q:"How many limbs does Ashtanga Yoga have?",o:["Four","Eight","Six","Ten"],a:1,exp:"Ashtanga Yoga has eight limbs: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi."},
{q:"According to Dasakam 4, what is the final goal of all yoga practice?",o:["Physical fitness","Supernatural powers (siddhis)","Devotion to and realization of the Lord","Control over the elements"],a:2,exp:"The ultimate goal of yoga is devotion to and realization of the Lord."},
{q:"What is the eighth and final limb of Ashtanga Yoga described in Dasakam 4?",o:["Dharana (concentration)","Dhyana (meditation)","Pratyahara (sense withdrawal)","Samadhi (complete absorption)"],a:3,exp:"Samadhi is the eighth and final limb where the mind merges with the object of meditation."}
]},
{n:5,t:"Cosmic Evolution",kv:"5.10",
vt:"The Golden Egg remained in cosmic waters for a thousand years. Breaking it open, the Lord formed the fourteen worlds as the Virāṭ — manifesting as all beings.",
vs:"अण्डं तत्खलु पूर्वसृष्टसलिलेऽतिष्ठत् सहस्रं समा: ॥",
qs:[
{q:"What metaphor describes how the universe exists within the Lord?",o:["A city reflected in a mirror","A dream within sleep","A wave in the ocean","A flame in the wind"],a:0,exp:"The universe exists within the Lord like a dream within sleep."},
{q:"What philosophical concept does the mirror metaphor in Dasakam 5 illustrate?",o:["Karma","Maya — the apparent reality of the world that has no independent existence apart from God","Dharma","Samsara"],a:1,exp:"Maya is the illusory nature of the world, like a reflection in a mirror."},
{q:"According to Dasakam 5, who is the Virat Purusha?",o:["A separate deity of creation","The first human being","The cosmic form of the Lord — the entire universe is His body","An angelic being"],a:2,exp:"The Virat Purusha is the cosmic form of the Lord encompassing all existence."}
]},
{n:6,t:"Cosmos as Form of the Lord",kv:"6.1",
vt:"Pātāla is the Lord's foot-sole, Rasātala His upper feet, Mahātala His ankles — the fourteen worlds manifest through His cosmic form.",
vs:"एवं चतुर्दशजगन्मयतां गतस्य पातालमीश तव पादतलं वदन्ति ॥",
qs:[
{q:"In the Virat Swarupa description, what are identified as the Lord's two eyes?",o:["Stars and planets","Fire and water","Sky and earth","Sun and Moon"],a:3,exp:"In the Virat Purusha description, the Sun and Moon are the Lord's eyes."},
{q:"In the Virat Swarupa, what part of the Lord's body is the earth?",o:["His feet","His head","His navel","His chest"],a:0,exp:"The earth is described as the Lord's feet (pādau)."},
{q:"What is the spiritual purpose of describing the Virat Swarupa in Dasakam 6?",o:["To frighten the listener into submission","To show that the entire physical universe is a manifestation of God, removing the illusion of separateness","To glorify physical creation alone","To teach astronomy"],a:1,exp:"The Virat Swarupa reveals that all existence is the Lord's body, dissolving the sense of separation."}
]},
{n:7,t:"Brahma Commanded to Create",kv:"7.4",
vt:"In Vaikuṇṭha, Māyā never operates, sorrow and anger are absent — it radiates supreme bliss, existing beyond the fourteen worlds.",
vs:"माया यत्र कदापि नो विकुरुते भाते जगद्भ्यो बहिः शोकक्रोधविमोहसाध्वसमुख",
qs:[
{q:"From where does the lotus sprout that contains Brahma?",o:["From the cosmic ocean floor","From Shiva's third eye","From Vishnu's navel","From Saraswati's hand"],a:2,exp:"A lotus sprouts from Vishnu's navel, containing Brahma."},
{q:"What is the name of the serpent that serves as Vishnu's bed on the cosmic ocean?",o:["Vasuki","Takshaka","Kaliya","Ananta (Adishesha)"],a:3,exp:"Ananta, also called Adishesha, is the thousand-headed serpent on which Vishnu rests."},
{q:"According to Dasakam 7, what is the order of creation?",o:["From the Lord's will arise Mahat (cosmic intelligence), then Ahamkara, then the elements","Earth first, then water, then sky","From gross to subtle elements","All at once, with no sequence"],a:0,exp:"Creation proceeds from cosmic intelligence to ego to the five elements."}
]},
{n:8,t:"Dawn of Creation",kv:"8.10",
vt:"From the Lord's navel emerged a luminous lotus bud containing all dissolved worlds. In it, the lotus-born Brahmā appeared with all Vedas self-manifested within him.",
vs:"तवैव वेषे फणिराजि शेषे जलैकशेषे भुवने स्म शेषे। आनन्दसान्द्रानुभवस्वर",
qs:[
{q:"What did Brahma do before he could begin creating?",o:["He performed 1000 years of penance","He dove into the lotus stalk to find its source but failed","He consulted the four Vedas","He sought guidance from Shiva"],a:1,exp:"Brahma dove deep into the lotus stalk seeking its source, representing the search for ultimate truth."},
{q:"What word did Brahma hear from the cosmic waters that inspired his penance?",o:["Om","Hari","Tapa (penance)","Shruti"],a:2,exp:"Brahma heard the imperative to perform tapas — 'Tapa'."},
{q:"What does Brahma's failure to find the root of the lotus teach?",o:["That the lotus has no root","That creation is eternal with no beginning","That the Vedas are false","That intellectual seeking alone cannot reach God — divine grace and self-revelation are necessary"],a:3,exp:"Brahma's futile search teaches that divine truth cannot be grasped by intellect alone—it requires grace."}
]},
{n:9,t:"Brahma's Meditation and Vision",kv:"9.5",
vt:"Through a hundred divine years of unwavering meditation, enlightenment dawned on Brahmā. His inner vision beheld the Lord's wondrous form resting upon Ādiśeṣa.",
vs:"शतेन परिवत्सरैर्दृढसमाधिबन्धोल्लसत्प्रबोधविशदीकृतः स खलु पद्मिनीसम्भवः । अदृष्टचरमद्भुतं तव हि रूपमन्तर्दृशा व्यचष्ट परितुष्टधीर्भुजगभोगभागाश्रयम् ॥",
qs:[
{q:"According to Dasakam 9, how long did Brahma meditate before the Lord's form was revealed to him?",o:["A hundred divine years","A single day","Twelve years","Until the end of the kalpa"],a:0,exp:"Bhattathiri says 'śatena parivatsarair' — through a hundred divine years of firm samādhi, Brahmā's understanding was clarified."},
{q:"In the vision granted to Brahma, upon what was the Lord resting?",o:["A lotus throne","Ādiśeṣa, the serpent couch","The cosmic waters alone","Garuda's back"],a:1,exp:"The verse describes the Lord's form as 'bhujaga-bhoga-bhāgāśrayam' — reposing upon the coils of the divine serpent Ādiśeṣa."},
{q:"How did Brahma behold this form of the Lord?",o:["With his physical eyes, in the sky","In a dream while asleep","With his inner vision (antar-dṛśā), through meditation","Reflected in the cosmic waters"],a:2,exp:"The word 'antardṛśā' is key — Brahmā saw the Lord with the inner eye of meditation, not with outward sight, after his mind had been purified by penance."}
]},
{n:10,t:"Diversification of Creation",kv:"10.10",
vt:"Understanding the method, Brahmā divided his body into male and female — Manu and Śatarūpā — to multiply humanity and populate the worlds.",
vs:"जानन्नुपायमथ देहमजो विभज्य स्रीपुंसभावमभजन्मनुतद्वधूभ्याम् ॥",
qs:[
{q:"In Dasakam 10, into whom did Brahma divide his own body to further creation?",o:["Marichi and Atri","Sanaka and Sanandana","Daksha and Asikni","Manu and Śatarūpā"],a:3,exp:"Brahmā divided himself into male and female principles, appearing as Svāyambhuva Manu and his consort Śatarūpā, from whom humanity descends."},
{q:"Why did Brahma's mind-born sons Sanaka, Sanandana, Sanatana and Sanatkumara not assist in creation?",o:["They chose renunciation and refused to procreate","They were cursed by their father","They were destroyed by demons","They departed to Vaikuntha immediately"],a:0,exp:"The four Kumāras, devoted to nivṛtti (the path of withdrawal), declined Brahmā's command to procreate, choosing lifelong celibacy and contemplation instead."},
{q:"Who arose from Brahma's anger when creation did not proceed as he wished?",o:["Indra","Rudra","Yama","Agni"],a:1,exp:"Frustrated at the Kumāras' refusal, Brahmā's anger took form as Rudra, who was then instructed to create — but produced fierce beings and was asked to perform penance instead."}
]}
];

const D1B = [
{n:11,t:"Prelude to the First Incarnation",kv:"11.5",
vt:"As creation flourished, the divine sages Sanaka and his brothers came to Vaikuṇṭha to behold the Lord — O Lord of Guruvāyūr.",
vs:"क्रमेण सर्गे परिवर्धमाने कदापि दिव्याः सनकादयस्ते । भवद्विलोकाय विकुण्ठलोकं प्रपेदिरे मारुतमन्दिरेश ॥",
qs:[
{q:"Who came to Vaikuṇṭha to behold the Lord, only to be turned away at the gate?",o:["Nārada and Tumburu","The Pracetas","Sanaka and his brother sages","Brahmā and Śiva"],a:2,exp:"The verse names 'sanakādayaḥ' — Sanaka, Sanandana, Sanātana and Sanatkumāra, the four eternally youthful mind-born sons of Brahmā, who came simply 'bhavad-vilokāya', to look upon the Lord."},
{q:"What curse did the gatekeepers Jaya and Vijaya receive for barring the sages?",o:["To lose their posts at Vaikuṇṭha","To be turned to stone","To forget the Lord's name","To be born on earth as demons"],a:3,exp:"Affronted at being stopped, the Kumāras cursed the two doorkeepers to fall from Vaikuṇṭha and be born in demonic wombs — the Lord Himself confirming the curse and promising to restore them."},
{q:"Why does Bhattathiri place this episode before the avatāra narratives?",o:["Because the demons the Lord slays in the coming dasakams are Jaya and Vijaya in their three births","It explains the origin of the Vedas","To describe the geography of Vaikuṇṭha","To introduce the four Kumāras as teachers"],a:0,exp:"The curse sets the whole avatāra cycle in motion. Jaya and Vijaya return as Hiraṇyākṣa and Hiraṇyakaśipu, then Rāvaṇa and Kumbhakarṇa, then Śiśupāla and Dantavakra — slain each time by the Lord, which is their release."}
]},
{n:12,t:"Varāha Avatāra — Rescue of the Earth",kv:"12.9",
vt:"Locating the earth placed in the depths of Rasātala by the wicked demon, You, O Lord in Boar form, disregarded the rushing demons and lifted her upon the tip of Your tusk, as though in play.",
vs:"दृष्ट्वाऽथ दैत्यहतकेन रसातलान्ते संवेशितां झटिति कूटकिटिर्विभो त्वम् । आपातुकानविगणय्य सुरारिखेटान् दंष्ट्राङ्कुरेण वसुधामदधाः सलीलम् ॥",
qs:[
{q:"From where did the Boar form first emerge in Dasakam 12?",o:["From the cosmic ocean","From Brahmā's nostril","From a cleft in the earth","From the Lord's navel lotus"],a:1,exp:"The Varāha appeared from Brahmā's nostril, at first no bigger than a thumb, then swelling in an instant to a mountainous form that astonished Brahmā and the sages watching."},
{q:"How did Varāha raise the earth from Rasātala?",o:["In His arms","On His shoulders","Upon the tip of His tusk","By command alone"],a:2,exp:"'Daṁṣṭrāṅkureṇa vasudhām adadhāḥ' — He bore the earth up on the sprout-like tip of His tusk, the image Bhattathiri returns to as the signature of this avatāra."},
{q:"What single word does the verse use for the Lord's manner as He brushed past the attacking demons?",o:["Kruddham — in wrath","Śānta — in stillness","Tvaritam — in haste","Sa-līlam — as sport, in play"],a:3,exp:"'Sa-līlam' — He did it playfully, not even counting the onrushing demons worth His notice. For Bhattathiri, that effortlessness is the point: what is cosmic crisis to the worlds is līlā to the Lord."}
]},
{n:13,t:"Destruction of Hiranyāksha",kv:"13.1",
vt:"While Hiraṇyākṣa roamed in search of You through the waters of dissolution — which reached only up to his shanks — Your devotee Nārada, of cleverly deceptive wit, approached him and spoke softly, delighting the demon while belittling Your strength.",
vs:"हिरण्याक्षं तावद्वरद भवदन्वेषणपरं चरन्तं सांवर्ते पयसि निजजङ्घापरिमिते । भवद्भक्तो गत्वा कपटपटुधीर्नारदमुनिः शनैरूचे नन्दन् दनुजमपि निन्दंस्तव बलम् ॥",
qs:[
{q:"What detail does the verse give to convey Hiraṇyākṣa's enormous size?",o:["The waters of dissolution reached only up to his shanks","He could hold mountains in one hand","His shadow darkened three worlds","He stood taller than Mount Meru"],a:0,exp:"'Sāṁvarte payasi nija-jaṅghā-parimite' — the very waters of universal dissolution came only up to his shins as he waded through them, hunting for the Lord."},
{q:"How did Nārada direct the demon toward the Lord?",o:["By openly challenging him to battle","By praising the demon while disparaging the Lord's strength","By offering him a boon","By disguising himself as a demon"],a:1,exp:"Bhattathiri calls Nārada 'kapaṭa-paṭu-dhīḥ' — skilled in guile. He flattered Hiraṇyākṣa and slighted the Lord's power, knowing the demon's pride would carry him straight to the encounter that would free him."},
{q:"How did the battle between Varāha and Hiraṇyākṣa end?",o:["The demon fled to Pātāla","Brahmā intervened to stop the fight","The Lord struck him down with a blow of His fist","The demon was bound and imprisoned"],a:2,exp:"After a fierce mace-fight in which the Lord let the demon exhaust his fury, He felled him with a blow at the root of the ear — and Hiraṇyākṣa, gazing on the Lord as he died, attained the release the curse had always intended."}
]},
{n:14,t:"Kardama and Kapila Avatāra",kv:"14.3",
vt:"O Lord, You revealed Your form to Kardama — mounted upon Garuḍa, hued like a rain-cloud, a playful lotus in Your hand, Your face radiant with a smile.",
vs:"गरुडोपरि कालमेघक्रमं विलसत्केलिसरोजपाणिपद्मम् । हसितोल्लसिताननं विभो त्वं वपुराविष्कुरुषे स्म कर्दमाय ॥",
qs:[
{q:"How is the Lord's appearance to Kardama described in this verse?",o:["Seated on Ādiśeṣa in the ocean","Blazing with the light of a thousand suns","As a small brahmacārin","Mounted on Garuḍa, cloud-hued, a lotus in hand, His face bright with a smile"],a:3,exp:"Bhattathiri gives the whole picture in one line: 'garuḍopari', 'kāla-megha', the 'keli-saroja' — the lotus twirled in play — and 'hasitollasitānanam', the face lit by a smile."},
{q:"Whom did Kardama marry, as arranged after this vision?",o:["Devahūti, daughter of Svāyambhuva Manu","Śatarūpā","Prasūti","Merudevī"],a:0,exp:"The Lord directed Manu to give his daughter Devahūti to the sage. From their union came nine daughters, married to the great sages, and finally the Lord Himself as their son Kapila."},
{q:"What did the Lord promise Kardama on this occasion?",o:["Sovereignty over the earth","That He would be born as Kardama's own son","Immortality","A vision of Vaikuṇṭha"],a:1,exp:"The boon was the avatāra itself: the Lord would take birth as Kapila, son of Kardama and Devahūti — and it is that son who delivers the teaching of the next dasakam to his own mother."}
]},
{n:15,t:"Teaching of Kapila",kv:"15.1",
vt:"The mind attached to the guṇas binds; unattached to them it grants immortality. Bhakti-yoga restrains that attachment, and bhakti itself is won through following the great. Thus, as Kapila, You taught Devahūti.",
vs:"मतिरिह गुणसक्ता बन्धकृत्तेष्वसक्ता त्वमृतकृदुपरुन्धे भक्तियोगस्तु सक्तिम् । महदनुगमलभ्या भक्तिरेवात्र साध्या कपिलतनुरिति त्वं देवहूत्यै न्यगादीः ॥",
qs:[
{q:"To whom does Kapila deliver this teaching?",o:["To Kardama, his father","To the four Kumāras","To Devahūti, his mother","To Svāyambhuva Manu"],a:2,exp:"'Devahūtyai nyagādīḥ' — the Lord as Kapila taught His own mother. The Sāṅkhya of the Bhāgavata is given not to an assembly of sages but as a son's instruction to his mother."},
{q:"According to this verse, what makes the difference between a mind that binds and one that liberates?",o:["Whether it is learned or ignorant","Whether it performs ritual correctly","Whether it is calm or agitated","Whether it is attached to the guṇas or unattached"],a:3,exp:"'Guṇa-saktā bandha-kṛt, teṣv asaktā tv amṛta-kṛt' — it is the same mind either way. Attachment to the guṇas binds; the absence of that attachment makes it a maker of immortality."},
{q:"By what means does the verse say bhakti itself is obtained?",o:["By mahad-anugama — following and serving the great","By austerity and fasting","By the study of scripture","By pilgrimage to holy places"],a:0,exp:"'Mahad-anugama-labhyā bhaktir eva atra sādhyā' — devotion is the one thing to be cultivated, and it is come by through the company and the following of great souls."}
]},
{n:16,t:"Daksha's Daughters and Sati",kv:"16.1",
vt:"Dakṣa, son of Brahmā, obtained Prasūti the daughter of Manu, and through her sixteen daughters. Thirteen he gave to Dharma, Svadhā to the Pitṛs, Svāhā to Agni, and Satī to Śiva — who is Your own portion.",
vs:"दक्षो विरिञ्चतनयोऽथ मनोस्तनूजां लब्ध्वा प्रसूतिमिह षोडश चाप कन्याः । धर्मे त्रयोदश ददौ पितृषु स्वधां च स्वाहां हविर्भुजि सतीं गिरिशे त्वदंशे ॥",
qs:[
{q:"How many daughters does the verse say Dakṣa had through Prasūti?",o:["Ten","Sixteen","Thirteen","Twenty-seven"],a:1,exp:"'Ṣoḍaśa cāpa kanyāḥ' — sixteen daughters, of whom thirteen went to Dharma, and the remaining three to the Pitṛs, to Agni, and to Śiva."},
{q:"How does the verse describe Śiva, to whom Satī was given?",o:["As the destroyer of the worlds","As the lord of the Pitṛs","As 'tvad-aṁśe' — a portion of the Lord Himself","As Dakṣa's equal in rank"],a:2,exp:"The single word 'tvad-aṁśe' carries the whole theological point, and sets up what follows: Dakṣa's insult to Śiva is an insult to the Lord's own aṁśa, which is why the sacrifice ends as it does."},
{q:"How did the episode of Dakṣa's sacrifice conclude?",o:["Dakṣa was killed and never restored","Śiva forgave Dakṣa without confrontation","The sacrifice was completed undisturbed","Vīrabhadra beheaded Dakṣa, who was later revived with a goat's head"],a:3,exp:"Satī, unable to bear her father's contempt for her husband, gave up the body born of Dakṣa. Śiva's wrath took form as Vīrabhadra, who destroyed the sacrifice and beheaded Dakṣa — revived afterwards with a goat's head, and humbled."}
]},
{n:17,t:"Story of Dhruva",kv:"17.1",
vt:"Suruci was the dearly beloved wife of King Uttānapāda, son of Manu. The other, Sunīti, was disregarded by her husband — and she, being without any other recourse, took refuge in You alone.",
vs:"उत्तानपादनृपतेर्मनुनन्दनस्य जाया बभूव सुरुचिर्नितरामभीष्टा । अन्या सुनीतिरिति भर्तुरनादृता सा त्वामेव नित्यमगतिः शरणं गताऽभूत् ॥",
qs:[
{q:"How does the verse describe Sunīti's turning to the Lord?",o:["Being 'agatiḥ' — without any other recourse — she took refuge in Him alone","She sought Him after long study of scripture","She was instructed to do so by Nārada","She worshipped Him for the sake of a son"],a:0,exp:"'Agatiḥ śaraṇaṁ gatā' — having nowhere else to go, she went to the only refuge there is. Bhattathiri lingers on this because the Lord is the resort precisely of those with no other resort."},
{q:"Who gave the child Dhruva the mantra for his penance?",o:["His mother Sunīti","Nārada","Brahmā","Uttānapāda's family priest"],a:1,exp:"Meeting the five-year-old on his way to the forest, Nārada first tested his resolve, then gave him the twelve-syllable mantra 'oṁ namo bhagavate vāsudevāya' and the method of meditating on the Lord's form."},
{q:"What did the Lord do when He finally appeared before Dhruva?",o:["He granted a boon without speaking","He carried him at once to Vaikuṇṭha","He touched Dhruva's cheek with His conch, and the speechless boy broke into praise","He restored him to his father's throne immediately"],a:2,exp:"Dhruva, overwhelmed, could not speak. The Lord touched his cheek with the conch — and hymns poured from the child. He was granted the polestar, the one fixed point around which the heavens turn."}
]},
{n:18,t:"Story of Prithu",kv:"18.1",
vt:"To Aṅga, born in the lineage of the illustrious Dhruva, was born a son named Vena. Distressed in mind by that son's wickedness, the noble king withdrew to the forest with his thoughts fixed on Your feet.",
vs:"जातस्य ध्रुवकुल एव तुङ्गकीर्तेरङ्गस्य व्यजनि सुतः स वेननामा । यद्दोषव्यथितमतिः स राजवर्यस्त्वत्पादे निहितमना वनं गतोऽभूत् ॥",
qs:[
{q:"Why did King Aṅga abandon his kingdom for the forest?",o:["He was defeated in battle","He was cursed by a sage","He wished to perform a great sacrifice","He was grieved by the wickedness of his son Vena"],a:3,exp:"'Yad-doṣa-vyathita-matiḥ' — his mind pained by his son's evil, he left throne and city, his thoughts placed on the Lord's feet. Bhattathiri notes the irony: a righteous father, a monstrous son."},
{q:"From what was Pṛthu born, after the sages destroyed Vena?",o:["From the churning of Vena's arms","From a sacrificial fire","From the earth itself","From Vena's ashes"],a:0,exp:"The sages, having slain the tyrant with their mantras, churned his thigh — producing the dark dwarf Niṣāda, who carried off Vena's sin — and then his arms, from which arose Pṛthu and his consort Arci."},
{q:"For what act is King Pṛthu chiefly remembered in this dasakam?",o:["Conquering the three worlds","Milking the earth, who had taken the form of a cow, to yield grain for his starving people","Building the first city","Composing a hymn to the Lord"],a:1,exp:"When the earth withheld her produce, Pṛthu pursued her with drawn bow; she took cow form and pleaded, and he then milked her for grain and sustenance. From him she takes the name Pṛthvī."}
]},
{n:19,t:"Story of the Prachetas",kv:"19.1",
vt:"Pṛthu's great-grandson Prācīnabarhis, diligent in the great duties, begot upon his youthful wife Śatadruti ten good-hearted sons named the Pracetas — like sprouts of Your compassion.",
vs:"पृथोस्तु नप्ता पृथुधर्मकर्मठः प्राचीनबर्हिर्युवतौ शतद्रुतौ । प्रचेतसो नाम सुचेतसः सुतानजीजनत्त्वत्करुणाङ्कुरानिव ॥",
qs:[
{q:"To what does the verse compare the ten Pracetas?",o:["To ten flames of a single fire","To the ten directions","To sprouts of the Lord's compassion","To rivers flowing to the sea"],a:2,exp:"'Tvat-karuṇāṅkurān iva' — as though they were shoots springing from the Lord's own compassion. The image tells you in advance that these sons exist for a purpose of grace."},
{q:"Where did the Pracetas perform their long penance?",o:["On a Himalayan peak","In a cave beneath the earth","In the forest of Naimiṣa","Submerged in the waters of the ocean"],a:3,exp:"They entered the sea and stood in penance beneath its waters for ten thousand years, holding the Lord in meditation, until He appeared and granted them their boons."},
{q:"Whom did the Pracetas meet on their way, and what did he give them?",o:["Śiva, who taught them the hymn known as the Rudra-gīta","Nārada, who gave them a mantra","Brahmā, who blessed their journey","Kapila, who taught them Sāṅkhya"],a:0,exp:"Śiva appeared to the young princes out of grace and taught them the Rudra-gīta, the hymn to Viṣṇu with which they sustained their underwater tapas — one more instance of Bhattathiri showing Śiva as the Lord's foremost devotee."}
]},
{n:20,t:"Story of Ṛṣabha Deva",kv:"20.1",
vt:"From King Āgnīdhra, the beloved son of Priyavrata, was born Nābhi. Performing sacrificial rites for Your satisfaction alone, he beheld You in the midst of the sacrifice — the granter of what is desired.",
vs:"प्रियव्रतस्य प्रियपुत्रभूतादाग्नीध्रराजादुदितो हि नाभिः । त्वां दृष्टवानिष्टदमिष्टिमध्ये तवैव तुष्ट्यै कृतयज्ञकर्मा ॥",
qs:[
{q:"In what circumstance did King Nābhi behold the Lord?",o:["In a dream","In the midst of the sacrifice he was performing","While wandering in the forest","At the moment of his death"],a:1,exp:"'Iṣṭi-madhye' — in the very middle of the rite. And the verse is careful about his motive: 'tavaiva tuṣṭyai', he performed it for the Lord's satisfaction alone, not to obtain anything."},
{q:"What boon did the Lord grant King Nābhi?",o:["Sovereignty over all the continents","Freedom from rebirth","That He would be born as Nābhi's son","A thousand years of life"],a:2,exp:"The Lord, pleased with the disinterested worship, promised to incarnate as his son — and was born to Nābhi and Merudevī as Ṛṣabhadeva."},
{q:"After whom is Bhārata-varṣa named, according to this dasakam?",o:["Ṛṣabha himself","King Nābhi","Priyavrata","Bharata, the eldest of Ṛṣabha's hundred sons"],a:3,exp:"Ṛṣabhadeva instructed his hundred sons, gave the kingdom to the eldest, Bharata, and took to the life of an avadhūta. It is from that Bharata that this land takes its name."}
]}
];
const D2 = [
{n:21,t:"Worship in Different Continents",kv:"21.1",
vt:"The poet seeks refuge in the Lord who resides as Saṅkarṣaṇa in the Ilāvṛta region, worshipped by Śiva with sacred hymns.",
vs:"मध्योद्भवे भुव इलावृतनाम्नि वर्षे गौरीप्रधानवनिताजनमात्रभाजि। शर्वेण मन्त्रनुतिभि: समुपास्यमानं सङ्कर्षणात्मकमधीश्वर संश्रये त्वाम् ॥१॥",
qs:[
{q:"In the Ilāvṛta region described in Dasakam 21, which form of the Lord is worshipped, and by whom?",o:["Saṅkarṣaṇa, worshipped by Śiva","Nṛsiṃha, worshipped by Prahlāda","Hayagrīva, worshipped by Bhadraśravas","Kūrma, worshipped by Aryamā"],a:0,exp:"The opening verse states that in Ilāvṛta — where Gaurī and her companions dwell — the Lord abides as Saṅkarṣaṇa, worshipped by Śarva (Śiva) with mantras and hymns of praise."},
{q:"Dasakam 21 surveys the varṣas of Jambūdvīpa. In Kimpuruṣa-varṣa, who is described as the Lord's worshipper?",o:["Nārada","Hanumān, worshipping Śrī Rāma","Manu","Bhūmi Devī"],a:1,exp:"Bhattathiri describes Hanumān as eternally worshipping Śrī Rāma in Kimpuruṣa-varṣa — one of the nine regions where a distinct form of the Lord is adored."},
{q:"What does Bhattathiri say makes Bhārata-varṣa uniquely fortunate among all the regions?",o:["Its inhabitants live the longest","It has the greatest material wealth","It is the land of action (karma-bhūmi) where liberation can be won","Its people never experience sorrow"],a:2,exp:"Though other varṣas offer greater enjoyment, Bhārata alone is the karma-bhūmi — the land where righteous action and devotion can be performed, making mokṣa attainable. Bhattathiri counts even the gods as envying birth here."}
]},
{n:22,t:"Story of Ajamila",kv:"22.1",
vt:"A virtuous brāhmaṇa named Ajāmila, while on an errand to the forest at his father's behest, encountered an immoral woman of loose character.",
vs:"अजामिलो नाम महीसुर: पुरा चरन् विभो धर्मपथान् गृहाश्रमी । गुरोर्गिरा काननमेत्य दृष्टवान् सुधृष्टशीलां कुलटां मदाकुलाम् ॥१॥",
qs:[
{q:"How does Dasakam 22 describe Ajamila before his fall?",o:["A wicked man from birth","A king who abandoned his throne","A wandering ascetic","A brāhmaṇa householder walking the paths of dharma"],a:3,exp:"The first verse calls him 'mahīsuraḥ' — a brāhmaṇa — 'caran dharmapathān gṛhāśramī', a householder faithfully treading the ways of righteousness, until the forest encounter undid him."},
{q:"At the moment of death, what act saved Ajamila from the messengers of Yama?",o:["He called out the name of his youngest son, Nārāyaṇa","A lifetime of ritual sacrifice","His wife prayed on his behalf","He gave away all his wealth"],a:0,exp:"Calling for his beloved youngest son, Ajāmila uttered 'Nārāyaṇa' — and though he meant only the boy, the Name itself summoned the Viṣṇudūtas, who disputed Yama's claim and released him."},
{q:"What did Ajamila do after he was granted a second life?",o:["He returned to his former ways","He went to Haridvāra, performed penance, and attained the Lord","He became a king","He remained with his family unchanged"],a:1,exp:"Transformed by what he had witnessed, Ajāmila renounced everything, went to Haridvāra and devoted himself to genuine worship — showing that grace opens the door, but the devotee must still walk through it."}
]},
{n:23,t:"Story of Chitraketu",kv:"23.1",
vt:"Dakṣa, son of the Pracetas, worshipped the Lord seeking to multiply progeny, and the Lord appeared with eight resplendent arms, granting him a boon and Asiknī as wife.",
vs:"प्राचेतसस्तु भगवन्नपरो हि दक्षस्त्वत्सेवनं व्यधित सर्गविवृद्धिकाम: । आविर्बभूविथ तदा लसदष्टबाहुस्तस्मै वरं ददिथ तां च वधूमसिक्नीम् ॥१॥",
qs:[
{q:"In what form did the Lord appear to Dakṣa Prācetasa at the opening of Dasakam 23?",o:["With four arms, bearing conch and discus","As a brilliant light without form","With eight resplendent arms","As Nṛsiṃha"],a:2,exp:"The verse says 'lasad-aṣṭa-bāhuḥ' — the Lord manifested with eight shining arms, granted Dakṣa his boon, and gave him Asiknī as his wife so that creation might multiply."},
{q:"How did King Chitraketu come to lose the son he had longed for?",o:["The child died in battle","The child was taken by a curse from Nārada","The child renounced the world","The co-wives, consumed by jealousy, poisoned the child"],a:3,exp:"Chitraketu, childless among many queens, obtained a son through sage Aṅgiras — but the other queens, envious that the child's mother alone was favoured, administered poison and killed him."},
{q:"What did Nārada and Aṅgiras reveal to the grieving Chitraketu?",o:["That the soul passes through countless births and such bonds are momentary","That his son would be reborn to him again","That he should perform a great sacrifice","That the queens should be executed"],a:0,exp:"The sages summoned the departed soul, which spoke of its innumerable births and asked which of its countless parents it should now call its own. Freed of grief, Chitraketu received the Saṅkarṣaṇa vidyā and attained the Lord's vision."}
]},
{n:24,t:"Story of Prahlada",kv:"24.1",
vt:"When Hiraṇyākṣa was slain by the Lord in His Boar form, his grief-stricken brother Hiraṇyakaśipu vowed before the demons to kill the Lord.",
vs:"हिरण्याक्षे पोत्रिप्रवरवपुषा देव भवता हते शोकक्रोधग्लपितधृतिरेतस्य सहज: । हिरण्यप्रारम्भ: कशिपुरमरारातिसदसि प्रतिज्ञमातेने तव किल वधार्थं मधुरिपो ॥१॥",
qs:[
{q:"What prompted Hiraṇyakaśipu's vow at the start of Dasakam 24?",o:["The theft of his kingdom by Indra","The slaying of his brother Hiraṇyākṣa by the Lord as Varāha","A prophecy about his own son","An insult from Brahmā"],a:1,exp:"The verse opens with Hiraṇyākṣa slain by the Lord in the form of the noble Boar. His brother, his composure destroyed by grief and rage, vowed in the demons' assembly to kill the Lord Himself."},
{q:"Where did Prahlada first receive instruction in devotion?",o:["From his teachers Ṣaṇḍa and Amarka","From his father's court priests","In his mother's womb, from the sage Nārada","From Brahmā directly"],a:2,exp:"While Kayādhu carried him, Nārada taught her the truths of bhakti — and the child in the womb absorbed every word, emerging as a devotee before he could walk."},
{q:"What was the outcome of Hiraṇyakaśipu's repeated attempts to kill his son?",o:["Prahlāda was gravely injured but survived","Prahlāda fled the kingdom","The demons refused to carry out the orders","Every attempt — poison, elephants, serpents, fire, the sea — failed, for the Lord protected him"],a:3,exp:"Poison, trampling elephants, serpents, fire, hurling from cliffs and drowning in the sea all left Prahlāda untouched, his mind absorbed in the Lord throughout — the Lord Himself standing as his protection."}
]},
{n:25,t:"Incarnation as Man-Lion",kv:"25.1",
vt:"When Hiraṇyakaśipu struck the pillar, a terrifying roar emerged that shook the universe and even caused Brahmā to tremble from his seat.",
vs:"स्तंभे घट्टयतो हिरण्यकशिपो: कर्णौ समाचूर्णयन्नाघूर्णज्जगदण्डकुण्डकुहरो घोरस्तवाभूद्रव: । श्रुत्वा यं किल दैत्यराजहृदये पूर्वं कदाप्यश्रुतं कम्प: कश्चन संपपात चलितोऽप्यम्भोजभूर्विष्टरात् ॥१॥",
qs:[
{q:"According to the opening verse of Dasakam 25, what effect did the roar from the pillar have on Brahma?",o:["He trembled and slipped from his lotus seat","He hastened to praise the Lord","He fled to Vaikuṇṭha","He was unable to hear it"],a:0,exp:"Bhattathiri says the roar shook the shell of the cosmic egg, struck an unprecedented tremor into the demon king's heart, and even made the lotus-born Brahmā stir and fall from his seat."},
{q:"How did the Man-Lion form circumvent every clause of Hiraṇyakaśipu's boon?",o:["By striking him while he slept","Neither man nor beast, at twilight, on the threshold, on His lap, with claws","By using a weapon forged by Brahmā","By having Prahlāda deliver the blow"],a:1,exp:"The boon excluded man and beast, day and night, indoors and outdoors, earth and sky, and all weapons. Nṛsiṃha was neither man nor beast, came at dusk, on the doorway, placed him on His lap, and used only His nails."},
{q:"Who finally pacified the Lord's terrible wrath after Hiraṇyakaśipu was slain?",o:["Brahmā's hymns","Lakṣmī's intervention","Prahlāda, approaching in humble devotion","Śiva as Śarabha"],a:2,exp:"None of the gods dared approach the blazing Nṛsiṃha. The child Prahlāda came forward and bowed, and at the touch of His devotee's devotion the Lord grew calm and blessed him."}
]},
{n:26,t:"Liberation of the Elephant-king",kv:"26.1",
vt:"King Indradyumna of the Pāṇḍya kingdom was so deeply absorbed in worshipping the Lord on Malaya mountain that he failed to notice the arrival of sage Agastya.",
vs:"इन्द्रद्युम्न: पाण्ड्यखण्डाधिराजस्त्वद्भक्तात्मा चन्दनाद्रौ कदाचित् । त्वत् सेवायां मग्नधीरालुलोके नैवागस्त्यं प्राप्तमातिथ्यकामम् ॥१॥",
qs:[
{q:"Why was King Indradyumna cursed to be born as an elephant?",o:["He insulted Agastya deliberately","He refused to give the sage alms","He hunted in the sage's forest","Absorbed in worship, he failed to notice Agastya who had come seeking hospitality"],a:3,exp:"The verse is careful on this point: 'tvat-sevāyāṁ magna-dhīḥ' — his mind was drowned in serving the Lord, and so he simply did not see Agastya arrive. The curse fell on an act of devotion, not of malice."},
{q:"After struggling with the crocodile for a thousand years, what did Gajendra finally do?",o:["He lifted a lotus and cried out in surrender to the Lord","He tore himself free by force","He summoned the other elephants for help","He resigned himself to death"],a:0,exp:"When his own strength was wholly exhausted, Gajendra raised a lotus in his trunk and called upon the Supreme — and the Lord, abandoning even Garuḍa in His haste, came at once."},
{q:"Who was the crocodile that seized Gajendra?",o:["An ordinary beast of the lake","A gandharva named Hūhū, cursed by the sage Devala","A demon sent by Hiraṇyakaśipu","A form assumed by Yama"],a:1,exp:"The crocodile was the gandharva Hūhū, condemned to that form by sage Devala. Struck by the Lord's discus, he too was released — both captor and captive liberated by the same act of grace."}
]},
{n:27,t:"Churning the Ocean for Nectar",kv:"27.1",
vt:"Sage Durvāsas gave a divine garland to Indra, but when Indra's elephant trampled it, the enraged sage cursed Indra, for forbearance is rare in those not born of the Lord.",
vs:"दर्वासास्सुरवनिताप्तदिव्यमाल्यं शक्राय स्वयमुपदाय तत्र भूय: । नागेन्द्रप्रतिमृदिते शशाप शक्रं का क्षान्तिस्त्वदितरदेवतांशजानाम् ॥१॥",
qs:[
{q:"What act brought Durvāsas' curse upon Indra?",o:["Indra refused the sage's gift","Indra failed to rise from his throne","Indra's elephant trampled the divine garland the sage had given him","Indra mocked the sage's appearance"],a:2,exp:"Indra placed the garland on Airāvata, who cast it down and trampled it. Bhattathiri adds a pointed aside — 'kā kṣāntiḥ' — what forbearance can be expected of those not born of the Lord's own portion?"},
{q:"What served as the churning rod and the churning rope for the ocean of milk?",o:["Mount Meru and Ādiśeṣa","Mount Kailāsa and Takṣaka","Mount Malaya and Kāliya","Mount Mandara and Vāsuki"],a:3,exp:"Mandara was uprooted as the churning staff and the serpent Vāsuki became the rope, the devas taking the tail and the asuras insisting on the head — where they were scorched by his breath."},
{q:"When Mount Mandara began sinking into the ocean, how did the Lord intervene?",o:["He assumed the form of Kūrma, the tortoise, and bore it on His back","He held it up with one hand","He commanded Varuṇa to raise it","He fixed it in place with the Sudarśana"],a:0,exp:"The Lord took the form of a vast tortoise and supported the mountain on His back, at the same time entering the devas and asuras as strength so the churning could continue."}
]},
{n:28,t:"Gifts of the Ocean",kv:"28.1",
vt:"The Kālakūṭa poison emerged first from the churning ocean like molten fire, and Śiva drank it to please the Lord after the gods praised him with hymns.",
vs:"गरलं तरलानलं पुरस्ताज्जलधेरुद्विजगाल कालकूटम् । अमरस्तुतिवादमोदनिघ्नो गिरिशस्तन्निपपौ भवत्प्रियार्थम् ॥१॥",
qs:[
{q:"What was the first thing to emerge from the churning ocean?",o:["The goddess Lakṣmī","The Kālakūṭa poison","The wish-fulfilling cow Surabhi","The nectar of immortality"],a:1,exp:"Before any treasure came the Kālakūṭa — 'tarala-analam', like restless fire. Śiva drank it down, moved by the gods' hymns and, as the verse says, to please the Lord Himself."},
{q:"When Lakṣmī arose from the ocean, whom did she choose?",o:["Indra, king of the gods","Bali, king of the asuras","The Lord Viṣṇu, garlanding Him of her own accord","She remained with the ocean"],a:2,exp:"Rising in radiance while gods and demons alike hoped for her, Śrī passed them all by and placed her garland upon the Lord's chest, choosing Him as her eternal abode."},
{q:"Who finally rose from the ocean bearing the pot of nectar?",o:["Varuṇa","Candra","Airāvata","Dhanvantari"],a:3,exp:"After Surabhi, Vāruṇī, the Pārijāta tree, the apsarases, Airāvata, Uccaiḥśravas and the Kaustubha gem, Dhanvantari emerged holding the vessel of amṛta — at which the asuras seized it, setting up the next dasakam."}
]},
{n:29,t:"Incarnation as Mohini",kv:"29.1",
vt:"When the Asuras snatched the nectar that emerged from the Lord's hands, He consoled the helpless Devas and vanished, causing the demons to quarrel among themselves.",
vs:"उद्गच्छतस्तव करादमृतं हरत्सु दैत्येषु तानशरणाननुनीय देवान् । सद्यस्तिरोदधिथ देव भवत्प्रभावादुद्यत्स्वयूथ्यकलहा दितिजा बभूवु: ॥१॥",
qs:[
{q:"According to the opening verse of Dasakam 29, what happened among the Asuras after they seized the nectar?",o:["They fell to quarrelling among themselves","They drank it at once and became immortal","They hid it in the ocean","They offered it back to the Devas"],a:0,exp:"The Lord consoled the helpless devas and vanished — and by His power the daityas immediately fell into strife with their own kinsmen over who should drink first, buying the time that Mohinī would need."},
{q:"How did Mohinī obtain the pot of nectar from the Asuras?",o:["She seized it by force","Enchanted by her beauty, they handed it to her to divide fairly between the parties","She exchanged it for a boon","Garuḍa carried it away for her"],a:1,exp:"Bewitched by the incomparable woman who appeared before them, the asuras themselves entrusted her with the amṛta and agreed to abide by however she chose to distribute it."},
{q:"How was Rāhu detected while drinking the nectar in disguise?",o:["Mohinī recognised him at once","Indra saw through the disguise","The Sun and the Moon revealed him","He was betrayed by another asura"],a:2,exp:"Seated among the gods in disguise, Rāhu was exposed by Sūrya and Candra. The Lord severed his head with the Sudarśana — but the nectar had already reached his throat, and head and body survived as Rāhu and Ketu."}
]},
{n:30,t:"Incarnation as Vamana",kv:"30.1",
vt:"The noble Asura Bali, slain by Indra but revived by Śukrācārya and empowered by sacrifice, fearlessly conquered the three worlds as the terrified gods went into hiding.",
vs:"शक्रेण संयति हतोऽपि बलिर्महात्मा शुक्रेण जीविततनु: क्रतुवर्धितोष्मा । विक्रान्तिमान् भयनिलीनसुरां त्रिलोकीं चक्रे वशे स तव चक्रमुखादभीत: ॥१॥",
qs:[
{q:"According to the opening verse of Dasakam 30, how did Bali return to power after being slain by Indra?",o:["He was reborn as another demon","Brahmā granted him a boon of immortality","He was never truly killed","Śukrācārya restored him to life, and sacrifice increased his might"],a:3,exp:"'Śukreṇa jīvita-tanuḥ kratu-vardhitoṣmā' — brought back to life by Śukrācārya and his power swelled by sacrificial rites, Bali conquered the three worlds while the gods hid in fear."},
{q:"What did Aditi do on the advice of her husband Kaśyapa, to relieve the gods' distress?",o:["She appealed directly to Bali","She performed the Payovrata in worship of the Lord","She sent the gods to Brahmā","She undertook a fast unto death"],a:0,exp:"Grieving for her sons driven from heaven, Aditi was instructed by Kaśyapa in the Payovrata — a vow of worship sustained on milk — and the Lord, pleased, promised to be born as her own son."},
{q:"How does Dasakam 30 describe Vamana as He set out for Bali's sacrifice?",o:["As a mighty warrior in armour","As a radiant dwarf brahmacārin with umbrella, staff and deerskin","As an aged ascetic","As a king in royal procession"],a:1,exp:"The Lord appeared as a short-statured brahmacārin whose brilliance nonetheless dimmed the assembly, bearing the umbrella, staff, water-pot and deerskin of a student, and walked to the sacrificial ground of Bali."}
]}
];
const D2B = [];

export { D1, D1B, D2, D2B };
