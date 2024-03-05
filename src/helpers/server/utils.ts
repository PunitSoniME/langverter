//  Language Models to check

//  Helsinki-NLP/opus-mt-tc-base-bat-zle
//  Helsinki-NLP/opus-mt-tc-base-zle-bat
//  Helsinki-NLP/opus-mt-tc-base-gmw-gmw
//  Helsinki-NLP/opus-mt-zlw-fiu
//  Helsinki-NLP/opus-mt-tc-big-zle-gmq

export const models = {
    'am': {
        'sv': { model: 'Helsinki-NLP/opus-mt-am-sv', src: null, tgt: null },
    },
    'ar': {
        'de': { model: 'Helsinki-NLP/opus-mt-ar-de' },
        'el': { model: 'Helsinki-NLP/opus-mt-ar-el' },
    },
    'af': {
        'de': { model: 'Helsinki-NLP/opus-mt-af-de' },
        'en': { model: 'Helsinki-NLP/opus-mt-af-en' },
        'eo': { model: 'Helsinki-NLP/opus-mt-af-eo' },
        'es': { model: 'Helsinki-NLP/opus-mt-af-es' },
        'fi': { model: 'Helsinki-NLP/opus-mt-af-fi' },
        'fr': { model: 'Helsinki-NLP/opus-mt-af-fr' },
        'nl': { model: 'Helsinki-NLP/opus-mt-af-nl' },
        'ru': { model: 'Helsinki-NLP/opus-mt-af-ru' },
        'sv': { model: 'Helsinki-NLP/opus-mt-af-sv' },
    },
    'az': {
        'en': { model: 'Helsinki-NLP/opus-mt-az-en' },
    },
    'da': {
        'en': { model: 'Helsinki-NLP/opus-mt-da-en' },
        'he': { model: 'Helsinki-NLP/opus-mt-tc-big-gmq-he' },
    },
    'en': {
        'so': { model: 'Helsinki-NLP/opus-mt-en-cus' },
        'hi': { model: 'Helsinki-NLP/opus-mt-en-hi' },
        'fr': { model: 'Helsinki-NLP/opus-mt-en-fr' },
        'es': { model: 'Helsinki-NLP/opus-mt-en-es' },
        'ru': { model: 'Helsinki-NLP/opus-mt-en-ru' },
        'sv': { model: 'Helsinki-NLP/opus-mt-en-sv' },
        'ti': { model: 'Helsinki-NLP/opus-mt-en-ti' },
        'tll': { model: 'Helsinki-NLP/opus-mt-en-tll' },
        'tr': { model: 'Helsinki-NLP/opus-mt-tc-big-en-tr' },
        'zh': { model: 'Helsinki-NLP/opus-mt-en-zh' },
        'sh': { model: 'Helsinki-NLP/opus-mt-tc-base-en-sh' },
    },
    'fi': {
        'uk': { model: 'Helsinki-NLP/opus-mt-tc-base-fi-uk' },
    },
    'fr': {
        'en': { model: 'Helsinki-NLP/opus-mt-fr-en' },
        'pag': { model: 'Helsinki-NLP/opus-mt-fr-pag' },
    },
    'hu': {
        'uk': { model: 'Helsinki-NLP/opus-mt-tc-base-hu-uk' },
    },
    'it': {
        'en': { model: 'Helsinki-NLP/opus-mt-it-en' },
    },
    'lo': {
        'en': { model: 'Helsinki-NLP/opus-mt-taw-en' },
    },
    'km': {
        'en': { model: 'Helsinki-NLP/opus-mt-aav-en' },
    },
    'pl': {
        'uk': { model: 'Helsinki-NLP/opus-mt-pl-uk' },
    },
    'ro': {
        'uk': { model: 'Helsinki-NLP/opus-mt-tc-base-ro-uk' },
    },
    'ru': {
        'fi': { model: 'Helsinki-NLP/opus-mt-tc-big-zle-fi' },
        'vi': { model: 'Helsinki-NLP/opus-mt-ru-vi' },
        'pt': { model: 'Helsinki-NLP/opus-mt-tc-big-zle-pt' },
    },
    'rn': {
        'en': { model: 'Helsinki-NLP/opus-mt-rn-en' },
    },
    'so': {
        'en': { model: 'Helsinki-NLP/opus-mt-cus-en' },
    },
    'sv': {
        'en': { model: 'Helsinki-NLP/opus-mt-sv-en' },
        'he': { model: 'Helsinki-NLP/opus-mt-tc-big-gmq-he' },
    },
    'taw': {
        'en': { model: 'Helsinki-NLP/opus-mt-taw-en' },
    },
    'th': {
        'en': { model: 'Helsinki-NLP/opus-mt-taw-en' },
    },
    'tr': {
        // 'en': { model: 'Helsinki-NLP/opus-mt-tr-en' },
        'en': { model: 'Helsinki-NLP/opus-mt-tc-big-tr-en' },
        'uk': { model: 'Helsinki-NLP/opus-mt-tc-base-tr-uk' },
    },
    'uk': {
        // 'fi': { model: 'Helsinki-NLP/opus-mt-uk-fi' },
        // 'fi': { model: 'Helsinki-NLP/opus-mt-tc-big-zle-fi' },
        'fi': { model: 'Helsinki-NLP/opus-mt-tc-base-uk-fi' },

        // 'tr': { model: 'Helsinki-NLP/opus-mt-uk-tr' },
        'tr': { model: 'Helsinki-NLP/opus-mt-tc-base-uk-tr' },
        
        'hu': { model: 'Helsinki-NLP/opus-mt-tc-base-uk-hu' },
        'cs': { model: 'Helsinki-NLP/opus-mt-tc-base-uk-ces_slk' },
        'sk': { model: 'Helsinki-NLP/opus-mt-tc-base-uk-ces_slk' },
        'ro': { model: 'Helsinki-NLP/opus-mt-tc-base-uk-ro' },
        'pt': { model: 'Helsinki-NLP/opus-mt-tc-big-zle-pt' },
    },
    'vi': {
        'en': { model: 'Helsinki-NLP/opus-mt-aav-en' },
    },
    'zh': {
        'en': { model: 'Helsinki-NLP/opus-mt-zh-en' },
    },
}

export const getSupportedSourceLanguages = () => Object.keys(models).map(m => {
    return { code: m, language: languages[m] }
}).sort((a, b) => a.language.localeCompare(b.language));

export const getSourceTargetPair = (source: string) => {
    const transpationsPair = models[source];
    return Object.keys(transpationsPair).map(m => {
        return { code: m, language: languages[m] }
    }).sort((a, b) => a.language.localeCompare(b.language));
}

export const languages = {
    'af': 'Afrikaans',
    'am': 'Amharic',
    'ar': 'Arabic',
    'az': 'Azerbaijani',

    'bn': 'Bengali',
    'my': 'Burmese',

    'zh': 'Chinese',
    'hr': 'Croatian',
    'cs': 'Czech',

    'da': 'Danish',
    'nl': 'Dutch',

    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',

    'fi': 'Finnish',
    'fr': 'French',

    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',

    'he': 'Hebrew',
    'hi': 'Hindi',
    'hu': 'Hungarian',

    'id': 'Indonesian',
    'it': 'Italian',

    'ja': 'Japanese',

    'kk': 'Kazakh',
    'km': 'Khmer',
    'rn': 'Kirundi',
    'ko': 'Korean',

    'lo': 'Lao',
    'lt': 'Lithuanian',
    'lv': 'Latvian',

    'mk': 'Macedonian',
    'ml': 'Malayalam',
    'mr': 'Marathi',
    'mn': 'Mongolian',

    'ne': 'Nepali',

    'pag': 'Pangasinan',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',

    'ro': 'Romanian',
    'ru': 'Russian',

    'si': 'Sinhala',
    'sh': 'Serbo-Croatian',
    'so': 'Somali',
    'sk': 'Slovak',
    'sl': 'Slovene',
    'es': 'Spanish',
    'sw': 'Swahili',
    'sv': 'Swedish',

    'tl': 'Tagalog',
    'taw': 'Tai',
    'ta': 'Tamil',
    'te': 'Telugu',
    'tll': 'Tetela',
    'th': 'Thai',
    'ti': 'Tigrinya',
    'tr': 'Turkish',

    'uk': 'Ukrainian',
    'ur': 'Urdu',

    'vi': 'Vietnamese',

    'xh': 'Xhosa',
};
