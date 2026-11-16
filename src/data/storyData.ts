export const SCRIBD_PDF_URL = 'https://www.scribd.com/document/866910403/1-iyun';
export const AUTHOR_PORTRAIT_URL = '/assets/aistudio/image_9b4b3571.png';
export const HERO_IMAGE_URL = '/src/assets/images/hero_speckled_band_1794848339020.jpg';
export const HERO_MANOR_UPLOAD_URL = '/assets/aistudio/image_2f796bfd.png';
export const MANOR_ROOM_IMAGE_URL = '/src/assets/images/stoke_moran_room_1794848339021.jpg';
export const EVIDENCE_IMAGE_URL = '/src/assets/images/detective_evidence_1794848339812.jpg';

export interface TimelineEvent {
  step: string;
  time: string;
  title: string;
  summary: string;
  detail: string;
}

export interface CharacterProfile {
  id: string;
  name: string;
  role: string;
  eraNote: string;
  description: string;
  keyTrait: string;
}

export interface ClueItem {
  id: string;
  index: string;
  title: string;
  observation: string;
  deduction: string;
}

export interface AuthorBioPoint {
  label: string;
  text: string;
}

export interface AuthorBioSection {
  id: string;
  number: string;
  title: string;
  points: AuthorBioPoint[];
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    step: '01',
    time: '1883-yil aprel · Tonggi soat 07:15',
    title: 'Bek-stritdagi kutilmagan tashrif',
    summary: 'Qora parda tutgan, sochlari erta oqargan yosh ayol Elen Stoner vahima ichida Sherlok Xolms huzuriga keladi.',
    detail:
      'U ikki yil muqaddam egizak opasi Juliya sirli ravishda vafot etganini, endi esa o‘zi to‘yi arafasida xuddi o‘sha xonaga ko‘chib o‘tishga majbur bo‘lgach, kechalari o‘sha g‘alati hushtak ovozini eshitayotganini so‘zlab beradi.',
  },
  {
    step: '02',
    time: 'Ikki yil avval · Tungi soat 03:00',
    title: 'Juliya Stonerning sirli o‘limi',
    summary: 'Eshik ichkaridan qulflangan, derazalarda temir panjara bo‘lishiga qaramay, Juliya qichqiriq bilan jon beradi.',
    detail:
      'So‘nggi nafasida u opasining xonasi tomon ishora qilib: "Ey Xudo! Elen! Bu tasma! Chipor tasma!" degan so‘zlarni aytib ulguradi. Shifokorlar aniq zahar yoki zo‘ravonlik izini topa olmay, o‘limni yurak xuruji yoki qattiq qo‘rquv bilan izohlashadi.',
  },
  {
    step: '03',
    time: 'Tergov kuni · London',
    title: 'Doktor Roylottning tahdidi',
    summary: 'Elen ketganidan ko‘p o‘tmay, Xolmsning xonasiga ulkan gavdali va badjahl doktor Grimsbi Roylott bostirib kiradi.',
    detail:
      'U Xolmsni o‘z ishiga aralashmaslikka chaqirib, kuchini ko‘rsatish uchun po‘lat kamin kosovini qo‘li bilan egib tashlaydi. Roylott chiqib ketgach, Xolms xotirjamlik bilan kosovni yana asl holiga qaytarib to‘g‘rilab qo‘yadi.',
  },
  {
    step: '04',
    time: 'Tushdan keyin · Sarri grafligi',
    title: 'Stok-Moran qo‘rg‘onini ko‘zdan kechirish',
    summary: 'Xolms va Uotson Roylott Londonga ketganidan foydalanib, Stok-Moran mulkini sinchiklab tekshiradilar.',
    detail:
      'Tashqi devorda ta’mirlashga hech qanday ehtiyoj yo‘qligi ma’lum bo‘ladi — bu shunchaki Elenani opasi yotgan xonaga ko‘chirish uchun bahona edi. Xona ichida esa soxta qo‘ng‘iroq ipi, qo‘shni xonaga ochilgan tuynuk va polga mahkamlangan karavot topiladi.',
  },
  {
    step: '05',
    time: 'Yarim tun · Qorong‘u yotoqxona',
    title: 'Pistirma va hushtak ovozi',
    summary: 'Xolms va Uotson chiroqni o‘chirib, to‘liq sukunatda poylab o‘tirishadi. Soat uchlar atrofida xonaga sukunat cho‘madi.',
    detail:
      'Tuynuk ortidan yorug‘lik miltillaydi, temir eshik jaranglagandek tovush va bug‘ chiqayotgandek mayin vishillash eshitiladi. Xolms darhol gugurt chaqib, tayog‘i bilan qo‘ng‘iroq ipi tomon qattiq savalaydi.',
  },
  {
    step: '06',
    time: 'Kulminatsiya · Haqiqatning ochilishi',
    title: 'Jinoyatchining o‘z tuzog‘iga tushishi',
    summary: 'Zarbadan g‘azablangan ilon ventilyatsiya tuynugi orqali ortga qaytib, o‘z xo‘jayini doktor Roylottni chaqib o‘ldiradi.',
    detail:
      'Xolms va Uotson qo‘shni xonaga kirganda, Roylottning boshi atrofida Hindistondan keltirilgan eng zaharli botqoqlik iloni — "chipor tasma" o‘ralib turganini ko‘rishadi. Elen Stonerning hayoti saqlab qolinadi.',
  },
];

export const CHARACTERS: CharacterProfile[] = [
  {
    id: 'holmes',
    name: 'Sherlok Xolms',
    role: 'Bosh izquvar',
    eraNote: 'Beyker-strit, 221B',
    description:
      'Kuzatuvchanlik va deduksiya usuli orqali ichkaridan qulflangan xonadagi sirli qotillik mexanizmini bir necha soat ichida fosh etadi.',
    keyTrait: 'Sovuq aql, jasorat va mayda tafsilotlardan umumiy manzara tiklash mahorati.',
  },
  {
    id: 'watson',
    name: 'Doktor Jon Uotson',
    role: 'Hikoyachi va hamroh',
    eraNote: 'Xolmsning sodiq do‘sti',
    description:
      'Voqealarni o‘quvchiga jonli tarzda yetkazib beradi, tungi pistirmada qurol bilan Xolms yonida turib, xavfli vaziyatda tayanch bo‘ladi.',
    keyTrait: 'Tibbiy bilim, sadoqat va voqeani badiiy aniqlikda tasvirlash.',
  },
  {
    id: 'helen',
    name: 'Elen Stoner',
    role: 'Jabrlanuvchi va mijoz',
    eraNote: '30 yosh · Stok-Moran',
    description:
      'Egizak opasi Juliya vafotidan ikki yil o‘tib, o‘gay otasi tomonidan xuddi o‘sha xonaga ko‘chirilgach, Xolmsdan yordam so‘rashga jur’at topadi.',
    keyTrait: 'Qo‘rquvga qaramay haqiqatni izlash va o‘z vaqtida chora ko‘rish.',
  },
  {
    id: 'julia',
    name: 'Juliya Stoner',
    role: 'Marhuma egizak opa',
    eraNote: 'To‘yidan ikki hafta oldin halok bo‘lgan',
    description:
      'Onasidan qolgan meros tufayli o‘gay otasining nishoniga aylangan. O‘limi oldidan aytgan "Chipor tasma" iborasi tergovning asosiy kalitiga aylanadi.',
    keyTrait: 'So‘nggi lahzada singlisiga ogohlantiruvchi ishora qoldirishi.',
  },
  {
    id: 'roylott',
    name: 'Doktor Grimsbi Roylott',
    role: 'O‘gay ota va jinoyatchi',
    eraNote: 'Kalkutta sobiq shifokori',
    description:
      'Qadimiy aslzoda oilaning so‘nggi vakili. Hindistonda qotillik uchun qamalgan, uyida gepard va paviyan saqlaydi, qizlarining merosini boy bermaslik uchun dahshatli reja tuzadi.',
    keyTrait: 'Shafqatsiz jahldorlik, jismoniy kuch va makkorona hisob-kitob.',
  },
];

export const CLUES: ClueItem[] = [
  {
    id: 'ventilator',
    index: '01-dalil',
    title: 'Soxta ventilyatsiya tuynugi',
    observation:
      'Elen xonasining tepa qismida havo almashtirish uchun o‘rnatilgan temir panjarali tuynuk bor, biroq u tashqi ko‘chaga emas, bevosita Roylottning xonasiga ochiladi.',
    deduction:
      'Qurilish mantiqiga zid bu teshik yaqinda ochilgan bo‘lib, ikki xona o‘rtasida jismoniy aloqa yo‘li vazifasini bajargan.',
  },
  {
    id: 'bellrope',
    index: '02-dalil',
    title: 'Simsiz osilgan qo‘ng‘iroq ipi',
    observation:
      'Karavot boshida xizmatkorlarni chaqirish uchun osilgan qalin ip bor, ammo uning uchi yuqorida hech qanday qo‘ng‘iroq simiga ulanmagan.',
    deduction:
      'Bu soxta ip tuynukdan tushadigan jonzot — ilon karavot ustiga bemalol sirg‘alib tushishi va yana ortga qaytishi uchun ko‘prik bo‘lib xizmat qilgan.',
  },
  {
    id: 'bed',
    index: '03-dalil',
    title: 'Polga mahkamlangan karavot',
    observation:
      'Eman yog‘ochidan yasalgan og‘ir karavot polga temir qisqichlar bilan qotirib qo‘yilgan va uni siljitib bo‘lmaydi.',
    deduction:
      'Roylott qurbon aynan qo‘ng‘iroq ipi ostida uxlashini kafolatlash uchun karavot joyini o‘zgartirish imkonini yo‘qqa chiqargan.',
  },
  {
    id: 'safe',
    index: '04-dalil',
    title: 'Temir seyf, sutli kosa va qamchi',
    observation:
      'Roylott xonasidagi katta temir seyf ustida ozgina sut solingan kosa va uchida halqasi bor kichik it qamchisi topiladi.',
    deduction:
      'Temir seyf ilon saqlanadigan joy bo‘lgan (eshigining yopilishi tungi temir jaranglashini bergan), kosa va qamchi esa ilonni boshqarish vositalari edi.',
  },
];

export const AUTHOR_BIO_TITLE = 'Ser Artur Ignasius Konan Doyl (1859-yil 22-may — 1930-yil 7-iyul)';
export const AUTHOR_BIO_SUBTITLE = 'Shotlandiyalik yozuvchi, shifokor va jamoat arbobi.';

export const AUTHOR_BIO_SECTIONS: AuthorBioSection[] = [
  {
    id: 'childhood',
    number: '1',
    title: 'Bolaligi va ta’limi',
    points: [
      {
        label: 'Tug‘ilgan joyi',
        text: '1859-yil 22-mayda Shotlandiyaning Edinburg shahrida asli irlandiyalik katolik oilada tug‘ilgan.',
      },
      {
        label: 'Ota-onasi',
        text: 'Otasi Charlz Altamont Doyl rassom va arxitektor bo‘lgan, onasi Meri Foli esa hikoyanavis va kitobxon ayol bo‘lib, unda adabiyotga mehr uyg‘otgan.',
      },
      {
        label: 'Maktab ta’limi',
        text: '1868–1875-yillarda Angliyadagi Stonxerst iyezuitlar maktab-internatida o‘qigan.',
      },
      {
        label: 'Oliy ta’limi',
        text: '1876-yilda Edinburg universitetining tibbiyot fakultetiga kirib, 1881-yilda bakalavr, 1885-yilda tibbiyot doktori darajasini olgan.',
      },
      {
        label: 'Xolmsning prototipi',
        text: 'Universitetdagi ustozi jarroh Jozef Bellning bemor tashqi ko‘rinishidan uning kasbi va kasalligini aniqlash qobiliyati Sherlok Xolms obraziga asos bo‘lgan.',
      },
    ],
  },
  {
    id: 'medical',
    number: '2',
    title: 'Shifokorlik va harbiy faoliyati',
    points: [
      {
        label: 'Dengiz ekspeditsiyalari',
        text: 'Talabalik va shifokorlik yillarida Arktika hamda G‘arbiy Afrika qirg‘oqlariga suzgan kemalarda shifokor bo‘lib ishlagan.',
      },
      {
        label: 'Klinik faoliyati',
        text: 'Portsmut va London shaharlarida oftalmolog (ko‘z shifokori) sifatida xususiy amaliyot olib borgan.',
      },
      {
        label: 'Harbiy xizmati',
        text: '1899–1902-yillardagi Ikkinchi Angliya-Bur urushida Janubiy Afrikadagi ko‘ngilli dala gospitalida shifokor bo‘lib xizmat qilgan.',
      },
      {
        label: 'Ritsarlik unvoni',
        text: '1902-yilda qirol Eduard VII tomonidan urush haqidagi tarixiy asarlari va shifokorlik xizmatlari uchun «Ser» (ritsar) unvoni bilan taqdirlangan.',
      },
    ],
  },
  {
    id: 'literary',
    number: '3',
    title: 'Adabiy merosi va asarlari',
    points: [
      {
        label: 'Umumiy hajmi',
        text: '200 dan ortiq badiiy, ilmiy-ommabop va publitsistik asarlar yozgan.',
      },
      {
        label: 'Sherlok Xolms turkumi',
        text: '1887-yilda «Alvon rangli etyud» qissasida Sherlok Xolms va doktor Uotson obrazlarini yaratgan; jami 4 ta qissa («Alvon rangli etyud», «To‘rtlar belgisi», «Baskervillar iti», «Dahshatlar vodiysi») va 56 ta hikoya yozgan.',
      },
      {
        label: 'Xolmsning «o‘limi» va qaytishi',
        text: '1893-yilda «So‘nggi ish» hikoyasida Xolmsni halok qilgan, biroq o‘quvchilar talabi bilan 1903-yilda «Bo‘sh uydagi sarguzasht» hikoyasida uni yana asarga qaytargan.',
      },
      {
        label: 'Ilmiy-fantastik asarlari',
        text: 'Professor Chellenjer haqidagi «Yo‘qolgan dunyo» (1912), «Zaharlangan mintaqa» (1913) va «Marakot jarligi» (1929) asarlari muallifi.',
      },
      {
        label: 'Tarixiy asarlari',
        text: '«Oq otryad» (1891), «Badarg‘a qilinganlar» (1893), «Sardor Jerar jasorati» (1894–1895) va «Rodney Ston» (1896) romanlarini yozgan.',
      },
    ],
  },
  {
    id: 'public',
    number: '4',
    title: 'Jamoat faoliyati va qiziqishlari',
    points: [
      {
        label: 'Huquqiy himoya',
        text: 'Deduktiv usullari yordamida nohaq sudlangan Jorj Edalji va Oskar Sleyterlarning oqlanishiga erishgan, bu esa Angliyada Apellyatsiya sudining tuzilishiga sabab bo‘lgan.',
      },
      {
        label: 'Sport',
        text: 'Portsmut futbol klubining ilk darvozabonlaridan biri bo‘lgan, shuningdek, kriket, boks, golf va Alp tog‘larida chang‘i sporti bilan shug‘ullangan.',
      },
      {
        label: 'Siyosat',
        text: 'Ikki marta Buyuk Britaniya parlamentiga nomzodini qo‘ygan, ammo saylanmagan.',
      },
    ],
  },
  {
    id: 'family',
    number: '5',
    title: 'Oilasi va hayotining so‘nggi yillari',
    points: [
      {
        label: 'Oilasi',
        text: '1885-yilda Luiza Xokinsga uylangan (farzandlari: Meri va Kingsli); Luiza 1906-yilda vafot etgach, 1907-yilda Jin Lekiga uylangan (farzandlari: Denis, Adrian va Jin).',
      },
      {
        label: 'Spiritizm',
        text: 'Birinchi jahon urushida o‘g‘li Kingsli va ukasi Innesni yo‘qotgach, umrining oxirigacha ruhlar bilan muloqot (spiritizm) g‘oyalarini targ‘ib qilish bilan shug‘ullangan.',
      },
      {
        label: 'Vafoti',
        text: '1930-yil 7-iyulda Angliyaning Krouboro shahrida 71 yoshida yurak xurujidan vafot etgan.',
      },
    ],
  },
];
