import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.surahs = Object.freeze([
      {
        "number": 1,
        "name": "سورة الفاتحة",
        "transliteration": "Al-Faatiha",
        "total_verses": 7
      },
      {
        "number": 2,
        "name": "سورة البقرة",
        "transliteration": "Al-Baqara",
        "total_verses": 286
      },
      {
        "number": 3,
        "name": "سورة آل عمران",
        "transliteration": "Aal-i-Imraan",
        "total_verses": 200
      },
      {
        "number": 4,
        "name": "سورة النساء",
        "transliteration": "An-Nisaa",
        "total_verses": 176
      },
      {
        "number": 5,
        "name": "سورة المائدة",
        "transliteration": "Al-Maaida",
        "total_verses": 120
      },
      {
        "number": 6,
        "name": "سورة الأنعام",
        "transliteration": "Al-An'aam",
        "total_verses": 165
      },
      {
        "number": 7,
        "name": "سورة الأعراف",
        "transliteration": "Al-A'raaf",
        "total_verses": 206
      },
      {
        "number": 8,
        "name": "سورة الأنفال",
        "transliteration": "Al-Anfaal",
        "total_verses": 75
      },
      {
        "number": 9,
        "name": "سورة التوبة",
        "transliteration": "At-Tawba",
        "total_verses": 129
      },
      {
        "number": 10,
        "name": "سورة يونس",
        "transliteration": "Yunus",
        "total_verses": 109
      },
      {
        "number": 11,
        "name": "سورة هود",
        "transliteration": "Hud",
        "total_verses": 123
      },
      {
        "number": 12,
        "name": "سورة يوسف",
        "transliteration": "Yusuf",
        "total_verses": 111
      },
      {
        "number": 13,
        "name": "سورة الرعد",
        "transliteration": "Ar-Ra'd",
        "total_verses": 43
      },
      {
        "number": 14,
        "name": "سورة ابراهيم",
        "transliteration": "Ibrahim",
        "total_verses": 52
      },
      {
        "number": 15,
        "name": "سورة الحجر",
        "transliteration": "Al-Hijr",
        "total_verses": 99
      },
      {
        "number": 16,
        "name": "سورة النحل",
        "transliteration": "An-Nahl",
        "total_verses": 128
      },
      {
        "number": 17,
        "name": "سورة الإسراء",
        "transliteration": "Al-Israa",
        "total_verses": 111
      },
      {
        "number": 18,
        "name": "سورة الكهف",
        "transliteration": "Al-Kahf",
        "total_verses": 110
      },
      {
        "number": 19,
        "name": "سورة مريم",
        "transliteration": "Maryam",
        "total_verses": 98
      },
      {
        "number": 20,
        "name": "سورة طه",
        "transliteration": "Taa-Haa",
        "total_verses": 135
      },
      {
        "number": 21,
        "name": "سورة الأنبياء",
        "transliteration": "Al-Anbiyaa",
        "total_verses": 112
      },
      {
        "number": 22,
        "name": "سورة الحج",
        "transliteration": "Al-Hajj",
        "total_verses": 78
      },
      {
        "number": 23,
        "name": "سورة المؤمنون",
        "transliteration": "Al-Muminoon",
        "total_verses": 118
      },
      {
        "number": 24,
        "name": "سورة النور",
        "transliteration": "An-Noor",
        "total_verses": 64
      },
      {
        "number": 25,
        "name": "سورة الفرقان",
        "transliteration": "Al-Furqaan",
        "total_verses": 77
      },
      {
        "number": 26,
        "name": "سورة الشعراء",
        "transliteration": "Ash-Shu'araa",
        "total_verses": 227
      },
      {
        "number": 27,
        "name": "سورة النمل",
        "transliteration": "An-Naml",
        "total_verses": 93
      },
      {
        "number": 28,
        "name": "سورة القصص",
        "transliteration": "Al-Qasas",
        "total_verses": 88
      },
      {
        "number": 29,
        "name": "سورة العنكبوت",
        "transliteration": "Al-Ankaboot",
        "total_verses": 69
      },
      {
        "number": 30,
        "name": "سورة الروم",
        "transliteration": "Ar-Room",
        "total_verses": 60
      },
      {
        "number": 31,
        "name": "سورة لقمان",
        "transliteration": "Luqman",
        "total_verses": 34
      },
      {
        "number": 32,
        "name": "سورة السجدة",
        "transliteration": "As-Sajda",
        "total_verses": 30
      },
      {
        "number": 33,
        "name": "سورة الأحزاب",
        "transliteration": "Al-Ahzaab",
        "total_verses": 73
      },
      {
        "number": 34,
        "name": "سورة سبإ",
        "transliteration": "Saba",
        "total_verses": 54
      },
      {
        "number": 35,
        "name": "سورة فاطر",
        "transliteration": "Faatir",
        "total_verses": 45
      },
      {
        "number": 36,
        "name": "سورة يس",
        "transliteration": "Yaseen",
        "total_verses": 83
      },
      {
        "number": 37,
        "name": "سورة الصافات",
        "transliteration": "As-Saaffaat",
        "total_verses": 182
      },
      {
        "number": 38,
        "name": "سورة ص",
        "transliteration": "Saad",
        "total_verses": 88
      },
      {
        "number": 39,
        "name": "سورة الزمر",
        "transliteration": "Az-Zumar",
        "total_verses": 75
      },
      {
        "number": 40,
        "name": "سورة غافر",
        "transliteration": "Ghafir",
        "total_verses": 85
      },
      {
        "number": 41,
        "name": "سورة فصلت",
        "transliteration": "Fussilat",
        "total_verses": 54
      },
      {
        "number": 42,
        "name": "سورة الشورى",
        "transliteration": "Ash-Shura",
        "total_verses": 53
      },
      {
        "number": 43,
        "name": "سورة الزخرف",
        "transliteration": "Az-Zukhruf",
        "total_verses": 89
      },
      {
        "number": 44,
        "name": "سورة الدخان",
        "transliteration": "Ad-Dukhaan",
        "total_verses": 59
      },
      {
        "number": 45,
        "name": "سورة الجاثية",
        "transliteration": "Al-Jaathiya",
        "total_verses": 37
      },
      {
        "number": 46,
        "name": "سورة الأحقاف",
        "transliteration": "Al-Ahqaf",
        "total_verses": 35
      },
      {
        "number": 47,
        "name": "سورة محمد",
        "transliteration": "Muhammad",
        "total_verses": 38
      },
      {
        "number": 48,
        "name": "سورة الفتح",
        "transliteration": "Al-Fath",
        "total_verses": 29
      },
      {
        "number": 49,
        "name": "سورة الحجرات",
        "transliteration": "Al-Hujuraat",
        "total_verses": 18
      },
      {
        "number": 50,
        "name": "سورة ق",
        "transliteration": "Qaaf",
        "total_verses": 45
      },
      {
        "number": 51,
        "name": "سورة الذاريات",
        "transliteration": "Adh-Dhaariyat",
        "total_verses": 60
      },
      {
        "number": 52,
        "name": "سورة الطور",
        "transliteration": "At-Tur",
        "total_verses": 49
      },
      {
        "number": 53,
        "name": "سورة النجم",
        "transliteration": "An-Najm",
        "total_verses": 62
      },
      {
        "number": 54,
        "name": "سورة القمر",
        "transliteration": "Al-Qamar",
        "total_verses": 55
      },
      {
        "number": 55,
        "name": "سورة الرحمن",
        "transliteration": "Ar-Rahmaan",
        "total_verses": 78
      },
      {
        "number": 56,
        "name": "سورة الواقعة",
        "transliteration": "Al-Waaqia",
        "total_verses": 96
      },
      {
        "number": 57,
        "name": "سورة الحديد",
        "transliteration": "Al-Hadid",
        "total_verses": 29
      },
      {
        "number": 58,
        "name": "سورة المجادلة",
        "transliteration": "Al-Mujaadila",
        "total_verses": 22
      },
      {
        "number": 59,
        "name": "سورة الحشر",
        "transliteration": "Al-Hashr",
        "total_verses": 24
      },
      {
        "number": 60,
        "name": "سورة الممتحنة",
        "transliteration": "Al-Mumtahana",
        "total_verses": 13
      },
      {
        "number": 61,
        "name": "سورة الصف",
        "transliteration": "As-Saff",
        "total_verses": 14
      },
      {
        "number": 62,
        "name": "سورة الجمعة",
        "transliteration": "Al-Jumu'a",
        "total_verses": 11
      },
      {
        "number": 63,
        "name": "سورة المنافقون",
        "transliteration": "Al-Munaafiqoon",
        "total_verses": 11
      },
      {
        "number": 64,
        "name": "سورة التغابن",
        "transliteration": "At-Taghaabun",
        "total_verses": 18
      },
      {
        "number": 65,
        "name": "سورة الطلاق",
        "transliteration": "At-Talaaq",
        "total_verses": 12
      },
      {
        "number": 66,
        "name": "سورة التحريم",
        "transliteration": "At-Tahrim",
        "total_verses": 12
      },
      {
        "number": 67,
        "name": "سورة الملك",
        "transliteration": "Al-Mulk",
        "total_verses": 30
      },
      {
        "number": 68,
        "name": "سورة القلم",
        "transliteration": "Al-Qalam",
        "total_verses": 52
      },
      {
        "number": 69,
        "name": "سورة الحاقة",
        "transliteration": "Al-Haaqqa",
        "total_verses": 52
      },
      {
        "number": 70,
        "name": "سورة المعارج",
        "transliteration": "Al-Ma'aarij",
        "total_verses": 44
      },
      {
        "number": 71,
        "name": "سورة نوح",
        "transliteration": "Nooh",
        "total_verses": 28
      },
      {
        "number": 72,
        "name": "سورة الجن",
        "transliteration": "Al-Jinn",
        "total_verses": 28
      },
      {
        "number": 73,
        "name": "سورة المزمل",
        "transliteration": "Al-Muzzammil",
        "total_verses": 20
      },
      {
        "number": 74,
        "name": "سورة المدثر",
        "transliteration": "Al-Muddaththir",
        "total_verses": 56
      },
      {
        "number": 75,
        "name": "سورة القيامة",
        "transliteration": "Al-Qiyaama",
        "total_verses": 40
      },
      {
        "number": 76,
        "name": "سورة الانسان",
        "transliteration": "Al-Insaan",
        "total_verses": 31
      },
      {
        "number": 77,
        "name": "سورة المرسلات",
        "transliteration": "Al-Mursalaat",
        "total_verses": 50
      },
      {
        "number": 78,
        "name": "سورة النبإ",
        "transliteration": "An-Naba",
        "total_verses": 40
      },
      {
        "number": 79,
        "name": "سورة النازعات",
        "transliteration": "An-Naazi'aat",
        "total_verses": 46
      },
      {
        "number": 80,
        "name": "سورة عبس",
        "transliteration": "Abasa",
        "total_verses": 42
      },
      {
        "number": 81,
        "name": "سورة التكوير",
        "transliteration": "At-Takwir",
        "total_verses": 29
      },
      {
        "number": 82,
        "name": "سورة الإنفطار",
        "transliteration": "Al-Infitaar",
        "total_verses": 19
      },
      {
        "number": 83,
        "name": "سورة المطففين",
        "transliteration": "Al-Mutaffifin",
        "total_verses": 36
      },
      {
        "number": 84,
        "name": "سورة الإنشقاق",
        "transliteration": "Al-Inshiqaaq",
        "total_verses": 25
      },
      {
        "number": 85,
        "name": "سورة البروج",
        "transliteration": "Al-Burooj",
        "total_verses": 22
      },
      {
        "number": 86,
        "name": "سورة الطارق",
        "transliteration": "At-Taariq",
        "total_verses": 17
      },
      {
        "number": 87,
        "name": "سورة الأعلى",
        "transliteration": "Al-A'laa",
        "total_verses": 19
      },
      {
        "number": 88,
        "name": "سورة الغاشية",
        "transliteration": "Al-Ghaashiya",
        "total_verses": 26
      },
      {
        "number": 89,
        "name": "سورة الفجر",
        "transliteration": "Al-Fajr",
        "total_verses": 30
      },
      {
        "number": 90,
        "name": "سورة البلد",
        "transliteration": "Al-Balad",
        "total_verses": 20
      },
      {
        "number": 91,
        "name": "سورة الشمس",
        "transliteration": "Ash-Shams",
        "total_verses": 15
      },
      {
        "number": 92,
        "name": "سورة الليل",
        "transliteration": "Al-Lail",
        "total_verses": 21
      },
      {
        "number": 93,
        "name": "سورة الضحى",
        "transliteration": "Ad-Dhuhaa",
        "total_verses": 11
      },
      {
        "number": 94,
        "name": "سورة الشرح",
        "transliteration": "Ash-Sharh",
        "total_verses": 8
      },
      {
        "number": 95,
        "name": "سورة التين",
        "transliteration": "At-Tin",
        "total_verses": 8
      },
      {
        "number": 96,
        "name": "سورة العلق",
        "transliteration": "Al-Alaq",
        "total_verses": 19
      },
      {
        "number": 97,
        "name": "سورة القدر",
        "transliteration": "Al-Qadr",
        "total_verses": 5
      },
      {
        "number": 98,
        "name": "سورة البينة",
        "transliteration": "Al-Bayyina",
        "total_verses": 8
      },
      {
        "number": 99,
        "name": "سورة الزلزلة",
        "transliteration": "Az-Zalzala",
        "total_verses": 8
      },
      {
        "number": 100,
        "name": "سورة العاديات",
        "transliteration": "Al-Aadiyaat",
        "total_verses": 11
      },
      {
        "number": 101,
        "name": "سورة القارعة",
        "transliteration": "Al-Qaari'a",
        "total_verses": 11
      },
      {
        "number": 102,
        "name": "سورة التكاثر",
        "transliteration": "At-Takaathur",
        "total_verses": 8
      },
      {
        "number": 103,
        "name": "سورة العصر",
        "transliteration": "Al-Asr",
        "total_verses": 3
      },
      {
        "number": 104,
        "name": "سورة الهمزة",
        "transliteration": "Al-Humaza",
        "total_verses": 9
      },
      {
        "number": 105,
        "name": "سورة الفيل",
        "transliteration": "Al-Fil",
        "total_verses": 5
      },
      {
        "number": 106,
        "name": "سورة قريش",
        "transliteration": "Quraish",
        "total_verses": 4
      },
      {
        "number": 107,
        "name": "سورة الماعون",
        "transliteration": "Al-Maa'un",
        "total_verses": 7
      },
      {
        "number": 108,
        "name": "سورة الكوثر",
        "transliteration": "Al-Kawthar",
        "total_verses": 3
      },
      {
        "number": 109,
        "name": "سورة الكافرون",
        "transliteration": "Al-Kaafiroon",
        "total_verses": 6
      },
      {
        "number": 110,
        "name": "سورة النصر",
        "transliteration": "An-Nasr",
        "total_verses": 3
      },
      {
        "number": 111,
        "name": "سورة المسد",
        "transliteration": "Al-Masad",
        "total_verses": 5
      },
      {
        "number": 112,
        "name": "سورة الإخلاص",
        "transliteration": "Al-Ikhlaas",
        "total_verses": 4
      },
      {
        "number": 113,
        "name": "سورة الفلق",
        "transliteration": "Al-Falaq",
        "total_verses": 5
      },
      {
        "number": 114,
        "name": "سورة الناس",
        "transliteration": "An-Naas",
        "total_verses": 6
      }
    ])
  }
})