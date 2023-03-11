const list_of_languages = [
  {
    language: "Arabic",
    country: "Algeria",
  },
  {
    language: "Bengali",
    country: "Bangladesh",
  },
  {
    language: "Bulgarian",
    country: "Bulgaria",
  },
  {
    language: "Burmese",
    country: "Myanmar",
  },
  {
    language: "Catalan",
    country: "Spain",
  },
  {
    language: "Chinese",
    country: "China",
  },
  {
    language: "Croatian",
    country: "Croatia",
  },
  {
    language: "Czech",
    country: "Czech Republic",
  },
  {
    language: "Danish",
    country: "Denmark",
  },
  {
    language: "Dutch",
    country: "Netherlands",
  },
  {
    language: "English",
    country: "United Kingdom",
  },
  {
    language: "Estonian",
    country: "Estonia",
  },
  {
    language: "Finnish",
    country: "Finland",
  },
  {
    language: "French",
    country: "France",
  },
  {
    language: "Georgian",
    country: "Georgia",
  },
  {
    language: "German",
    country: "Germany",
  },
  {
    language: "Greek",
    country: "Greece",
  },
  {
    language: "Gujarati",
    country: "India",
  },
  {
    language: "Hebrew",
    country: "Israel",
  },
  {
    language: "Hindi",
    country: "India",
  },
  {
    language: "Hungarian",
    country: "Hungary",
  },
  {
    language: "Icelandic",
    country: "Iceland",
  },
  {
    language: "Indonesian",
    country: "Indonesia",
  },
  {
    language: "Irish",
    country: "Ireland",
  },
  {
    language: "Italian",
    country: "Italy",
  },
  {
    language: "Japanese",
    country: "Japan",
  },
  {
    language: "Kannada",
    country: "India",
  },
  {
    language: "Kazakh",
    country: "Kazakhstan",
  },
  {
    language: "Korean",
    country: "South Korea",
  },
  {
    language: "Latvian",
    country: "Latvia",
  },
  {
    language: "Lithuanian",
    country: "Lithuania",
  },
  {
    language: "Macedonian",
    country: "North Macedonia",
  },
  {
    language: "Malay",
    country: "Malaysia",
  },
  {
    language: "Malayalam",
    country: "India",
  },
  {
    language: "Maltese",
    country: "Malta",
  },
  {
    language: "Marathi",
    country: "India",
  },
  {
    language: "Mongolian",
    country: "Mongolia",
  },
  {
    language: "Nepali",
    country: "Nepal",
  },
  {
    language: "Norwegian",
    country: "Norway",
  },
  {
    language: "Oriya",
    country: "India",
  },
  {
    language: "Pashto",
    country: "Afghanistan",
  },
  {
    language: "Persian",
    country: "Iran",
  },
  {
    language: "Polish",
    country: "Poland",
  },
  {
    language: "Portuguese",
    country: "Portugal",
  },
  {
    language: "Punjabi",
    country: "India",
  },
  {
    language: "Romanian",
    country: "Romania",
  },
  {
    language: "Russian",
    country: "Russia",
  },
  {
    language: "Serbian",
    country: "Serbia",
  },
  {
    language: "Slovak",
    country: "Slovakia",
  },
  {
    language: "Slovenian",
    country: "Slovenia",
  },
  {
    language: "Somali",
    country: "Somalia",
  },
  {
    language: "Spanish",
    country: "Spain",
  },
  {
    language: "Swahili",
    country: "Kenya",
  },
  {
    language: "Swedish",
    country: "Sweden",
  },
  {
    language: "Tagalog",
    country: "Philippines",
  },
  {
    language: "Tamil",
    country: "India",
  },
  {
    language: "Telugu",
    country: "India",
  },
  {
    language: "Thai",
    country: "Thailand",
  },
  {
    language: "Turkish",
    country: "Turkey",
  },
  {
    language: "Ukrainian",
    country: "Ukraine",
  },
  {
    language: "Urdu",
    country: "Pakistan",
  },
  {
    language: "Uzbek",
    country: "Uzbekistan",
  },
  {
    language: "Vietnamese",
    country: "Vietnam",
  },
  {
    language: "Welsh",
    country: "United Kingdom",
  },
  {
    language: "Xhosa",
    country: "South Africa",
  },
  {
    language: "Yiddish",
    country: "Israel",
  },
  {
    language: "Yoruba",
    country: "Nigeria",
  },
  {
    language: "Zulu",
    country: "South Africa",
  },
];

// creating openings for react select component
const languageOptions = list_of_languages.map((lang) => {
  return {
    label: lang.language,
    value: {
      lang: lang.language,
      country: lang.country,
    },
  };
});

export default languageOptions;
