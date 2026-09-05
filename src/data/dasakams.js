// Narayaneeyam Quiz Data — 3 questions per Dasakam, drawn from the Narayaneeyam text
// Populated: Dasakams 1-10 (D1), 21-30 (D2). D1B = 11-20, D2B = 31-40 (pending)
// vt = main takeaway from the dasakam

const D1 = [
{n:1,t:"Glory of the Lord",kv:"1.1",
vt:"The Supreme Brahman — dense concentrated Bliss and Pure Consciousness, beyond time and space — manifests visibly at Guruvāyūr. What fortune for all seekers!",
vs:"सान्द्रानन्दावबोधात्मकमनुपमितं कालदेशावधिभ्यां निर्मुक्तं नित्यमुक",
qs:[
{q:"What does Bhattathiri compare the Lord at Guruvayur to?",o:["The Ganga river","The Parijata wish-fulfilling tree","Mount Meru","The Sudarshana chakra"],a:1,exp:"Bhattathiri calls Guruvayurappan the wish-fulfilling tree of blessings."},
{q:"According to Dasakam 1, what quality of the Lord at Guruvayur makes His presence uniquely purifying?",o:["His ancient age","His pure Sattva nature, untouched by Rajas and Tamas","His location near the sea","His hidden form"],a:1,exp:"The Lord's Sattva nature makes Him uniquely pure and purifying."},
{q:"In Dasakam 1, Bhattathiri says the Lord grants boons even to whom?",o:["Only to brahmins","Only to those who perform elaborate rituals","Those who have not even asked — simply by bowing","Only to his devotees"],a:2,exp:"The Lord grants boons even to those who simply bow, without asking."}
]},
{n:2,t:"Formful Aspect of the Lord",kv:"2.1",
vt:"The Lord's form — crown rivalling the sun, merciful eyes, sweet smile, Kaustubha gem on His chest, adorned with Vanamālā and Śrīvatsa — is meditated upon by the blessed.",
vs:"सूर्यस्पर्धिकिरीटमूर्ध्वतिलकप्रोद्भासिफालान्तरं कारुण्याकुलनेत्र",
qs:[
{q:"What gem from the churning of the ocean adorns the Lord's chest?",o:["Syamantaka","Kaustubha","Chintamani","Padmaraga"],a:1,exp:"The Kaustubha gem, which emerged during the Samudra Manthan, adorns the Lord's chest."},
{q:"According to Dasakam 2, the Lord's form is described as being free from what two limitations?",o:["Birth and death","Hunger and thirst","Time and space","Sin and merit"],a:2,exp:"Bhattathiri describes the Lord as beyond time and space."},
{q:"What color is the Lord's form described as in Dasakam 2?",o:["Golden like the sun","White like the moon","Dark as a rain cloud","Red like the dawn"],a:2,exp:"The Lord is described as Shyamala (dark) like a rain cloud."}
]},
{n:3,t:"Suppliant Devotee",kv:"3.10",
vt:"Until Your compassion descends, I shall remain at Your feet, spending my days in prostration, praise, and worship to the best of my ability.",
vs:"किमुक्तैर्भूयोभिस्तव हि करुणा यावदुदियादहं तावद्देव प्रहितविविधार्थ",
qs:[
{q:"Bhattathiri composed Narayaneeyam while suffering from what ailment?",o:["Blindness","Paralysis (rheumatism)","Deafness","Fever"],a:1,exp:"Melapathur Narayana Bhattathiri was afflicted with severe paralysis (rheumatism)."},
{q:"How did Bhattathiri acquire his disease according to tradition?",o:["From a curse","He took on his guru Achyuta Pisharadi's paralysis out of compassion","From bathing in cold water","It was a test from the Lord"],a:1,exp:"Bhattathiri took on his guru's paralysis out of compassion."},
{q:"What does Bhattathiri ask for in the famous closing verse of Dasakam 3?",o:["Wealth and prosperity","Liberation from rebirth","Health, long life, and happiness to continue singing the Lord's glories","Supernatural powers"],a:2,exp:"Bhattathiri asks for health and life to continue worshipping the Lord."}
]},
{n:4,t:"Progress of the Spiritual Aspirant",kv:"4.1",
vt:"Grant me sufficient health so that I may worship You through the eight-limbed yoga. All paths of yoga ultimately lead to the Lord.",
vs:"कल्यतां मम कुरुष्व तावतीं कल्यते भवदुपासनं यया ।",
qs:[
{q:"How many limbs does Ashtanga Yoga have?",o:["Four","Six","Eight","Ten"],a:2,exp:"Ashtanga Yoga has eight limbs: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi."},
{q:"According to Dasakam 4, what is the final goal of all yoga practice?",o:["Physical fitness","Supernatural powers (siddhis)","Devotion to and realization of the Lord","Control over the elements"],a:2,exp:"The ultimate goal of yoga is devotion to and realization of the Lord."},
{q:"What is the eighth and final limb of Ashtanga Yoga described in Dasakam 4?",o:["Dharana (concentration)","Dhyana (meditation)","Samadhi (complete absorption)","Pratyahara (sense withdrawal)"],a:2,exp:"Samadhi is the eighth and final limb where the mind merges with the object of meditation."}
]},
{n:5,t:"Cosmic Evolution",kv:"5.10",
vt:"The Golden Egg remained in cosmic waters for a thousand years. Breaking it open, the Lord formed the fourteen worlds as the Virāṭ — manifesting as all beings.",
vs:"अण्डं तत्खलु पूर्वसृष्टसलिलेऽतिष्ठत् सहस्रं समा: ॥",
qs:[
{q:"What metaphor describes how the universe exists within the Lord?",o:["A dream within sleep","A city reflected in a mirror","A wave in the ocean","A flame in the wind"],a:1,exp:"The universe exists within the Lord like a dream within sleep."},
{q:"What philosophical concept does the mirror metaphor in Dasakam 5 illustrate?",o:["Karma","Maya — the apparent reality of the world that has no independent existence apart from God","Dharma","Samsara"],a:1,exp:"Maya is the illusory nature of the world, like a reflection in a mirror."},
{q:"According to Dasakam 5, who is the Virat Purusha?",o:["A separate deity of creation","The cosmic form of the Lord — the entire universe is His body","The first human being","An angelic being"],a:1,exp:"The Virat Purusha is the cosmic form of the Lord encompassing all existence."}
]},
{n:6,t:"Cosmos as Form of the Lord",kv:"6.1",
vt:"Pātāla is the Lord's foot-sole, Rasātala His upper feet, Mahātala His ankles — the fourteen worlds manifest through His cosmic form.",
vs:"एवं चतुर्दशजगन्मयतां गतस्य पातालमीश तव पादतलं वदन्ति ॥",
qs:[
{q:"In the Virat Swarupa description, what are identified as the Lord's two eyes?",o:["Stars and planets","Sun and Moon","Fire and water","Sky and earth"],a:1,exp:"In the Virat Purusha description, the Sun and Moon are the Lord's eyes."},
{q:"In the Virat Swarupa, what part of the Lord's body is the earth?",o:["His head","His navel","His feet","His chest"],a:2,exp:"The earth is described as the Lord's feet (pādau)."},
{q:"What is the spiritual purpose of describing the Virat Swarupa in Dasakam 6?",o:["To frighten the listener into submission","To show that the entire physical universe is a manifestation of God, removing the illusion of separateness","To glorify physical creation alone","To teach astronomy"],a:1,exp:"The Virat Swarupa reveals that all existence is the Lord's body, dissolving the sense of separation."}
]},
{n:7,t:"Brahma Commanded to Create",kv:"7.4",
vt:"In Vaikuṇṭha, Māyā never operates, sorrow and anger are absent — it radiates supreme bliss, existing beyond the fourteen worlds.",
vs:"माया यत्र कदापि नो विकुरुते भाते जगद्भ्यो बहिः शोकक्रोधविमोहसाध्वसमुख",
qs:[
{q:"From where does the lotus sprout that contains Brahma?",o:["From the cosmic ocean floor","From Vishnu's navel","From Shiva's third eye","From Saraswati's hand"],a:1,exp:"A lotus sprouts from Vishnu's navel, containing Brahma."},
{q:"What is the name of the serpent that serves as Vishnu's bed on the cosmic ocean?",o:["Vasuki","Takshaka","Ananta (Adishesha)","Kaliya"],a:2,exp:"Ananta, also called Adishesha, is the thousand-headed serpent on which Vishnu rests."},
{q:"According to Dasakam 7, what is the order of creation?",o:["Earth first, then water, then sky","From gross to subtle elements","From the Lord's will arise Mahat (cosmic intelligence), then Ahamkara, then the elements","All at once, with no sequence"],a:2,exp:"Creation proceeds from cosmic intelligence to ego to the five elements."}
]},
{n:8,t:"Dawn of Creation",kv:"8.10",
vt:"From the Lord's navel emerged a luminous lotus bud containing all dissolved worlds. In it, the lotus-born Brahmā appeared with all Vedas self-manifested within him.",
vs:"तवैव वेषे फणिराजि शेषे जलैकशेषे भुवने स्म शेषे। आनन्दसान्द्रानुभवस्वर",
qs:[
{q:"What did Brahma do before he could begin creating?",o:["He performed 1000 years of penance","He dove into the lotus stalk to find its source but failed","He consulted the four Vedas","He sought guidance from Shiva"],a:1,exp:"Brahma dove deep into the lotus stalk seeking its source, representing the search for ultimate truth."},
{q:"What word did Brahma hear from the cosmic waters that inspired his penance?",o:["Om","Hari","Tapa (penance)","Shruti"],a:2,exp:"Brahma heard the imperative to perform tapas — 'Tapa'."},
{q:"What does Brahma's failure to find the root of the lotus teach?",o:["That the lotus has no root","That intellectual seeking alone cannot reach God — divine grace and self-revelation are necessary","That creation is eternal with no beginning","That the Vedas are false"],a:1,exp:"Brahma's futile search teaches that divine truth cannot be grasped by intellect alone—it requires grace."}
]},
{n:9,t:"Brahma's Meditation and Vision",kv:"9.5",
vt:"Through a hundred divine years of unwavering meditation, enlightenment dawned on Brahmā. His inner vision beheld the Lord's wondrous form resting upon Ādiśeṣa.",
vs:"शतेन परिवत्सरैर्दृढसमाधिबन्धोल्लसत्प्रबोधविशदीकृतः स खलु पद्मिनीसम्भवः । अदृष्टचरमद्भुतं तव हि रूपमन्तर्दृशा व्यचष्ट परितुष्टधीर्भुजगभोगभागाश्रयम् ॥",
qs:[
{q:"According to Dasakam 9, how long did Brahma meditate before the Lord's form was revealed to him?",o:["A single day","Twelve years","A hundred divine years","Until the end of the kalpa"],a:2,exp:"Bhattathiri says 'śatena parivatsarair' — through a hundred divine years of firm samādhi, Brahmā's understanding was clarified."},
{q:"In the vision granted to Brahma, upon what was the Lord resting?",o:["A lotus throne","Ādiśeṣa, the serpent couch","The cosmic waters alone","Garuda's back"],a:1,exp:"The verse describes the Lord's form as 'bhujaga-bhoga-bhāgāśrayam' — reposing upon the coils of the divine serpent Ādiśeṣa."},
{q:"How did Brahma behold this form of the Lord?",o:["With his physical eyes, in the sky","With his inner vision (antar-dṛśā), through meditation","In a dream while asleep","Reflected in the cosmic waters"],a:1,exp:"The word 'antardṛśā' is key — Brahmā saw the Lord with the inner eye of meditation, not with outward sight, after his mind had been purified by penance."}
]},
{n:10,t:"Diversification of Creation",kv:"10.10",
vt:"Understanding the method, Brahmā divided his body into male and female — Manu and Śatarūpā — to multiply humanity and populate the worlds.",
vs:"जानन्नुपायमथ देहमजो विभज्य स्रीपुंसभावमभजन्मनुतद्वधूभ्याम् ॥",
qs:[
{q:"In Dasakam 10, into whom did Brahma divide his own body to further creation?",o:["Marichi and Atri","Manu and Śatarūpā","Sanaka and Sanandana","Daksha and Asikni"],a:1,exp:"Brahmā divided himself into male and female principles, appearing as Svāyambhuva Manu and his consort Śatarūpā, from whom humanity descends."},
{q:"Why did Brahma's mind-born sons Sanaka, Sanandana, Sanatana and Sanatkumara not assist in creation?",o:["They were cursed by their father","They chose renunciation and refused to procreate","They were destroyed by demons","They departed to Vaikuntha immediately"],a:1,exp:"The four Kumāras, devoted to nivṛtti (the path of withdrawal), declined Brahmā's command to procreate, choosing lifelong celibacy and contemplation instead."},
{q:"Who arose from Brahma's anger when creation did not proceed as he wished?",o:["Indra","Rudra","Yama","Agni"],a:1,exp:"Frustrated at the Kumāras' refusal, Brahmā's anger took form as Rudra, who was then instructed to create — but produced fierce beings and was asked to perform penance instead."}
]}
];

const D1B = [];
const D2 = [
{n:21,t:"Worship in Different Continents",kv:"21.1",
vt:"The poet seeks refuge in the Lord who resides as Saṅkarṣaṇa in the Ilāvṛta region, worshipped by Śiva with sacred hymns.",
vs:"मध्योद्भवे भुव इलावृतनाम्नि वर्षे गौरीप्रधानवनिताजनमात्रभाजि। शर्वेण मन्त्रनुतिभि: समुपास्यमानं सङ्कर्षणात्मकमधीश्वर संश्रये त्वाम् ॥१॥",
qs:[
{q:"In the Ilāvṛta region described in Dasakam 21, which form of the Lord is worshipped, and by whom?",o:["Nṛsiṃha, worshipped by Prahlāda","Saṅkarṣaṇa, worshipped by Śiva","Hayagrīva, worshipped by Bhadraśravas","Kūrma, worshipped by Aryamā"],a:1,exp:"The opening verse states that in Ilāvṛta — where Gaurī and her companions dwell — the Lord abides as Saṅkarṣaṇa, worshipped by Śarva (Śiva) with mantras and hymns of praise."},
{q:"Dasakam 21 surveys the varṣas of Jambūdvīpa. In Kimpuruṣa-varṣa, who is described as the Lord's worshipper?",o:["Nārada","Hanumān, worshipping Śrī Rāma","Manu","Bhūmi Devī"],a:1,exp:"Bhattathiri describes Hanumān as eternally worshipping Śrī Rāma in Kimpuruṣa-varṣa — one of the nine regions where a distinct form of the Lord is adored."},
{q:"What does Bhattathiri say makes Bhārata-varṣa uniquely fortunate among all the regions?",o:["Its inhabitants live the longest","It is the land of action (karma-bhūmi) where liberation can be won","It has the greatest material wealth","Its people never experience sorrow"],a:1,exp:"Though other varṣas offer greater enjoyment, Bhārata alone is the karma-bhūmi — the land where righteous action and devotion can be performed, making mokṣa attainable. Bhattathiri counts even the gods as envying birth here."}
]},
{n:22,t:"Story of Ajamila",kv:"22.1",
vt:"A virtuous brāhmaṇa named Ajāmila, while on an errand to the forest at his father's behest, encountered an immoral woman of loose character.",
vs:"अजामिलो नाम महीसुर: पुरा चरन् विभो धर्मपथान् गृहाश्रमी । गुरोर्गिरा काननमेत्य दृष्टवान् सुधृष्टशीलां कुलटां मदाकुलाम् ॥१॥",
qs:[
{q:"How does Dasakam 22 describe Ajamila before his fall?",o:["A wicked man from birth","A brāhmaṇa householder walking the paths of dharma","A king who abandoned his throne","A wandering ascetic"],a:1,exp:"The first verse calls him 'mahīsuraḥ' — a brāhmaṇa — 'caran dharmapathān gṛhāśramī', a householder faithfully treading the ways of righteousness, until the forest encounter undid him."},
{q:"At the moment of death, what act saved Ajamila from the messengers of Yama?",o:["A lifetime of ritual sacrifice","He called out the name of his youngest son, Nārāyaṇa","His wife prayed on his behalf","He gave away all his wealth"],a:1,exp:"Calling for his beloved youngest son, Ajāmila uttered 'Nārāyaṇa' — and though he meant only the boy, the Name itself summoned the Viṣṇudūtas, who disputed Yama's claim and released him."},
{q:"What did Ajamila do after he was granted a second life?",o:["He returned to his former ways","He went to Haridvāra, performed penance, and attained the Lord","He became a king","He remained with his family unchanged"],a:1,exp:"Transformed by what he had witnessed, Ajāmila renounced everything, went to Haridvāra and devoted himself to genuine worship — showing that grace opens the door, but the devotee must still walk through it."}
]},
{n:23,t:"Story of Chitraketu",kv:"23.1",
vt:"Dakṣa, son of the Pracetas, worshipped the Lord seeking to multiply progeny, and the Lord appeared with eight resplendent arms, granting him a boon and Asiknī as wife.",
vs:"प्राचेतसस्तु भगवन्नपरो हि दक्षस्त्वत्सेवनं व्यधित सर्गविवृद्धिकाम: । आविर्बभूविथ तदा लसदष्टबाहुस्तस्मै वरं ददिथ तां च वधूमसिक्नीम् ॥१॥",
qs:[
{q:"In what form did the Lord appear to Dakṣa Prācetasa at the opening of Dasakam 23?",o:["With four arms, bearing conch and discus","With eight resplendent arms","As a brilliant light without form","As Nṛsiṃha"],a:1,exp:"The verse says 'lasad-aṣṭa-bāhuḥ' — the Lord manifested with eight shining arms, granted Dakṣa his boon, and gave him Asiknī as his wife so that creation might multiply."},
{q:"How did King Chitraketu come to lose the son he had longed for?",o:["The child died in battle","The co-wives, consumed by jealousy, poisoned the child","The child was taken by a curse from Nārada","The child renounced the world"],a:1,exp:"Chitraketu, childless among many queens, obtained a son through sage Aṅgiras — but the other queens, envious that the child's mother alone was favoured, administered poison and killed him."},
{q:"What did Nārada and Aṅgiras reveal to the grieving Chitraketu?",o:["That his son would be reborn to him again","That the soul passes through countless births and such bonds are momentary","That he should perform a great sacrifice","That the queens should be executed"],a:1,exp:"The sages summoned the departed soul, which spoke of its innumerable births and asked which of its countless parents it should now call its own. Freed of grief, Chitraketu received the Saṅkarṣaṇa vidyā and attained the Lord's vision."}
]},
{n:24,t:"Story of Prahlada",kv:"24.1",
vt:"When Hiraṇyākṣa was slain by the Lord in His Boar form, his grief-stricken brother Hiraṇyakaśipu vowed before the demons to kill the Lord.",
vs:"हिरण्याक्षे पोत्रिप्रवरवपुषा देव भवता हते शोकक्रोधग्लपितधृतिरेतस्य सहज: । हिरण्यप्रारम्भ: कशिपुरमरारातिसदसि प्रतिज्ञमातेने तव किल वधार्थं मधुरिपो ॥१॥",
qs:[
{q:"What prompted Hiraṇyakaśipu's vow at the start of Dasakam 24?",o:["The theft of his kingdom by Indra","The slaying of his brother Hiraṇyākṣa by the Lord as Varāha","A prophecy about his own son","An insult from Brahmā"],a:1,exp:"The verse opens with Hiraṇyākṣa slain by the Lord in the form of the noble Boar. His brother, his composure destroyed by grief and rage, vowed in the demons' assembly to kill the Lord Himself."},
{q:"Where did Prahlada first receive instruction in devotion?",o:["From his teachers Ṣaṇḍa and Amarka","In his mother's womb, from the sage Nārada","From his father's court priests","From Brahmā directly"],a:1,exp:"While Kayādhu carried him, Nārada taught her the truths of bhakti — and the child in the womb absorbed every word, emerging as a devotee before he could walk."},
{q:"What was the outcome of Hiraṇyakaśipu's repeated attempts to kill his son?",o:["Prahlāda was gravely injured but survived","Every attempt — poison, elephants, serpents, fire, the sea — failed, for the Lord protected him","Prahlāda fled the kingdom","The demons refused to carry out the orders"],a:1,exp:"Poison, trampling elephants, serpents, fire, hurling from cliffs and drowning in the sea all left Prahlāda untouched, his mind absorbed in the Lord throughout — the Lord Himself standing as his protection."}
]},
{n:25,t:"Incarnation as Man-Lion",kv:"25.1",
vt:"When Hiraṇyakaśipu struck the pillar, a terrifying roar emerged that shook the universe and even caused Brahmā to tremble from his seat.",
vs:"स्तंभे घट्टयतो हिरण्यकशिपो: कर्णौ समाचूर्णयन्नाघूर्णज्जगदण्डकुण्डकुहरो घोरस्तवाभूद्रव: । श्रुत्वा यं किल दैत्यराजहृदये पूर्वं कदाप्यश्रुतं कम्प: कश्चन संपपात चलितोऽप्यम्भोजभूर्विष्टरात् ॥१॥",
qs:[
{q:"According to the opening verse of Dasakam 25, what effect did the roar from the pillar have on Brahma?",o:["He hastened to praise the Lord","He trembled and slipped from his lotus seat","He fled to Vaikuṇṭha","He was unable to hear it"],a:1,exp:"Bhattathiri says the roar shook the shell of the cosmic egg, struck an unprecedented tremor into the demon king's heart, and even made the lotus-born Brahmā stir and fall from his seat."},
{q:"How did the Man-Lion form circumvent every clause of Hiraṇyakaśipu's boon?",o:["By striking him while he slept","Neither man nor beast, at twilight, on the threshold, on His lap, with claws","By using a weapon forged by Brahmā","By having Prahlāda deliver the blow"],a:1,exp:"The boon excluded man and beast, day and night, indoors and outdoors, earth and sky, and all weapons. Nṛsiṃha was neither man nor beast, came at dusk, on the doorway, placed him on His lap, and used only His nails."},
{q:"Who finally pacified the Lord's terrible wrath after Hiraṇyakaśipu was slain?",o:["Brahmā's hymns","Prahlāda, approaching in humble devotion","Lakṣmī's intervention","Śiva as Śarabha"],a:1,exp:"None of the gods dared approach the blazing Nṛsiṃha. The child Prahlāda came forward and bowed, and at the touch of His devotee's devotion the Lord grew calm and blessed him."}
]},
{n:26,t:"Liberation of the Elephant-king",kv:"26.1",
vt:"King Indradyumna of the Pāṇḍya kingdom was so deeply absorbed in worshipping the Lord on Malaya mountain that he failed to notice the arrival of sage Agastya.",
vs:"इन्द्रद्युम्न: पाण्ड्यखण्डाधिराजस्त्वद्भक्तात्मा चन्दनाद्रौ कदाचित् । त्वत् सेवायां मग्नधीरालुलोके नैवागस्त्यं प्राप्तमातिथ्यकामम् ॥१॥",
qs:[
{q:"Why was King Indradyumna cursed to be born as an elephant?",o:["He insulted Agastya deliberately","Absorbed in worship, he failed to notice Agastya who had come seeking hospitality","He refused to give the sage alms","He hunted in the sage's forest"],a:1,exp:"The verse is careful on this point: 'tvat-sevāyāṁ magna-dhīḥ' — his mind was drowned in serving the Lord, and so he simply did not see Agastya arrive. The curse fell on an act of devotion, not of malice."},
{q:"After struggling with the crocodile for a thousand years, what did Gajendra finally do?",o:["He tore himself free by force","He lifted a lotus and cried out in surrender to the Lord","He summoned the other elephants for help","He resigned himself to death"],a:1,exp:"When his own strength was wholly exhausted, Gajendra raised a lotus in his trunk and called upon the Supreme — and the Lord, abandoning even Garuḍa in His haste, came at once."},
{q:"Who was the crocodile that seized Gajendra?",o:["An ordinary beast of the lake","A gandharva named Hūhū, cursed by the sage Devala","A demon sent by Hiraṇyakaśipu","A form assumed by Yama"],a:1,exp:"The crocodile was the gandharva Hūhū, condemned to that form by sage Devala. Struck by the Lord's discus, he too was released — both captor and captive liberated by the same act of grace."}
]},
{n:27,t:"Churning the Ocean for Nectar",kv:"27.1",
vt:"Sage Durvāsas gave a divine garland to Indra, but when Indra's elephant trampled it, the enraged sage cursed Indra, for forbearance is rare in those not born of the Lord.",
vs:"दर्वासास्सुरवनिताप्तदिव्यमाल्यं शक्राय स्वयमुपदाय तत्र भूय: । नागेन्द्रप्रतिमृदिते शशाप शक्रं का क्षान्तिस्त्वदितरदेवतांशजानाम् ॥१॥",
qs:[
{q:"What act brought Durvāsas' curse upon Indra?",o:["Indra refused the sage's gift","Indra's elephant trampled the divine garland the sage had given him","Indra failed to rise from his throne","Indra mocked the sage's appearance"],a:1,exp:"Indra placed the garland on Airāvata, who cast it down and trampled it. Bhattathiri adds a pointed aside — 'kā kṣāntiḥ' — what forbearance can be expected of those not born of the Lord's own portion?"},
{q:"What served as the churning rod and the churning rope for the ocean of milk?",o:["Mount Meru and Ādiśeṣa","Mount Mandara and Vāsuki","Mount Kailāsa and Takṣaka","Mount Malaya and Kāliya"],a:1,exp:"Mandara was uprooted as the churning staff and the serpent Vāsuki became the rope, the devas taking the tail and the asuras insisting on the head — where they were scorched by his breath."},
{q:"When Mount Mandara began sinking into the ocean, how did the Lord intervene?",o:["He held it up with one hand","He assumed the form of Kūrma, the tortoise, and bore it on His back","He commanded Varuṇa to raise it","He fixed it in place with the Sudarśana"],a:1,exp:"The Lord took the form of a vast tortoise and supported the mountain on His back, at the same time entering the devas and asuras as strength so the churning could continue."}
]},
{n:28,t:"Gifts of the Ocean",kv:"28.1",
vt:"The Kālakūṭa poison emerged first from the churning ocean like molten fire, and Śiva drank it to please the Lord after the gods praised him with hymns.",
vs:"गरलं तरलानलं पुरस्ताज्जलधेरुद्विजगाल कालकूटम् । अमरस्तुतिवादमोदनिघ्नो गिरिशस्तन्निपपौ भवत्प्रियार्थम् ॥१॥",
qs:[
{q:"What was the first thing to emerge from the churning ocean?",o:["The goddess Lakṣmī","The Kālakūṭa poison","The wish-fulfilling cow Surabhi","The nectar of immortality"],a:1,exp:"Before any treasure came the Kālakūṭa — 'tarala-analam', like restless fire. Śiva drank it down, moved by the gods' hymns and, as the verse says, to please the Lord Himself."},
{q:"When Lakṣmī arose from the ocean, whom did she choose?",o:["Indra, king of the gods","The Lord Viṣṇu, garlanding Him of her own accord","Bali, king of the asuras","She remained with the ocean"],a:1,exp:"Rising in radiance while gods and demons alike hoped for her, Śrī passed them all by and placed her garland upon the Lord's chest, choosing Him as her eternal abode."},
{q:"Who finally rose from the ocean bearing the pot of nectar?",o:["Varuṇa","Dhanvantari","Candra","Airāvata"],a:1,exp:"After Surabhi, Vāruṇī, the Pārijāta tree, the apsarases, Airāvata, Uccaiḥśravas and the Kaustubha gem, Dhanvantari emerged holding the vessel of amṛta — at which the asuras seized it, setting up the next dasakam."}
]},
{n:29,t:"Incarnation as Mohini",kv:"29.1",
vt:"When the Asuras snatched the nectar that emerged from the Lord's hands, He consoled the helpless Devas and vanished, causing the demons to quarrel among themselves.",
vs:"उद्गच्छतस्तव करादमृतं हरत्सु दैत्येषु तानशरणाननुनीय देवान् । सद्यस्तिरोदधिथ देव भवत्प्रभावादुद्यत्स्वयूथ्यकलहा दितिजा बभूवु: ॥१॥",
qs:[
{q:"According to the opening verse of Dasakam 29, what happened among the Asuras after they seized the nectar?",o:["They drank it at once and became immortal","They fell to quarrelling among themselves","They hid it in the ocean","They offered it back to the Devas"],a:1,exp:"The Lord consoled the helpless devas and vanished — and by His power the daityas immediately fell into strife with their own kinsmen over who should drink first, buying the time that Mohinī would need."},
{q:"How did Mohinī obtain the pot of nectar from the Asuras?",o:["She seized it by force","Enchanted by her beauty, they handed it to her to divide fairly between the parties","She exchanged it for a boon","Garuḍa carried it away for her"],a:1,exp:"Bewitched by the incomparable woman who appeared before them, the asuras themselves entrusted her with the amṛta and agreed to abide by however she chose to distribute it."},
{q:"How was Rāhu detected while drinking the nectar in disguise?",o:["Mohinī recognised him at once","The Sun and the Moon revealed him","Indra saw through the disguise","He was betrayed by another asura"],a:1,exp:"Seated among the gods in disguise, Rāhu was exposed by Sūrya and Candra. The Lord severed his head with the Sudarśana — but the nectar had already reached his throat, and head and body survived as Rāhu and Ketu."}
]},
{n:30,t:"Incarnation as Vamana",kv:"30.1",
vt:"The noble Asura Bali, slain by Indra but revived by Śukrācārya and empowered by sacrifice, fearlessly conquered the three worlds as the terrified gods went into hiding.",
vs:"शक्रेण संयति हतोऽपि बलिर्महात्मा शुक्रेण जीविततनु: क्रतुवर्धितोष्मा । विक्रान्तिमान् भयनिलीनसुरां त्रिलोकीं चक्रे वशे स तव चक्रमुखादभीत: ॥१॥",
qs:[
{q:"According to the opening verse of Dasakam 30, how did Bali return to power after being slain by Indra?",o:["He was reborn as another demon","Śukrācārya restored him to life, and sacrifice increased his might","Brahmā granted him a boon of immortality","He was never truly killed"],a:1,exp:"'Śukreṇa jīvita-tanuḥ kratu-vardhitoṣmā' — brought back to life by Śukrācārya and his power swelled by sacrificial rites, Bali conquered the three worlds while the gods hid in fear."},
{q:"What did Aditi do on the advice of her husband Kaśyapa, to relieve the gods' distress?",o:["She performed the Payovrata in worship of the Lord","She appealed directly to Bali","She sent the gods to Brahmā","She undertook a fast unto death"],a:1,exp:"Grieving for her sons driven from heaven, Aditi was instructed by Kaśyapa in the Payovrata — a vow of worship sustained on milk — and the Lord, pleased, promised to be born as her own son."},
{q:"How does Dasakam 30 describe Vamana as He set out for Bali's sacrifice?",o:["As a mighty warrior in armour","As a radiant dwarf brahmacārin with umbrella, staff and deerskin","As an aged ascetic","As a king in royal procession"],a:1,exp:"The Lord appeared as a short-statured brahmacārin whose brilliance nonetheless dimmed the assembly, bearing the umbrella, staff, water-pot and deerskin of a student, and walked to the sacrificial ground of Bali."}
]}
];
const D2B = [];

export { D1, D1B, D2, D2B };
