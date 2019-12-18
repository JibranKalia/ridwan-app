import Service from '@ember/service';
import EmberObject from '@ember/object';

export default Service.extend({
  KEYCODE: EmberObject.create({
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    TAB: 9
  }),

  SURAHS: Object.freeze([
    {
      "number": 1,
      "name": "سورة الفاتحة",
      "transliteration": "Al-Faatiha",
      "totalVerses": 7
    },
    {
      "number": 2,
      "name": "سورة البقرة",
      "transliteration": "Al-Baqara",
      "totalVerses": 286
    },
    {
      "number": 3,
      "name": "سورة آل عمران",
      "transliteration": "Aal-i-Imraan",
      "totalVerses": 200
    },
    {
      "number": 4,
      "name": "سورة النساء",
      "transliteration": "An-Nisaa",
      "totalVerses": 176
    },
    {
      "number": 5,
      "name": "سورة المائدة",
      "transliteration": "Al-Maaida",
      "totalVerses": 120
    },
    {
      "number": 6,
      "name": "سورة الأنعام",
      "transliteration": "Al-An'aam",
      "totalVerses": 165
    },
    {
      "number": 7,
      "name": "سورة الأعراف",
      "transliteration": "Al-A'raaf",
      "totalVerses": 206
    },
    {
      "number": 8,
      "name": "سورة الأنفال",
      "transliteration": "Al-Anfaal",
      "totalVerses": 75
    },
    {
      "number": 9,
      "name": "سورة التوبة",
      "transliteration": "At-Tawba",
      "totalVerses": 129
    },
    {
      "number": 10,
      "name": "سورة يونس",
      "transliteration": "Yunus",
      "totalVerses": 109
    },
    {
      "number": 11,
      "name": "سورة هود",
      "transliteration": "Hud",
      "totalVerses": 123
    },
    {
      "number": 12,
      "name": "سورة يوسف",
      "transliteration": "Yusuf",
      "totalVerses": 111
    },
    {
      "number": 13,
      "name": "سورة الرعد",
      "transliteration": "Ar-Ra'd",
      "totalVerses": 43
    },
    {
      "number": 14,
      "name": "سورة ابراهيم",
      "transliteration": "Ibrahim",
      "totalVerses": 52
    },
    {
      "number": 15,
      "name": "سورة الحجر",
      "transliteration": "Al-Hijr",
      "totalVerses": 99
    },
    {
      "number": 16,
      "name": "سورة النحل",
      "transliteration": "An-Nahl",
      "totalVerses": 128
    },
    {
      "number": 17,
      "name": "سورة الإسراء",
      "transliteration": "Al-Israa",
      "totalVerses": 111
    },
    {
      "number": 18,
      "name": "سورة الكهف",
      "transliteration": "Al-Kahf",
      "totalVerses": 110
    },
    {
      "number": 19,
      "name": "سورة مريم",
      "transliteration": "Maryam",
      "totalVerses": 98
    },
    {
      "number": 20,
      "name": "سورة طه",
      "transliteration": "Taa-Haa",
      "totalVerses": 135
    },
    {
      "number": 21,
      "name": "سورة الأنبياء",
      "transliteration": "Al-Anbiyaa",
      "totalVerses": 112
    },
    {
      "number": 22,
      "name": "سورة الحج",
      "transliteration": "Al-Hajj",
      "totalVerses": 78
    },
    {
      "number": 23,
      "name": "سورة المؤمنون",
      "transliteration": "Al-Muminoon",
      "totalVerses": 118
    },
    {
      "number": 24,
      "name": "سورة النور",
      "transliteration": "An-Noor",
      "totalVerses": 64
    },
    {
      "number": 25,
      "name": "سورة الفرقان",
      "transliteration": "Al-Furqaan",
      "totalVerses": 77
    },
    {
      "number": 26,
      "name": "سورة الشعراء",
      "transliteration": "Ash-Shu'araa",
      "totalVerses": 227
    },
    {
      "number": 27,
      "name": "سورة النمل",
      "transliteration": "An-Naml",
      "totalVerses": 93
    },
    {
      "number": 28,
      "name": "سورة القصص",
      "transliteration": "Al-Qasas",
      "totalVerses": 88
    },
    {
      "number": 29,
      "name": "سورة العنكبوت",
      "transliteration": "Al-Ankaboot",
      "totalVerses": 69
    },
    {
      "number": 30,
      "name": "سورة الروم",
      "transliteration": "Ar-Room",
      "totalVerses": 60
    },
    {
      "number": 31,
      "name": "سورة لقمان",
      "transliteration": "Luqman",
      "totalVerses": 34
    },
    {
      "number": 32,
      "name": "سورة السجدة",
      "transliteration": "As-Sajda",
      "totalVerses": 30
    },
    {
      "number": 33,
      "name": "سورة الأحزاب",
      "transliteration": "Al-Ahzaab",
      "totalVerses": 73
    },
    {
      "number": 34,
      "name": "سورة سبإ",
      "transliteration": "Saba",
      "totalVerses": 54
    },
    {
      "number": 35,
      "name": "سورة فاطر",
      "transliteration": "Faatir",
      "totalVerses": 45
    },
    {
      "number": 36,
      "name": "سورة يس",
      "transliteration": "Yaseen",
      "totalVerses": 83
    },
    {
      "number": 37,
      "name": "سورة الصافات",
      "transliteration": "As-Saaffaat",
      "totalVerses": 182
    },
    {
      "number": 38,
      "name": "سورة ص",
      "transliteration": "Saad",
      "totalVerses": 88
    },
    {
      "number": 39,
      "name": "سورة الزمر",
      "transliteration": "Az-Zumar",
      "totalVerses": 75
    },
    {
      "number": 40,
      "name": "سورة غافر",
      "transliteration": "Ghafir",
      "totalVerses": 85
    },
    {
      "number": 41,
      "name": "سورة فصلت",
      "transliteration": "Fussilat",
      "totalVerses": 54
    },
    {
      "number": 42,
      "name": "سورة الشورى",
      "transliteration": "Ash-Shura",
      "totalVerses": 53
    },
    {
      "number": 43,
      "name": "سورة الزخرف",
      "transliteration": "Az-Zukhruf",
      "totalVerses": 89
    },
    {
      "number": 44,
      "name": "سورة الدخان",
      "transliteration": "Ad-Dukhaan",
      "totalVerses": 59
    },
    {
      "number": 45,
      "name": "سورة الجاثية",
      "transliteration": "Al-Jaathiya",
      "totalVerses": 37
    },
    {
      "number": 46,
      "name": "سورة الأحقاف",
      "transliteration": "Al-Ahqaf",
      "totalVerses": 35
    },
    {
      "number": 47,
      "name": "سورة محمد",
      "transliteration": "Muhammad",
      "totalVerses": 38
    },
    {
      "number": 48,
      "name": "سورة الفتح",
      "transliteration": "Al-Fath",
      "totalVerses": 29
    },
    {
      "number": 49,
      "name": "سورة الحجرات",
      "transliteration": "Al-Hujuraat",
      "totalVerses": 18
    },
    {
      "number": 50,
      "name": "سورة ق",
      "transliteration": "Qaaf",
      "totalVerses": 45
    },
    {
      "number": 51,
      "name": "سورة الذاريات",
      "transliteration": "Adh-Dhaariyat",
      "totalVerses": 60
    },
    {
      "number": 52,
      "name": "سورة الطور",
      "transliteration": "At-Tur",
      "totalVerses": 49
    },
    {
      "number": 53,
      "name": "سورة النجم",
      "transliteration": "An-Najm",
      "totalVerses": 62
    },
    {
      "number": 54,
      "name": "سورة القمر",
      "transliteration": "Al-Qamar",
      "totalVerses": 55
    },
    {
      "number": 55,
      "name": "سورة الرحمن",
      "transliteration": "Ar-Rahmaan",
      "totalVerses": 78
    },
    {
      "number": 56,
      "name": "سورة الواقعة",
      "transliteration": "Al-Waaqia",
      "totalVerses": 96
    },
    {
      "number": 57,
      "name": "سورة الحديد",
      "transliteration": "Al-Hadid",
      "totalVerses": 29
    },
    {
      "number": 58,
      "name": "سورة المجادلة",
      "transliteration": "Al-Mujaadila",
      "totalVerses": 22
    },
    {
      "number": 59,
      "name": "سورة الحشر",
      "transliteration": "Al-Hashr",
      "totalVerses": 24
    },
    {
      "number": 60,
      "name": "سورة الممتحنة",
      "transliteration": "Al-Mumtahana",
      "totalVerses": 13
    },
    {
      "number": 61,
      "name": "سورة الصف",
      "transliteration": "As-Saff",
      "totalVerses": 14
    },
    {
      "number": 62,
      "name": "سورة الجمعة",
      "transliteration": "Al-Jumu'a",
      "totalVerses": 11
    },
    {
      "number": 63,
      "name": "سورة المنافقون",
      "transliteration": "Al-Munaafiqoon",
      "totalVerses": 11
    },
    {
      "number": 64,
      "name": "سورة التغابن",
      "transliteration": "At-Taghaabun",
      "totalVerses": 18
    },
    {
      "number": 65,
      "name": "سورة الطلاق",
      "transliteration": "At-Talaaq",
      "totalVerses": 12
    },
    {
      "number": 66,
      "name": "سورة التحريم",
      "transliteration": "At-Tahrim",
      "totalVerses": 12
    },
    {
      "number": 67,
      "name": "سورة الملك",
      "transliteration": "Al-Mulk",
      "totalVerses": 30
    },
    {
      "number": 68,
      "name": "سورة القلم",
      "transliteration": "Al-Qalam",
      "totalVerses": 52
    },
    {
      "number": 69,
      "name": "سورة الحاقة",
      "transliteration": "Al-Haaqqa",
      "totalVerses": 52
    },
    {
      "number": 70,
      "name": "سورة المعارج",
      "transliteration": "Al-Ma'aarij",
      "totalVerses": 44
    },
    {
      "number": 71,
      "name": "سورة نوح",
      "transliteration": "Nooh",
      "totalVerses": 28
    },
    {
      "number": 72,
      "name": "سورة الجن",
      "transliteration": "Al-Jinn",
      "totalVerses": 28
    },
    {
      "number": 73,
      "name": "سورة المزمل",
      "transliteration": "Al-Muzzammil",
      "totalVerses": 20
    },
    {
      "number": 74,
      "name": "سورة المدثر",
      "transliteration": "Al-Muddaththir",
      "totalVerses": 56
    },
    {
      "number": 75,
      "name": "سورة القيامة",
      "transliteration": "Al-Qiyaama",
      "totalVerses": 40
    },
    {
      "number": 76,
      "name": "سورة الانسان",
      "transliteration": "Al-Insaan",
      "totalVerses": 31
    },
    {
      "number": 77,
      "name": "سورة المرسلات",
      "transliteration": "Al-Mursalaat",
      "totalVerses": 50
    },
    {
      "number": 78,
      "name": "سورة النبإ",
      "transliteration": "An-Naba",
      "totalVerses": 40
    },
    {
      "number": 79,
      "name": "سورة النازعات",
      "transliteration": "An-Naazi'aat",
      "totalVerses": 46
    },
    {
      "number": 80,
      "name": "سورة عبس",
      "transliteration": "Abasa",
      "totalVerses": 42
    },
    {
      "number": 81,
      "name": "سورة التكوير",
      "transliteration": "At-Takwir",
      "totalVerses": 29
    },
    {
      "number": 82,
      "name": "سورة الإنفطار",
      "transliteration": "Al-Infitaar",
      "totalVerses": 19
    },
    {
      "number": 83,
      "name": "سورة المطففين",
      "transliteration": "Al-Mutaffifin",
      "totalVerses": 36
    },
    {
      "number": 84,
      "name": "سورة الإنشقاق",
      "transliteration": "Al-Inshiqaaq",
      "totalVerses": 25
    },
    {
      "number": 85,
      "name": "سورة البروج",
      "transliteration": "Al-Burooj",
      "totalVerses": 22
    },
    {
      "number": 86,
      "name": "سورة الطارق",
      "transliteration": "At-Taariq",
      "totalVerses": 17
    },
    {
      "number": 87,
      "name": "سورة الأعلى",
      "transliteration": "Al-A'laa",
      "totalVerses": 19
    },
    {
      "number": 88,
      "name": "سورة الغاشية",
      "transliteration": "Al-Ghaashiya",
      "totalVerses": 26
    },
    {
      "number": 89,
      "name": "سورة الفجر",
      "transliteration": "Al-Fajr",
      "totalVerses": 30
    },
    {
      "number": 90,
      "name": "سورة البلد",
      "transliteration": "Al-Balad",
      "totalVerses": 20
    },
    {
      "number": 91,
      "name": "سورة الشمس",
      "transliteration": "Ash-Shams",
      "totalVerses": 15
    },
    {
      "number": 92,
      "name": "سورة الليل",
      "transliteration": "Al-Lail",
      "totalVerses": 21
    },
    {
      "number": 93,
      "name": "سورة الضحى",
      "transliteration": "Ad-Dhuhaa",
      "totalVerses": 11
    },
    {
      "number": 94,
      "name": "سورة الشرح",
      "transliteration": "Ash-Sharh",
      "totalVerses": 8
    },
    {
      "number": 95,
      "name": "سورة التين",
      "transliteration": "At-Tin",
      "totalVerses": 8
    },
    {
      "number": 96,
      "name": "سورة العلق",
      "transliteration": "Al-Alaq",
      "totalVerses": 19
    },
    {
      "number": 97,
      "name": "سورة القدر",
      "transliteration": "Al-Qadr",
      "totalVerses": 5
    },
    {
      "number": 98,
      "name": "سورة البينة",
      "transliteration": "Al-Bayyina",
      "totalVerses": 8
    },
    {
      "number": 99,
      "name": "سورة الزلزلة",
      "transliteration": "Az-Zalzala",
      "totalVerses": 8
    },
    {
      "number": 100,
      "name": "سورة العاديات",
      "transliteration": "Al-Aadiyaat",
      "totalVerses": 11
    },
    {
      "number": 101,
      "name": "سورة القارعة",
      "transliteration": "Al-Qaari'a",
      "totalVerses": 11
    },
    {
      "number": 102,
      "name": "سورة التكاثر",
      "transliteration": "At-Takaathur",
      "totalVerses": 8
    },
    {
      "number": 103,
      "name": "سورة العصر",
      "transliteration": "Al-Asr",
      "totalVerses": 3
    },
    {
      "number": 104,
      "name": "سورة الهمزة",
      "transliteration": "Al-Humaza",
      "totalVerses": 9
    },
    {
      "number": 105,
      "name": "سورة الفيل",
      "transliteration": "Al-Fil",
      "totalVerses": 5
    },
    {
      "number": 106,
      "name": "سورة قريش",
      "transliteration": "Quraish",
      "totalVerses": 4
    },
    {
      "number": 107,
      "name": "سورة الماعون",
      "transliteration": "Al-Maa'un",
      "totalVerses": 7
    },
    {
      "number": 108,
      "name": "سورة الكوثر",
      "transliteration": "Al-Kawthar",
      "totalVerses": 3
    },
    {
      "number": 109,
      "name": "سورة الكافرون",
      "transliteration": "Al-Kaafiroon",
      "totalVerses": 6
    },
    {
      "number": 110,
      "name": "سورة النصر",
      "transliteration": "An-Nasr",
      "totalVerses": 3
    },
    {
      "number": 111,
      "name": "سورة المسد",
      "transliteration": "Al-Masad",
      "totalVerses": 5
    },
    {
      "number": 112,
      "name": "سورة الإخلاص",
      "transliteration": "Al-Ikhlaas",
      "totalVerses": 4
    },
    {
      "number": 113,
      "name": "سورة الفلق",
      "transliteration": "Al-Falaq",
      "totalVerses": 5
    },
    {
      "number": 114,
      "name": "سورة الناس",
      "transliteration": "An-Naas",
      "totalVerses": 6
    }
  ])
})