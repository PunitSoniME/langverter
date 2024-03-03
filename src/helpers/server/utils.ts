
export const models = {
    'am': {
        'sv': 'Helsinki-NLP/opus-mt-am-sv',
    },
    'ar': {
        'de': 'Helsinki-NLP/opus-mt-ar-de',
        'el': 'Helsinki-NLP/opus-mt-ar-el',
    },
    'af': {
        'de': 'Helsinki-NLP/opus-mt-af-de',
        'en': 'Helsinki-NLP/opus-mt-af-en',
        'eo': 'Helsinki-NLP/opus-mt-af-eo',
        'es': 'Helsinki-NLP/opus-mt-af-es',
        'fi': 'Helsinki-NLP/opus-mt-af-fi',
        'fr': 'Helsinki-NLP/opus-mt-af-fr',
        'nl': 'Helsinki-NLP/opus-mt-af-nl',
        'ru': 'Helsinki-NLP/opus-mt-af-ru',
        'sv': 'Helsinki-NLP/opus-mt-af-sv',
    },
    'da': {
        'en': 'Helsinki-NLP/opus-mt-da-en',
    },
    'en': {
        'hi': 'Helsinki-NLP/opus-mt-en-hi',
        'es': 'Helsinki-NLP/opus-mt-en-es',
        'ru': 'Helsinki-NLP/opus-mt-en-ru',
        'sv': 'Helsinki-NLP/opus-mt-en-sv',
        'tr': 'Helsinki-NLP/opus-mt-tc-big-en-tr',
        'zh': 'Helsinki-NLP/opus-mt-en-zh',
    },
    'fr': {
        'en': 'Helsinki-NLP/opus-mt-fr-en',
    },
    'it': {
        'en': 'Helsinki-NLP/opus-mt-it-en',
    },
    'km': {
        'en': 'Helsinki-NLP/opus-mt-aav-en'
    },
    'tr': {
        'en': 'Helsinki-NLP/opus-mt-tr-en',
    },
    'vi': {
        'en': 'Helsinki-NLP/opus-mt-aav-en'
    },
    'zh': {
        'en': 'Helsinki-NLP/opus-mt-zh-en',
    },
}

export const getSupportedSourceLanguages = () => Object.keys(models).sort().map(m => {
    return { code: m, language: languages[m] }
});

export const getSourceTargetPair = (source: string) => {
    const transpationsPair = models[source];
    return Object.keys(transpationsPair).sort().map(m => {
        return { code: m, language: languages[m] }
    });;
}

export const languages = {
    'ar': 'Arabic',
    'am': 'Amharic',
    'cs': 'Czech',
    'da': 'Danish',
    'de': 'German',
    'en': 'English',
    'es': 'Spanish',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'fi': 'Finnish',
    'fr': 'French',
    'gu': 'Gujarati',
    'el': 'Greek',
    'hi': 'Hindi',
    'it': 'Italian',
    'ja': 'Japanese',
    'kk': 'Kazakh',
    'ko': 'Korean',
    'lt': 'Lithuanian',
    'lv': 'Latvian',
    'my': 'Burmese',
    'ne': 'Nepali',
    'nl': 'Dutch',
    'ro': 'Romanian',
    'ru': 'Russian',
    'si': 'Sinhala',
    'tr': 'Turkish',
    'vi': 'Vietnamese',
    'zh': 'Chinese',
    'af': 'Afrikaans',
    'az': 'Azerbaijani',
    'bn': 'Bengali',
    'fa': 'Persian',
    'he': 'Hebrew',
    'hr': 'Croatian',
    'id': 'Indonesian',
    'ka': 'Georgian',
    'km': 'Khmer',
    'mk': 'Macedonian',
    'ml': 'Malayalam',
    'mn': 'Mongolian',
    'mr': 'Marathi',
    'pl': 'Polish',
    'ps': 'Pashto',
    'pt': 'Portuguese',
    'sv': 'Swedish',
    'sw': 'Swahili',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tl': 'Tagalog',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'xh': 'Xhosa',
    'gl': 'Galician',
    'sl': 'Slovene'
};
