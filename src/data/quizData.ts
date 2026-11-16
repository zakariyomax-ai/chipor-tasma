export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const MAIN_TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Asar asoslari',
    question: '«Chipor tasma» hikoyasi ilk bor qaysi yilda nashr etilgan?',
    options: ['1887-yilda', '1892-yilda', '1895-yilda', '1902-yilda'],
    correctIndex: 1,
    explanation:
      'Hikoya ilk bor 1892-yil fevral oyida «The Strand Magazine» jurnalida chop etilgan va muallifning o‘zi uni eng sevimli Sherlok Xolms hikoyasi deb atagan.',
  },
  {
    id: 2,
    category: 'Syujet boshlanishi',
    question: 'Hikoya boshida Elen Stoner Sherlok Xolmsning Beyker-stritdagi uyiga qachon keladi?',
    options: [
      'Yarim tunda, kuchli yomg‘ir ostida',
      'Tushdan keyin soat uchda',
      'Erta tongda, soat yettiyu o‘n beshda',
      'Kechki ovqat paytida',
    ],
    correctIndex: 2,
    explanation:
      'Elen Stoner 1883-yil aprelining erta tongida, soat 07:15 atrofida vahima va qo‘rquv ichida Xolmsning uyiga kirib keladi.',
  },
  {
    id: 3,
    category: 'Qahramonlar',
    question: 'Elen Stonerning yoshi nechada edi va uning tashqi ko‘rinishidagi qaysi jihat Uotsonni hayratga soladi?',
    options: [
      '20 yoshda, qo‘lida doimiy yara izi bor edi',
      '30 yoshda, sochlari vaqtidan oldin oqarib ketgan edi',
      '25 yoshda, oqsoqlanib yurar edi',
      '35 yoshda, ko‘zoynak taqar edi',
    ],
    correctIndex: 1,
    explanation:
      'Elen endigina 30 yoshga kirgan bo‘lsa-da, boshidan kechirgan dahshatlar sababli sochlariga erta oq oralagan edi.',
  },
  {
    id: 4,
    category: 'Makon',
    question: 'Doktor Grimsbi Roylott va o‘gay qizlari yashagan qadimiy qo‘rg‘on qanday nomlanadi?',
    options: ['Baskervil-xoll', 'Stok-Moran', 'Rezyenbax', 'Abbot-Grendj'],
    correctIndex: 1,
    explanation:
      'Voqealar Angliyaning Sarri grafligi g‘arbidagi Roylottlar oilasiga tegishli qadimiy Stok-Moran mulkida bo‘lib o‘tadi.',
  },
  {
    id: 5,
    category: 'Jinoyatchi',
    question: 'Doktor Roylott ilgari qaysi davlatda shifokorlik qilgan va qamalib chiqqan edi?',
    options: ['Misrda', 'Janubiy Afrikada', 'Hindistonda (Kalkuttada)', 'Avstraliyada'],
    correctIndex: 2,
    explanation:
      'Doktor Roylott Hindistonning Kalkutta shahrida amaliyot yuritgan, g‘azab ustida mahalliy xizmatkorini urib o‘ldirgani uchun qamoq jazosini o‘tagan.',
  },
  {
    id: 6,
    category: 'Motive / Sabab',
    question: 'Doktor Roylott nima uchun o‘gay qizlarining turmushga chiqishiga tish-tirnog‘i bilan qarshi edi?',
    options: [
      'U qizlarni o‘z uyida xizmatkor sifatida ushlab turishni xohlardi',
      'Marhuma xotinining vasiyatiga ko‘ra qizlar turmushga chiqsa, ularning har biriga yillik daromaddan katta ulush berilishi kerak edi',
      'Kuyovlarning kelib chiqishi aslzoda emas edi',
      'Roylott qizlarning shaharga ko‘chib ketishidan uyalardi',
    ],
    correctIndex: 1,
    explanation:
      'Vasiyatga binoan qizlar turmushga chiqsa, har biriga yiliga 250 funt sterlingdan berilishi lozim edi; qishloq xo‘jaligi inqirozi sababli Roylottning o‘zi esa moliyaviy qiyinchilikka tushib qolgan edi.',
  },
  {
    id: 7,
    category: 'Fojia tafsiloti',
    question: 'Elenning egizak opasi Juliya Stoner qachon va qanday sharoitda vafot etgan?',
    options: [
      'Ikki yil avval, to‘yidan ikki hafta oldin tunda',
      'Besh yil avval, poezd halokatida',
      'Bir yil avval, bog‘da sayr qilib yurganida',
      'O‘n yil avval, Hindistondan qaytayotganda',
    ],
    correctIndex: 0,
    explanation:
      'Juliya bundan ikki yil oldin, dengiz piyodalari mayoriga turmushga chiqishidan bor-yo‘g‘i ikki hafta muqaddam bo‘ronli tunda sirli ravishda vafot etgan.',
  },
  {
    id: 8,
    category: 'So‘nggi so‘zlar',
    question: 'Juliya Stoner jon berishidan oldin opasining qo‘lida turib aytgan so‘nggi kalit so‘z nima edi?',
    options: [
      '«Qoch, Elen, u kelyapti!»',
      '«Ey Xudo! Elen! Bu tasma! Chipor tasma!»',
      '«Derazani och, nafas ololmayapman!»',
      '«Lo‘lilar xonaga kirdi!»',
    ],
    correctIndex: 1,
    explanation:
      'Juliya dahshat ichida doktor Roylottning xonasi tomonga ishora qilib, «Chipor tasma!» deb qichqirgan. Elen buni uzoq vaqt bog‘da yurgan lo‘lilarning ro‘moliga yo‘ygan.',
  },
  {
    id: 9,
    category: 'Tungi belgi',
    question: 'Juliya ham, keyinroq Elen ham kechasi soat uchlar atrofida qanday g‘alati tovushlarni eshitishgan?',
    options: [
      'Qadam tovushi va eshik g‘ichirlashini',
      'Past, aniq hushtak ovozi va ortidan temir jaranglagandek tovushni',
      'Itlarning uvillashi va deraza taqillashini',
      'Kamin ichidan kelayotgan musiqa sadosini',
    ],
    correctIndex: 1,
    explanation:
      'Har ikkala opa-singil tungi sukunatda past va aniq hushtak ovozini, bir necha soniyadan keyin esa metall jaranglagandek tovushni (seyf eshigi yopilishini) eshitishgan.',
  },
  {
    id: 10,
    category: 'Qo‘rg‘on muhiti',
    question: 'Doktor Roylott Stok-Moran bog‘ida qanday yovvoyi hayvonlarni erkin qo‘yib yuborardi?',
    options: [
      'Yo‘lbars va shoxdor bug‘u',
      'Hind gepardi va paviyan (maymun)',
      'Bo‘ri va qora qoplon',
      'Timsoh va burgut',
    ],
    correctIndex: 1,
    explanation:
      'Hindistondagi tanishlari unga gepard va paviyan yuborib turgan; bu hayvonlar tunda bog‘da erkin kezib, odamlarni qo‘rqitardi.',
  },
  {
    id: 11,
    category: 'Xolms bilan uchrashuv',
    question: 'Doktor Roylott Beyker-stritga kelib Xolmsga dag‘dag‘a qilganida o‘z kuchini ko‘rsatish uchun nima qiladi?',
    options: [
      'Yog‘och stolni mushti bilan sindiradi',
      'Temir kamin kosovini (kashakni) qo‘li bilan egib qo‘yadi',
      'Devor soatini yerga urib chilparchin qiladi',
      'Deraza romini sug‘urib tashlaydi',
    ],
    correctIndex: 1,
    explanation:
      'Roylott po‘lat kamin kosovini ikki buklab tashlaydi, ammo u ketgach, Sherlok Xolms o‘zining ham jismoniy kuchi kam emasligini ko‘rsatib, temirni yana to‘g‘rilab qo‘yadi.',
  },
  {
    id: 12,
    category: 'Bahona',
    question: 'Roylott Elenani o‘z xonasidan marhuma opasi Juliyaning xonasiga ko‘chirish uchun qanday bahona topadi?',
    options: [
      'Elenning xonasida yong‘in chiqqanini aytadi',
      'Xonaning tashqi devorini ta’mirlash kerakligini bahona qiladi',
      'U xonaga mehmon kelishini bildiradi',
      'Xonada namgarchilik borligini ro‘kach qiladi',
    ],
    correctIndex: 1,
    explanation:
      'Xolms tashqi devorni ko‘zdan kechirganda ta’mirlashga zarracha zarurat yo‘qligini ko‘radi; bu shunchaki Elenani o‘z xonasiga tutash o‘rta xonaga o‘tkazish uchun hiyla edi.',
  },
  {
    id: 13,
    category: 'Dalil 1',
    question: 'Xolms Elenning yangi xonasidagi qo‘ng‘iroq ipini tekshirganda qanday g‘ayritabiiy holatni aniqlaydi?',
    options: [
      'Ipga zahar surtilgan ekan',
      'Ip hech qanday qo‘ng‘iroq simiga ulanmagan soxta ip ekan',
      'Ip karavotdan ikki metr uzoqda osilgan ekan',
      'Ip tilladan to‘qilgan ekan',
    ],
    correctIndex: 1,
    explanation:
      'Qo‘ng‘iroq ipi shunchaki yuqoridagi ilmoqqa bog‘langan bo‘lib, xizmatkor xonasiga boradigan birorta simga ulanmagan edi.',
  },
  {
    id: 14,
    category: 'Dalil 2',
    question: 'Xonadagi ventilyatsiya tuynugi nima uchun Xolmsning shubhasini uyg‘otadi?',
    options: [
      'U tashqi havoga emas, qo‘shni xonaga (Roylottning yotoqxonasiga) ochilgan edi',
      'Tuynuk ichida eski xatlar yashirilgan edi',
      'Uning panjarasi oltindan yasalgan edi',
      'Undan doim tutun chiqib turardi',
    ],
    correctIndex: 0,
    explanation:
      'Xolms ta’kidlaganidek, aqli raso me’mor hech qachon ventilyatsiyani tashqi havo o‘rniga qo‘shni odamning yotoqxonasiga ochmaydi.',
  },
  {
    id: 15,
    category: 'Dalil 3',
    question: 'Karavot nima sababdan polga mahkam qotirib qo‘yilgan edi?',
    options: [
      'Zilzila paytida ag‘darilib ketmasligi uchun',
      'Xonada yotgan qiz karavotni qo‘ng‘iroq ipi ostidan siljita olmasligi uchun',
      'Uy qadimiy me’morchilik yodgorligi bo‘lgani uchun',
      'Xizmatkorlar tozalashda qiyinmasligi uchun',
    ],
    correctIndex: 1,
    explanation:
      'Karavot polga qotirilgani sababli qurbon bevosita ventilyatsiya tuynugi va qo‘ng‘iroq ipi ostida uxlashga majbur edi.',
  },
  {
    id: 16,
    category: 'Dalil 4',
    question: 'Doktor Roylottning xonasidagi temir seyf ustida turgan kichkina likopchada nima bor edi?',
    options: ['Quritilgan go‘sht', 'Sut', 'Suv va o‘tlar', 'Asal'],
    correctIndex: 1,
    explanation:
      'Xolms temir seyf ustida sut solingan kichik likopchani ko‘radi; bu Roylottning uyda ilon boqishini tasdiqlovchi muhim dalil bo‘ladi.',
  },
  {
    id: 17,
    category: 'Tungi pistirma',
    question: 'Xolms va Uotson xonaga kirishi mumkinligi haqida Elen Stoner ularga qanday ishora berishi kerak edi?',
    options: [
      'Derazada yoritilgan chiroqni qo‘yib ishora qilishi',
      'Uch marta eshikni taqillatishi',
      'Qishloqdagi cherkov qo‘ng‘irog‘ini chalishi',
      'Xizmatkor orqali xat yuborishi',
    ],
    correctIndex: 0,
    explanation:
      'Roylott o‘z xonasiga kirib yotgach, Elen derazaga chiroq qo‘yib ishora beradi; shundan so‘ng mehmonxonadan kuzatib turgan Xolms va Uotson xonaga kirishadi.',
  },
  {
    id: 18,
    category: 'Qotillik quroli',
    question: 'Aslida «chipor tasma» nima bo‘lib chiqadi?',
    options: [
      'Lo‘lilar ishlatadigan zaharli o‘q-yoy',
      'Hindistonning eng zaharli botqoqlik iloni (swamp adder)',
      'Roylottning belbog‘iga yashirilgan xanjar',
      'Zaharli o‘rgimchak turi',
    ],
    correctIndex: 1,
    explanation:
      '«Chipor tasma» — Hindistondan keltirilgan halokatli botqoqlik iloni bo‘lib, uning terisi chipor naqshli va zahari bir necha soniyada o‘ldiruvchi xususiyatga ega edi.',
  },
  {
    id: 19,
    category: 'Kulminatsiya',
    question: 'Tunda ilon qo‘ng‘iroq ipidan tushayotganini sezgan Sherlok Xolms qanday harakat qiladi?',
    options: [
      'Uotsonga to‘pponchadan otishni buyuradi',
      'Gugurt chaqib, tayoq (qamchi) bilan qo‘ng‘iroq ipini qattiq savalaydi',
      'Eshikni ochib tashqariga yuguradi',
      'Ilonni bo‘sh qopga solib oladi',
    ],
    correctIndex: 1,
    explanation:
      'Xolms zudlik bilan chiroq yoqib, yupqa tayog‘i bilan ipga zarba beradi; og‘riq va qo‘rquvdan g‘azablangan ilon tuynuk orqali orqaga qaytib ketadi.',
  },
  {
    id: 20,
    category: 'Xotima',
    question: 'Hikoya yakunida doktor Roylottning taqdiri qanday kechadi?',
    options: [
      'Politsiya tomonidan qo‘lga olinib sud qilinadi',
      'Hindistonga qochib ketadi',
      'Ortiga qaytgan ilon o‘z xo‘jayini Roylottni chaqib o‘ldiradi',
      'Xolms bilan olishuvda derazadan yiqiladi',
    ],
    correctIndex: 2,
    explanation:
      'Xolmsning zarbasidan quturgan ilon qo‘shni xonaga qaytib, stulda o‘tirgan Roylottning boshiga o‘raladi va uni chaqib o‘ldiradi.',
  },
];

export const PDF_TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 101,
    category: 'Matn va sanalar',
    question: 'Doktor Uotson «Chipor tasma» voqeasi qaysi yil va qaysi oyda yuz berganini aniq qayd etadi?',
    options: [
      '1881-yil noyabr',
      '1883-yil aprel',
      '1887-yil may',
      '1890-yil mart',
    ],
    correctIndex: 1,
    explanation:
      'Hikoyaning kirish qismida doktor Uotson voqealar 1883-yil aprel oyining boshlarida, u hali Beyker-stritda Xolms bilan birga yashagan paytda sodir bo‘lganini yozadi.',
  },
  {
    id: 102,
    category: 'Oilaviy tarix',
    question: 'Elen va Juliyaning marhuma onasi — missis Stoner qanday vafot etgan edi?',
    options: [
      'Hindistonda bezgak kasalligidan',
      'Kryu (Crewe) yaqinidagi temir yo‘l halokatida',
      'Stok-Moran qo‘rg‘onidagi yong‘inda',
      'Dengiz safarida kema cho‘kishi natijasida',
    ],
    correctIndex: 1,
    explanation:
      'Oilasi Angliyaga qaytganidan so‘ng, sakkiz yil avval Kryu yaqinidagi temir yo‘l falokatida missis Stoner halok bo‘lgan edi.',
  },
  {
    id: 103,
    category: 'Meros tafsiloti',
    question: 'Missis Stoner vafot etganida qoldirgan yillik daromad qancha edi va qishloq xo‘jaligi inqirozidan keyin qanchaga tushib qolgan?',
    options: [
      '1100 funtdan 750 funtga tushib qolgan',
      '2000 funtdan 1000 funtga tushib qolgan',
      '500 funtdan 250 funtga tushib qolgan',
      '3000 funtdan 900 funtga tushib qolgan',
    ],
    correctIndex: 0,
    explanation:
      'Dastlab yiliga 1100 funt sterling bo‘lgan meros daromadi qishloq xo‘jaligi narxlari pasayishi tufayli 750 funtga kamayib qolgan edi.',
  },
  {
    id: 104,
    category: 'Qahramonlar hayoti',
    question: 'Elen Stoner kimga turmushga chiqish arafasida edi?',
    options: [
      'Mayor Jeyms Sholtoga',
      'Persi Armitejga',
      'Artur Morstanga',
      'Henri Baskervilga',
    ],
    correctIndex: 1,
    explanation:
      'Elen Stoner Xolms huzuriga kelgan paytda qo‘shni okrugdagi Persi Armitej bilan unashtirilgan bo‘lib, bahorda to‘ylari bo‘lishi kerak edi.',
  },
  {
    id: 105,
    category: 'Kuzatuvchanlik (Deduksiya)',
    question: 'Elen Xolmsning oldiga kirib kelishi bilanoq Xolms uning Londonga qanday yetib kelganini qayeridan bilib oladi?',
    options: [
      'Soyabonidagi yorliqdan',
      'Yengidagi loy sachragan izlar va chipta bo‘lagidan',
      'Qo‘lidagi temir yo‘l chamadonidan',
      'Poyabzalining rangi va hididan',
    ],
    correctIndex: 1,
    explanation:
      'Xolms uning qo‘lqopida qaytish poezdi chiptasini, chap yengida esa ikki g‘ildirakli arava (dog-cart) loyining yetti joyda yangi sachragan izini ko‘rib, u erta tongda aravada stansiyaga borganini aniqlaydi.',
  },
  {
    id: 106,
    category: 'Jismoniy dalil',
    question: 'Xolms Elen Stonerning bilagida qanday izni ko‘rib, uni doktor Roylott qattiq xafa qilganini tushunadi?',
    options: [
      'Qamchi urilgan qizil izni',
      'Besh barmoqning ko‘karib qolgan qattiq siqish izini',
      'Kuyish chandig‘ini',
      'Zanjir bilan bog‘langan izni',
    ],
    correctIndex: 1,
    explanation:
      'Elen bilagini ko‘rsatganda unda beshta barmoq va bosh barmoqning shafqatsizlarcha siqqan ko‘k izlari ko‘rinadi; bu Roylottning zo‘ravon tabiatini tasdiqlaydi.',
  },
  {
    id: 107,
    category: 'Tekshiruv tafsiloti',
    question: 'Juliya vafot etgan tunda u xonasini qanday himoyalagan edi?',
    options: [
      'Eshikni ichkaridan zanjirlab, deraza qopqoqlarini og‘ir temir tamba bilan bekitgan edi',
      'Eshik oldiga og‘ir javon surib qo‘ygan edi',
      'Xizmatkorni eshik oldiga qo‘riqchi qilib qo‘ygan edi',
      'Derazalarni g‘isht bilan urib tashlagan edi',
    ],
    correctIndex: 0,
    explanation:
      'Har kecha yovvoyi hayvonlardan qo‘rqqani uchun xona eshigi ichkaridan qulflanar, deraza qopqoqlari esa tashqaridan ham ochib bo‘lmaydigan temir tamba bilan mahkamlanardi.',
  },
  {
    id: 108,
    category: 'Hid va atmosfera',
    question: 'Juliya o‘limi kechasida Elen koridorda qanday hidni sezgan edi?',
    options: [
      'Oltingugurt hidini',
      'Kuchli hind sigarasi tutunini',
      'Atirgul moyi hidini',
      'Ko‘mir tutunini',
    ],
    correctIndex: 1,
    explanation:
      'Elen koridorda kuchli sigara tutunini sezgan — doktor Roylott har doim kuchli hind sigaralari chekardi, bu uning o‘sha kecha uyg‘oq bo‘lganidan darak berardi.',
  },
  {
    id: 109,
    category: 'Yolg‘on iz',
    question: 'Juliya vafotidan keyingi dastlabki tergovda nima uchun «chipor tasma» so‘zi lo‘lilar bilan bog‘langan edi?',
    options: [
      'Lo‘lilar xona derazasidan qochayotgani ko‘rilgan edi',
      'Roylottning bog‘ida lo‘lilar lageri bor edi va ular boshiga chipor (xol-xol) ro‘mol o‘rashardi',
      'Lo‘lilar uyga qo‘riqchi bo‘lib yollangan edi',
      'Xonadan lo‘lilarga tegishli tanga topilgan edi',
    ],
    correctIndex: 1,
    explanation:
      'Doktor Roylott lo‘lilarga o‘z yerida chodir tikishga ruxsat bergan edi; lo‘lilarning boshlaridagi xol-xol ro‘mol («chipor tasma») Elen va tergovchilarni chalg‘itgan.',
  },
  {
    id: 110,
    category: 'Tibbiy ekspertiza',
    question: 'Nima uchun o‘sha davr shifokorlari Juliya o‘limiga ilon zahari sabab bo‘lganini aniqlay olmagan?',
    options: [
      'Roylott shifokorlarga pora bergan edi',
      'Botqoqlik ilonining tish izlari deyarli ko‘rinmas ikki nuqta bo‘lib, zahari esa kimyoviy tahlilda aniqlanmasdi',
      'Shifokorlar jasadni ko‘rishdan bosh tortishgan edi',
      'Jasad ertasi kuniyoq kuydirilgan edi',
    ],
    correctIndex: 1,
    explanation:
      'Xolms ta’kidlaganidek, bunday o‘tkir organik zaharlar tibbiy ekspertizada aniqlanmaydi va ilonning ikki mayda tish izi e’tibordan chetda qolishi mumkin.',
  },
  {
    id: 111,
    category: 'Tergov harakati',
    question: 'Doktor Roylott Londonga kelganida Xolms vaqtini qanday foydali ishga sarflaydi?',
    options: [
      'Skotland-Yardda arxiv titadi',
      'Doktors-Kommons (Doctors’ Commons) ga borib, missis Stonerning vasiyatnomasini o‘qiydi',
      'Hayvonot bog‘idan ilonlar haqida ma’lumot so‘raydi',
      'Temir yo‘l stansiyasida chipta tekshiradi',
    ],
    correctIndex: 1,
    explanation:
      'Xolms peshindan keyin Doktors-Kommons arxiviga borib, marhuma onaning vasiyatnomasini shaxsan ko‘rib chiqadi va Roylottning moliyaviy manfaatini aniq hisoblab chiqadi.',
  },
  {
    id: 112,
    category: 'Xona tuzilishi',
    question: 'Stok-Moran qasrining birinchi qavatidagi uchta yotoqxona qanday tartibda joylashgan edi?',
    options: [
      'Birinchi — Roylottniki, o‘rtada — Juliyaniki, uchinchisi — Elenniki',
      'Birinchi — Elenniki, o‘rtada — Roylottniki, uchinchisi — Juliyaniki',
      'Ular bir-biridan alohida qanotlarda joylashgan edi',
      'Har biri alohida qavatda joylashgan edi',
    ],
    correctIndex: 0,
    explanation:
      'Uch xona bir qatorda joylashgan: burchakda Roylott xonasi, uning yonida o‘rta xona (Juliya xonasi) va chetda Elen xonasi. Shu bois Elenni o‘rta xonaga ko‘chirish Roylottga kerak edi.',
  },
  {
    id: 113,
    category: 'Yashirin dalil',
    question: 'Roylottning xonasidagi yog‘och stul Xolmsga nimani isbotlaydi?',
    options: [
      'Stulda qon dog‘i borligini',
      'Stul o‘tirg‘ichida birovning oyoq bosib, tuynuk tomon chiqqan izlari borligini',
      'Stul tagida kalit yashirilganini',
      'Stulning bir oyog‘i singanligini',
    ],
    correctIndex: 1,
    explanation:
      'Stul o‘tirg‘ichidagi izlar Roylott unga chiqib, devordagi ventilyatsiya tuynugi oldiga yetib borganini yaqqol ko‘rsatar edi.',
  },
  {
    id: 114,
    category: 'Asbob-anjom',
    question: 'Roylottning xonasidagi karavot ustuniga osilgan kichik it qamchisining o‘ziga xos jihati nimada edi?',
    options: [
      'Uning dastasi kumushdan edi',
      'Uchi tugun qilib halqa (sirtmoq) shaklida bog‘langan edi',
      'Unga qo‘ng‘iroqcha osilgan edi',
      'U temir zanjirdan yasalgan edi',
    ],
    correctIndex: 1,
    explanation:
      'Qamchi uchi qisqa sirtmoq qilib bog‘langan bo‘lib, Xolms buni ilonni ushlab olish va seyfga qaytarib solish uchun ishlatilganini darhol payqaydi.',
  },
  {
    id: 115,
    category: 'Logistika',
    question: 'Xolms va Uotson kechki kuzatuvdan oldin qayerda xona band qilishadi?',
    options: [
      '«Crown» (Toj) mehmonxonasida',
      'Stok-Moran qishlog‘i cherkovi hovlisida',
      'Persi Armitejning uyida',
      'Vokzal kutish zalida',
    ],
    correctIndex: 0,
    explanation:
      'Ular Stok-Moran qasri qarshisidagi «Crown Inn» mehmonxonasining yuqori qavatidan xona olib, u yerdan Elenning derazasini kuzatib o‘tirishadi.',
  },
  {
    id: 116,
    category: 'Qurollanish',
    question: 'Tungi pistirmaga kirishdan oldin Xolms doktor Uotsondan o‘zi bilan nimani olishni so‘raydi?',
    options: [
      'Katta pichoq va fonarni',
      'Armiyada ishlatgan revolver to‘pponchasini',
      'Dorilar qutisini',
      'Temir zanjirni',
    ],
    correctIndex: 1,
    explanation:
      'Xolms bu safar ish nihoyatda xavfli ekanini ta’kidlab, Uotsondan xizmat revolverini olishni so‘raydi; o‘zi esa yupqa uzun tayoq (qamchi) oladi.',
  },
  {
    id: 117,
    category: 'Zulm psixologiyasi',
    question: 'Xolms Roylott haqida gapirar ekan, dunyodagi eng xavfli jinoyatchi kimligini aytadi?',
    options: [
      'Kambag‘al va ilmsiz o‘g‘ri',
      'O‘z bilimini yovuzlik yo‘lida ishlatadigan shifokor',
      'Tajribali dengiz qaroqchisi',
      'Siyosiy fitnachi',
    ],
    correctIndex: 1,
    explanation:
      'Xolmsning mashhur gapi: «Shifokor yomon yo‘lga kirsa, jinoyatchilarning eng dahshatlisiga aylanadi — unda asab ham, bilim ham yetarli».',
  },
  {
    id: 118,
    category: 'Adolat tamoyili',
    question: 'Roylott o‘lganidan keyin Xolms o‘zining bu o‘limdagi roli haqida qanday xulosa chiqaradi?',
    options: [
      'O‘zini qotillikda aybdor deb hisoblaydi',
      'Zo‘ravonlik doim zo‘ravonning o‘ziga qaytishini va vijdoni qiynalmasligini aytadi',
      'Politsiyaga taslim bo‘lishga qaror qiladi',
      'Izquvarlik faoliyatini to‘xtatadi',
    ],
    correctIndex: 1,
    explanation:
      'Xolms bilvosita Roylottning o‘limiga sababchi bo‘lganini tan olsa-da, "zo‘ravonlik o‘z egasiga qaytadi" deya vijdoni pok ekanini bildiradi.',
  },
  {
    id: 119,
    category: 'Muallif biografiyasi',
    question: 'Ser Artur Konan Doyl Sherlok Xolms obrazini yaratishda universitetdagi qaysi ustozidan ilhomlangan?',
    options: [
      'Professor Chellenjerdan',
      'Jarroh Jozef Belldan',
      'Charlz Doyldan',
      'Jorj Edaljidan',
    ],
    correctIndex: 1,
    explanation:
      'Edinburg universitetidagi ustozi jarroh Jozef Bell bemorning tashqi ko‘rinishiga qarab uning kasbi va kasalligini aniqlash qobiliyati bilan Xolmsga prototip bo‘lgan.',
  },
  {
    id: 120,
    category: 'Muallif merosi',
    question: 'Artur Konan Doyl Sherlok Xolms haqida jami nechta qissa va nechta hikoya yozgan?',
    options: [
      '2 ta qissa va 40 ta hikoya',
      '4 ta qissa va 56 ta hikoya',
      '6 ta qissa va 50 ta hikoya',
      '4 ta qissa va 60 ta hikoya',
    ],
    correctIndex: 1,
    explanation:
      'Muallif Sherlok Xolms haqida jami 4 ta qissa («Alvon rangli etyud», «To‘rtlar belgisi», «Baskervillar iti», «Dahshatlar vodiysi») va 56 ta hikoya yozgan.',
  },
  {
    id: 121,
    category: 'Muallif faoliyati',
    question: 'Konan Doylga 1902-yilda qirol Eduard VII tomonidan «Ser» (ritsar) unvoni qaysi xizmatlari uchun berilgan?',
    options: [
      'Faqat «Chipor tasma» hikoyasini yozgani uchun',
      'Ikkinchi Angliya-Bur urushi haqidagi tarixiy asarlari va dala gospitalidagi shifokorlik xizmatlari uchun',
      'Parlamentga saylangani uchun',
      'Portsmut futbol klubidagi o‘yini uchun',
    ],
    correctIndex: 1,
    explanation:
      'U 1899–1902-yillardagi urushda Janubiy Afrikada ko‘ngilli shifokor bo‘lib ishlagan va urush haqida tarixiy asarlar yozgani uchun ritsarlik unvonini olgan.',
  },
  {
    id: 122,
    category: 'Adabiy fakt',
    question: 'Muallif 1893-yilda Xolmsni «So‘nggi ish» hikoyasida halok qilgach, uni qaysi hikoya orqali yana qaytargan?',
    options: [
      '«Baskervillar iti» (1902)',
      '«Bo‘sh uydagi sarguzasht» (1903)',
      '«Qizil boshqotirma» (1901)',
      '«Chipor tasma» (1892)',
    ],
    correctIndex: 1,
    explanation:
      'O‘quvchilarning qat’iy talabidan so‘ng Konan Doyl 1903-yilda «Bo‘sh uydagi sarguzasht» hikoyasida Xolmsni qayta tiriltirgan.',
  },
  {
    id: 123,
    category: 'Huquqiy faoliyat',
    question: 'Konan Doylning haqiqiy hayotda nohaq sudlangan Jorj Edalji va Oskar Sleyterlarni himoya qilishi Angliyada qanday islohotga turtki berdi?',
    options: [
      'Politsiya akademiyasi ochilishiga',
      'Apellyatsiya sudining tuzilishiga',
      'Qamoqxonalarning yopilishiga',
      'Yangi konstitutsiya qabul qilinishiga',
    ],
    correctIndex: 1,
    explanation:
      'Yozuvchining shaxsiy deduktiv surishtiruvlari nohaq mahkumlarning oqlanishiga olib keldi va Angliyada Apellyatsiya sudi tashkil etilishiga sabab bo‘ldi.',
  },
  {
    id: 124,
    category: 'Adabiy tahlil',
    question: '«Chipor tasma» asarida «yopiq xona siri» (locked-room mystery) qaysi muhandislik usuli orqali hal qilinadi?',
    options: [
      'Pol tagidagi maxfiy yerto‘la eshigi orqali',
      'Devordagi soxta ventilyatsiya tuynugi va qo‘ng‘iroq ipi orqali',
      'Kamindagi mo‘ri teshigi orqali',
      'Zaxira kalit yasash orqali',
    ],
    correctIndex: 1,
    explanation:
      'Eshik va derazalar mahkam yopilgan bo‘lsa-da, devor tepasidagi tuynuk va qo‘ng‘iroq ipi qotil qurolning xonaga kirib-chiqish yo‘li edi.',
  },
  {
    id: 125,
    category: 'Qiyosiy tafsilot',
    question: 'Ilmiy haqiqat nuqtai nazaridan «Chipor tasma» hikoyasidagi ilon xatti-harakatining qaysi jihatlari badiiy to‘qima hisoblanadi?',
    options: [
      'Ilonning zaharli bo‘lishi',
      'Ilonning sut ichishi va hushtak ovozini eshitib qaytishi (aslida ilonlar kar bo‘lib, sut ichmaydi)',
      'Ilonning ip bo‘ylab o‘rmalashi',
      'Ilonning Hindistonda yashashi',
    ],
    correctIndex: 1,
    explanation:
      'Biologik jihatdan ilonlar havodagi tovush to‘lqinlarini (hushtakni) eshitmaydi va sut hazm qilmaydi; bu Konan Doyl tomonidan detektiv syujet uchun yaratilgan mashhur badiiy detaldir.',
  },
];
