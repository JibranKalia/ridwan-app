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
      "name_en": "Faatiha",
      "translation_en": "The Opening",
      "total_verses": 7,
      "revelation_type": "Meccan"
    },
    {
      "number": 2,
      "name": "سورة البقرة",
      "transliteration": "Al-Baqara",
      "name_en": "Baqara",
      "translation_en": "The Cow",
      "total_verses": 286,
      "revelation_type": "Medinan"
    },
    {
      "number": 3,
      "name": "سورة آل عمران",
      "transliteration": "Aal-i-Imraan",
      "name_en": "Imraan",
      "translation_en": "The Family of Imraan",
      "total_verses": 200,
      "revelation_type": "Medinan"
    },
    {
      "number": 4,
      "name": "سورة النساء",
      "transliteration": "An-Nisaa",
      "name_en": "Nisaa",
      "translation_en": "The Women",
      "total_verses": 176,
      "revelation_type": "Medinan"
    },
    {
      "number": 5,
      "name": "سورة المائدة",
      "transliteration": "Al-Maaida",
      "name_en": "Maaida",
      "translation_en": "The Table",
      "total_verses": 120,
      "revelation_type": "Medinan"
    },
    {
      "number": 6,
      "name": "سورة الأنعام",
      "transliteration": "Al-An'aam",
      "name_en": "An'aam",
      "translation_en": "The Cattle",
      "total_verses": 165,
      "revelation_type": "Meccan"
    },
    {
      "number": 7,
      "name": "سورة الأعراف",
      "transliteration": "Al-A'raaf",
      "name_en": "A'raaf",
      "translation_en": "The Heights",
      "total_verses": 206,
      "revelation_type": "Meccan"
    },
    {
      "number": 8,
      "name": "سورة الأنفال",
      "transliteration": "Al-Anfaal",
      "name_en": "Anfaal",
      "translation_en": "The Spoils of War",
      "total_verses": 75,
      "revelation_type": "Medinan"
    },
    {
      "number": 9,
      "name": "سورة التوبة",
      "transliteration": "At-Tawba",
      "name_en": "Tawba",
      "translation_en": "The Repentance",
      "total_verses": 129,
      "revelation_type": "Medinan"
    },
    {
      "number": 10,
      "name": "سورة يونس",
      "transliteration": "Yunus",
      "name_en": "Yunus",
      "translation_en": "Jonas",
      "total_verses": 109,
      "revelation_type": "Meccan"
    },
    {
      "number": 11,
      "name": "سورة هود",
      "transliteration": "Hud",
      "name_en": "Hud",
      "translation_en": "Hud",
      "total_verses": 123,
      "revelation_type": "Meccan"
    },
    {
      "number": 12,
      "name": "سورة يوسف",
      "transliteration": "Yusuf",
      "name_en": "Yusuf",
      "translation_en": "Joseph",
      "total_verses": 111,
      "revelation_type": "Meccan"
    },
    {
      "number": 13,
      "name": "سورة الرعد",
      "transliteration": "Ar-Ra'd",
      "name_en": "Ra'd",
      "translation_en": "The Thunder",
      "total_verses": 43,
      "revelation_type": "Medinan"
    },
    {
      "number": 14,
      "name": "سورة ابراهيم",
      "transliteration": "Ibrahim",
      "name_en": "Ibrahim",
      "translation_en": "Abraham",
      "total_verses": 52,
      "revelation_type": "Meccan"
    },
    {
      "number": 15,
      "name": "سورة الحجر",
      "transliteration": "Al-Hijr",
      "name_en": "Hijr",
      "translation_en": "The Rock",
      "total_verses": 99,
      "revelation_type": "Meccan"
    },
    {
      "number": 16,
      "name": "سورة النحل",
      "transliteration": "An-Nahl",
      "name_en": "Nahl",
      "translation_en": "The Bee",
      "total_verses": 128,
      "revelation_type": "Meccan"
    },
    {
      "number": 17,
      "name": "سورة الإسراء",
      "transliteration": "Al-Israa",
      "name_en": "Israa",
      "translation_en": "The Night Journey",
      "total_verses": 111,
      "revelation_type": "Meccan"
    },
    {
      "number": 18,
      "name": "سورة الكهف",
      "transliteration": "Al-Kahf",
      "name_en": "Kahf",
      "translation_en": "The Cave",
      "total_verses": 110,
      "revelation_type": "Meccan"
    },
    {
      "number": 19,
      "name": "سورة مريم",
      "transliteration": "Maryam",
      "name_en": "Maryam",
      "translation_en": "Mary",
      "total_verses": 98,
      "revelation_type": "Meccan"
    },
    {
      "number": 20,
      "name": "سورة طه",
      "transliteration": "Taa-Haa",
      "name_en": "Haa",
      "translation_en": "Taa-Haa",
      "total_verses": 135,
      "revelation_type": "Meccan"
    },
    {
      "number": 21,
      "name": "سورة الأنبياء",
      "transliteration": "Al-Anbiyaa",
      "name_en": "Anbiyaa",
      "translation_en": "The Prophets",
      "total_verses": 112,
      "revelation_type": "Meccan"
    },
    {
      "number": 22,
      "name": "سورة الحج",
      "transliteration": "Al-Hajj",
      "name_en": "Hajj",
      "translation_en": "The Pilgrimage",
      "total_verses": 78,
      "revelation_type": "Medinan"
    },
    {
      "number": 23,
      "name": "سورة المؤمنون",
      "transliteration": "Al-Muminoon",
      "name_en": "Muminoon",
      "translation_en": "The Believers",
      "total_verses": 118,
      "revelation_type": "Meccan"
    },
    {
      "number": 24,
      "name": "سورة النور",
      "transliteration": "An-Noor",
      "name_en": "Noor",
      "translation_en": "The Light",
      "total_verses": 64,
      "revelation_type": "Medinan"
    },
    {
      "number": 25,
      "name": "سورة الفرقان",
      "transliteration": "Al-Furqaan",
      "name_en": "Furqaan",
      "translation_en": "The Criterion",
      "total_verses": 77,
      "revelation_type": "Meccan"
    },
    {
      "number": 26,
      "name": "سورة الشعراء",
      "transliteration": "Ash-Shu'araa",
      "name_en": "Shu'araa",
      "translation_en": "The Poets",
      "total_verses": 227,
      "revelation_type": "Meccan"
    },
    {
      "number": 27,
      "name": "سورة النمل",
      "transliteration": "An-Naml",
      "name_en": "Naml",
      "translation_en": "The Ant",
      "total_verses": 93,
      "revelation_type": "Meccan"
    },
    {
      "number": 28,
      "name": "سورة القصص",
      "transliteration": "Al-Qasas",
      "name_en": "Qasas",
      "translation_en": "The Stories",
      "total_verses": 88,
      "revelation_type": "Meccan"
    },
    {
      "number": 29,
      "name": "سورة العنكبوت",
      "transliteration": "Al-Ankaboot",
      "name_en": "Ankaboot",
      "translation_en": "The Spider",
      "total_verses": 69,
      "revelation_type": "Meccan"
    },
    {
      "number": 30,
      "name": "سورة الروم",
      "transliteration": "Ar-Room",
      "name_en": "Room",
      "translation_en": "The Romans",
      "total_verses": 60,
      "revelation_type": "Meccan"
    },
    {
      "number": 31,
      "name": "سورة لقمان",
      "transliteration": "Luqman",
      "name_en": "Luqman",
      "translation_en": "Luqman",
      "total_verses": 34,
      "revelation_type": "Meccan"
    },
    {
      "number": 32,
      "name": "سورة السجدة",
      "transliteration": "As-Sajda",
      "name_en": "Sajda",
      "translation_en": "The Prostration",
      "total_verses": 30,
      "revelation_type": "Meccan"
    },
    {
      "number": 33,
      "name": "سورة الأحزاب",
      "transliteration": "Al-Ahzaab",
      "name_en": "Ahzaab",
      "translation_en": "The Clans",
      "total_verses": 73,
      "revelation_type": "Medinan"
    },
    {
      "number": 34,
      "name": "سورة سبإ",
      "transliteration": "Saba",
      "name_en": "Saba",
      "translation_en": "Sheba",
      "total_verses": 54,
      "revelation_type": "Meccan"
    },
    {
      "number": 35,
      "name": "سورة فاطر",
      "transliteration": "Faatir",
      "name_en": "Faatir",
      "translation_en": "The Originator",
      "total_verses": 45,
      "revelation_type": "Meccan"
    },
    {
      "number": 36,
      "name": "سورة يس",
      "transliteration": "Yaseen",
      "name_en": "Yaseen",
      "translation_en": "Yaseen",
      "total_verses": 83,
      "revelation_type": "Meccan"
    },
    {
      "number": 37,
      "name": "سورة الصافات",
      "transliteration": "As-Saaffaat",
      "name_en": "Saaffaat",
      "translation_en": "Those drawn up in Ranks",
      "total_verses": 182,
      "revelation_type": "Meccan"
    },
    {
      "number": 38,
      "name": "سورة ص",
      "transliteration": "Saad",
      "name_en": "Saad",
      "translation_en": "The letter Saad",
      "total_verses": 88,
      "revelation_type": "Meccan"
    },
    {
      "number": 39,
      "name": "سورة الزمر",
      "transliteration": "Az-Zumar",
      "name_en": "Zumar",
      "translation_en": "The Groups",
      "total_verses": 75,
      "revelation_type": "Meccan"
    },
    {
      "number": 40,
      "name": "سورة غافر",
      "transliteration": "Ghafir",
      "name_en": "Ghafir",
      "translation_en": "The Forgiver",
      "total_verses": 85,
      "revelation_type": "Meccan"
    },
    {
      "number": 41,
      "name": "سورة فصلت",
      "transliteration": "Fussilat",
      "name_en": "Fussilat",
      "translation_en": "Explained in detail",
      "total_verses": 54,
      "revelation_type": "Meccan"
    },
    {
      "number": 42,
      "name": "سورة الشورى",
      "transliteration": "Ash-Shura",
      "name_en": "Shura",
      "translation_en": "Consultation",
      "total_verses": 53,
      "revelation_type": "Meccan"
    },
    {
      "number": 43,
      "name": "سورة الزخرف",
      "transliteration": "Az-Zukhruf",
      "name_en": "Zukhruf",
      "translation_en": "Ornaments of gold",
      "total_verses": 89,
      "revelation_type": "Meccan"
    },
    {
      "number": 44,
      "name": "سورة الدخان",
      "transliteration": "Ad-Dukhaan",
      "name_en": "Dukhaan",
      "translation_en": "The Smoke",
      "total_verses": 59,
      "revelation_type": "Meccan"
    },
    {
      "number": 45,
      "name": "سورة الجاثية",
      "transliteration": "Al-Jaathiya",
      "name_en": "Jaathiya",
      "translation_en": "Crouching",
      "total_verses": 37,
      "revelation_type": "Meccan"
    },
    {
      "number": 46,
      "name": "سورة الأحقاف",
      "transliteration": "Al-Ahqaf",
      "name_en": "Ahqaf",
      "translation_en": "The Dunes",
      "total_verses": 35,
      "revelation_type": "Meccan"
    },
    {
      "number": 47,
      "name": "سورة محمد",
      "transliteration": "Muhammad",
      "name_en": "Muhammad",
      "translation_en": "Muhammad",
      "total_verses": 38,
      "revelation_type": "Medinan"
    },
    {
      "number": 48,
      "name": "سورة الفتح",
      "transliteration": "Al-Fath",
      "name_en": "Fath",
      "translation_en": "The Victory",
      "total_verses": 29,
      "revelation_type": "Medinan"
    },
    {
      "number": 49,
      "name": "سورة الحجرات",
      "transliteration": "Al-Hujuraat",
      "name_en": "Hujuraat",
      "translation_en": "The Inner Apartments",
      "total_verses": 18,
      "revelation_type": "Medinan"
    },
    {
      "number": 50,
      "name": "سورة ق",
      "transliteration": "Qaaf",
      "name_en": "Qaaf",
      "translation_en": "The letter Qaaf",
      "total_verses": 45,
      "revelation_type": "Meccan"
    },
    {
      "number": 51,
      "name": "سورة الذاريات",
      "transliteration": "Adh-Dhaariyat",
      "name_en": "Dhaariyat",
      "translation_en": "The Winnowing Winds",
      "total_verses": 60,
      "revelation_type": "Meccan"
    },
    {
      "number": 52,
      "name": "سورة الطور",
      "transliteration": "At-Tur",
      "name_en": "Tur",
      "translation_en": "The Mount",
      "total_verses": 49,
      "revelation_type": "Meccan"
    },
    {
      "number": 53,
      "name": "سورة النجم",
      "transliteration": "An-Najm",
      "name_en": "Najm",
      "translation_en": "The Star",
      "total_verses": 62,
      "revelation_type": "Meccan"
    },
    {
      "number": 54,
      "name": "سورة القمر",
      "transliteration": "Al-Qamar",
      "name_en": "Qamar",
      "translation_en": "The Moon",
      "total_verses": 55,
      "revelation_type": "Meccan"
    },
    {
      "number": 55,
      "name": "سورة الرحمن",
      "transliteration": "Ar-Rahmaan",
      "name_en": "Rahmaan",
      "translation_en": "The Beneficent",
      "total_verses": 78,
      "revelation_type": "Medinan"
    },
    {
      "number": 56,
      "name": "سورة الواقعة",
      "transliteration": "Al-Waaqia",
      "name_en": "Waaqia",
      "translation_en": "The Inevitable",
      "total_verses": 96,
      "revelation_type": "Meccan"
    },
    {
      "number": 57,
      "name": "سورة الحديد",
      "transliteration": "Al-Hadid",
      "name_en": "Hadid",
      "translation_en": "The Iron",
      "total_verses": 29,
      "revelation_type": "Medinan"
    },
    {
      "number": 58,
      "name": "سورة المجادلة",
      "transliteration": "Al-Mujaadila",
      "name_en": "Mujaadila",
      "translation_en": "The Pleading Woman",
      "total_verses": 22,
      "revelation_type": "Medinan"
    },
    {
      "number": 59,
      "name": "سورة الحشر",
      "transliteration": "Al-Hashr",
      "name_en": "Hashr",
      "translation_en": "The Exile",
      "total_verses": 24,
      "revelation_type": "Medinan"
    },
    {
      "number": 60,
      "name": "سورة الممتحنة",
      "transliteration": "Al-Mumtahana",
      "name_en": "Mumtahana",
      "translation_en": "She that is to be examined",
      "total_verses": 13,
      "revelation_type": "Medinan"
    },
    {
      "number": 61,
      "name": "سورة الصف",
      "transliteration": "As-Saff",
      "name_en": "Saff",
      "translation_en": "The Ranks",
      "total_verses": 14,
      "revelation_type": "Medinan"
    },
    {
      "number": 62,
      "name": "سورة الجمعة",
      "transliteration": "Al-Jumu'a",
      "name_en": "Jumu'a",
      "translation_en": "Friday",
      "total_verses": 11,
      "revelation_type": "Medinan"
    },
    {
      "number": 63,
      "name": "سورة المنافقون",
      "transliteration": "Al-Munaafiqoon",
      "name_en": "Munaafiqoon",
      "translation_en": "The Hypocrites",
      "total_verses": 11,
      "revelation_type": "Medinan"
    },
    {
      "number": 64,
      "name": "سورة التغابن",
      "transliteration": "At-Taghaabun",
      "name_en": "Taghaabun",
      "translation_en": "Mutual Disillusion",
      "total_verses": 18,
      "revelation_type": "Medinan"
    },
    {
      "number": 65,
      "name": "سورة الطلاق",
      "transliteration": "At-Talaaq",
      "name_en": "Talaaq",
      "translation_en": "Divorce",
      "total_verses": 12,
      "revelation_type": "Medinan"
    },
    {
      "number": 66,
      "name": "سورة التحريم",
      "transliteration": "At-Tahrim",
      "name_en": "Tahrim",
      "translation_en": "The Prohibition",
      "total_verses": 12,
      "revelation_type": "Medinan"
    },
    {
      "number": 67,
      "name": "سورة الملك",
      "transliteration": "Al-Mulk",
      "name_en": "Mulk",
      "translation_en": "The Sovereignty",
      "total_verses": 30,
      "revelation_type": "Meccan"
    },
    {
      "number": 68,
      "name": "سورة القلم",
      "transliteration": "Al-Qalam",
      "name_en": "Qalam",
      "translation_en": "The Pen",
      "total_verses": 52,
      "revelation_type": "Meccan"
    },
    {
      "number": 69,
      "name": "سورة الحاقة",
      "transliteration": "Al-Haaqqa",
      "name_en": "Haaqqa",
      "translation_en": "The Reality",
      "total_verses": 52,
      "revelation_type": "Meccan"
    },
    {
      "number": 70,
      "name": "سورة المعارج",
      "transliteration": "Al-Ma'aarij",
      "name_en": "Ma'aarij",
      "translation_en": "The Ascending Stairways",
      "total_verses": 44,
      "revelation_type": "Meccan"
    },
    {
      "number": 71,
      "name": "سورة نوح",
      "transliteration": "Nooh",
      "name_en": "Nooh",
      "translation_en": "Noah",
      "total_verses": 28,
      "revelation_type": "Meccan"
    },
    {
      "number": 72,
      "name": "سورة الجن",
      "transliteration": "Al-Jinn",
      "name_en": "Jinn",
      "translation_en": "The Jinn",
      "total_verses": 28,
      "revelation_type": "Meccan"
    },
    {
      "number": 73,
      "name": "سورة المزمل",
      "transliteration": "Al-Muzzammil",
      "name_en": "Muzzammil",
      "translation_en": "The Enshrouded One",
      "total_verses": 20,
      "revelation_type": "Meccan"
    },
    {
      "number": 74,
      "name": "سورة المدثر",
      "transliteration": "Al-Muddaththir",
      "name_en": "Muddaththir",
      "translation_en": "The Cloaked One",
      "total_verses": 56,
      "revelation_type": "Meccan"
    },
    {
      "number": 75,
      "name": "سورة القيامة",
      "transliteration": "Al-Qiyaama",
      "name_en": "Qiyaama",
      "translation_en": "The Resurrection",
      "total_verses": 40,
      "revelation_type": "Meccan"
    },
    {
      "number": 76,
      "name": "سورة الانسان",
      "transliteration": "Al-Insaan",
      "name_en": "Insaan",
      "translation_en": "Man",
      "total_verses": 31,
      "revelation_type": "Medinan"
    },
    {
      "number": 77,
      "name": "سورة المرسلات",
      "transliteration": "Al-Mursalaat",
      "name_en": "Mursalaat",
      "translation_en": "The Emissaries",
      "total_verses": 50,
      "revelation_type": "Meccan"
    },
    {
      "number": 78,
      "name": "سورة النبإ",
      "transliteration": "An-Naba",
      "name_en": "Naba",
      "translation_en": "The Announcement",
      "total_verses": 40,
      "revelation_type": "Meccan"
    },
    {
      "number": 79,
      "name": "سورة النازعات",
      "transliteration": "An-Naazi'aat",
      "name_en": "Naazi'aat",
      "translation_en": "Those who drag forth",
      "total_verses": 46,
      "revelation_type": "Meccan"
    },
    {
      "number": 80,
      "name": "سورة عبس",
      "transliteration": "Abasa",
      "name_en": "Abasa",
      "translation_en": "He frowned",
      "total_verses": 42,
      "revelation_type": "Meccan"
    },
    {
      "number": 81,
      "name": "سورة التكوير",
      "transliteration": "At-Takwir",
      "name_en": "Takwir",
      "translation_en": "The Overthrowing",
      "total_verses": 29,
      "revelation_type": "Meccan"
    },
    {
      "number": 82,
      "name": "سورة الإنفطار",
      "transliteration": "Al-Infitaar",
      "name_en": "Infitaar",
      "translation_en": "The Cleaving",
      "total_verses": 19,
      "revelation_type": "Meccan"
    },
    {
      "number": 83,
      "name": "سورة المطففين",
      "transliteration": "Al-Mutaffifin",
      "name_en": "Mutaffifin",
      "translation_en": "Defrauding",
      "total_verses": 36,
      "revelation_type": "Meccan"
    },
    {
      "number": 84,
      "name": "سورة الإنشقاق",
      "transliteration": "Al-Inshiqaaq",
      "name_en": "Inshiqaaq",
      "translation_en": "The Splitting Open",
      "total_verses": 25,
      "revelation_type": "Meccan"
    },
    {
      "number": 85,
      "name": "سورة البروج",
      "transliteration": "Al-Burooj",
      "name_en": "Burooj",
      "translation_en": "The Constellations",
      "total_verses": 22,
      "revelation_type": "Meccan"
    },
    {
      "number": 86,
      "name": "سورة الطارق",
      "transliteration": "At-Taariq",
      "name_en": "Taariq",
      "translation_en": "The Morning Star",
      "total_verses": 17,
      "revelation_type": "Meccan"
    },
    {
      "number": 87,
      "name": "سورة الأعلى",
      "transliteration": "Al-A'laa",
      "name_en": "A'laa",
      "translation_en": "The Most High",
      "total_verses": 19,
      "revelation_type": "Meccan"
    },
    {
      "number": 88,
      "name": "سورة الغاشية",
      "transliteration": "Al-Ghaashiya",
      "name_en": "Ghaashiya",
      "translation_en": "The Overwhelming",
      "total_verses": 26,
      "revelation_type": "Meccan"
    },
    {
      "number": 89,
      "name": "سورة الفجر",
      "transliteration": "Al-Fajr",
      "name_en": "Fajr",
      "translation_en": "The Dawn",
      "total_verses": 30,
      "revelation_type": "Meccan"
    },
    {
      "number": 90,
      "name": "سورة البلد",
      "transliteration": "Al-Balad",
      "name_en": "Balad",
      "translation_en": "The City",
      "total_verses": 20,
      "revelation_type": "Meccan"
    },
    {
      "number": 91,
      "name": "سورة الشمس",
      "transliteration": "Ash-Shams",
      "name_en": "Shams",
      "translation_en": "The Sun",
      "total_verses": 15,
      "revelation_type": "Meccan"
    },
    {
      "number": 92,
      "name": "سورة الليل",
      "transliteration": "Al-Lail",
      "name_en": "Lail",
      "translation_en": "The Night",
      "total_verses": 21,
      "revelation_type": "Meccan"
    },
    {
      "number": 93,
      "name": "سورة الضحى",
      "transliteration": "Ad-Dhuhaa",
      "name_en": "Dhuhaa",
      "translation_en": "The Morning Hours",
      "total_verses": 11,
      "revelation_type": "Meccan"
    },
    {
      "number": 94,
      "name": "سورة الشرح",
      "transliteration": "Ash-Sharh",
      "name_en": "Sharh",
      "translation_en": "The Consolation",
      "total_verses": 8,
      "revelation_type": "Meccan"
    },
    {
      "number": 95,
      "name": "سورة التين",
      "transliteration": "At-Tin",
      "name_en": "Tin",
      "translation_en": "The Fig",
      "total_verses": 8,
      "revelation_type": "Meccan"
    },
    {
      "number": 96,
      "name": "سورة العلق",
      "transliteration": "Al-Alaq",
      "name_en": "Alaq",
      "translation_en": "The Clot",
      "total_verses": 19,
      "revelation_type": "Meccan"
    },
    {
      "number": 97,
      "name": "سورة القدر",
      "transliteration": "Al-Qadr",
      "name_en": "Qadr",
      "translation_en": "The Power, Fate",
      "total_verses": 5,
      "revelation_type": "Meccan"
    },
    {
      "number": 98,
      "name": "سورة البينة",
      "transliteration": "Al-Bayyina",
      "name_en": "Bayyina",
      "translation_en": "The Evidence",
      "total_verses": 8,
      "revelation_type": "Medinan"
    },
    {
      "number": 99,
      "name": "سورة الزلزلة",
      "transliteration": "Az-Zalzala",
      "name_en": "Zalzala",
      "translation_en": "The Earthquake",
      "total_verses": 8,
      "revelation_type": "Medinan"
    },
    {
      "number": 100,
      "name": "سورة العاديات",
      "transliteration": "Al-Aadiyaat",
      "name_en": "Aadiyaat",
      "translation_en": "The Chargers",
      "total_verses": 11,
      "revelation_type": "Meccan"
    },
    {
      "number": 101,
      "name": "سورة القارعة",
      "transliteration": "Al-Qaari'a",
      "name_en": "Qaari'a",
      "translation_en": "The Calamity",
      "total_verses": 11,
      "revelation_type": "Meccan"
    },
    {
      "number": 102,
      "name": "سورة التكاثر",
      "transliteration": "At-Takaathur",
      "name_en": "Takaathur",
      "translation_en": "Competition",
      "total_verses": 8,
      "revelation_type": "Meccan"
    },
    {
      "number": 103,
      "name": "سورة العصر",
      "transliteration": "Al-Asr",
      "name_en": "Asr",
      "translation_en": "The Declining Day, Epoch",
      "total_verses": 3,
      "revelation_type": "Meccan"
    },
    {
      "number": 104,
      "name": "سورة الهمزة",
      "transliteration": "Al-Humaza",
      "name_en": "Humaza",
      "translation_en": "The Traducer",
      "total_verses": 9,
      "revelation_type": "Meccan"
    },
    {
      "number": 105,
      "name": "سورة الفيل",
      "transliteration": "Al-Fil",
      "name_en": "Fil",
      "translation_en": "The Elephant",
      "total_verses": 5,
      "revelation_type": "Meccan"
    },
    {
      "number": 106,
      "name": "سورة قريش",
      "transliteration": "Quraish",
      "name_en": "Quraish",
      "translation_en": "Quraysh",
      "total_verses": 4,
      "revelation_type": "Meccan"
    },
    {
      "number": 107,
      "name": "سورة الماعون",
      "transliteration": "Al-Maa'un",
      "name_en": "Maa'un",
      "translation_en": "Almsgiving",
      "total_verses": 7,
      "revelation_type": "Meccan"
    },
    {
      "number": 108,
      "name": "سورة الكوثر",
      "transliteration": "Al-Kawthar",
      "name_en": "Kawthar",
      "translation_en": "Abundance",
      "total_verses": 3,
      "revelation_type": "Meccan"
    },
    {
      "number": 109,
      "name": "سورة الكافرون",
      "transliteration": "Al-Kaafiroon",
      "name_en": "Kaafiroon",
      "translation_en": "The Disbelievers",
      "total_verses": 6,
      "revelation_type": "Meccan"
    },
    {
      "number": 110,
      "name": "سورة النصر",
      "transliteration": "An-Nasr",
      "name_en": "Nasr",
      "translation_en": "Divine Support",
      "total_verses": 3,
      "revelation_type": "Medinan"
    },
    {
      "number": 111,
      "name": "سورة المسد",
      "transliteration": "Al-Masad",
      "name_en": "Masad",
      "translation_en": "The Palm Fibre",
      "total_verses": 5,
      "revelation_type": "Meccan"
    },
    {
      "number": 112,
      "name": "سورة الإخلاص",
      "transliteration": "Al-Ikhlaas",
      "name_en": "Ikhlaas",
      "translation_en": "Sincerity",
      "total_verses": 4,
      "revelation_type": "Meccan"
    },
    {
      "number": 113,
      "name": "سورة الفلق",
      "transliteration": "Al-Falaq",
      "name_en": "Falaq",
      "translation_en": "The Dawn",
      "total_verses": 5,
      "revelation_type": "Meccan"
    },
    {
      "number": 114,
      "name": "سورة الناس",
      "transliteration": "An-Naas",
      "name_en": "Naas",
      "translation_en": "Mankind",
      "total_verses": 6,
      "revelation_type": "Meccan"
    }
  ])
}) 