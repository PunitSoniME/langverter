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

const sortBy = (data: Array<any>, proeprty: string) => data.sort((a, b) => a[proeprty].localeCompare(b[proeprty]));

export const getSupportedSourceLanguages = () => sortBy(Object.keys(models).map(m => {
    return { code: m, language: languages[m] }
}), 'language');

export const getSourceTargetPair = (source: string) => {
    const transpationsPair = models[source];
    return sortBy(Object.keys(transpationsPair).map(m => {
        return { code: m, language: languages[m] }
    }), 'language');
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

//  https://github.com/facebookresearch/flores/blob/main/flores200/README.md#languages-in-flores-200
export const newSupportedLanguages = sortBy([
    { language: 'Acehnese (Arabic script)', code: 'ace_Arab' },
    { language: 'Acehnese (Latin script)', code: 'ace_Latn' },
    { language: 'Mesopotamian Arabic', code: 'acm_Arab' },
    { language: 'Ta\'izzi-Adeni Arabic', code: 'acq_Arab' },
    { language: 'Tunisian Arabic', code: 'aeb_Arab' },
    { language: 'Afrikaans', code: 'afr_Latn' },
    { language: 'South Levantine Arabic', code: 'ajp_Arab' },
    { language: 'Akan', code: 'aka_Latn' },
    { language: 'Amharic', code: 'amh_Ethi' },
    { language: 'North Levantine Arabic', code: 'apc_Arab' },
    { language: 'Modern Standard Arabic', code: 'arb_Arab' },
    { language: 'Modern Standard Arabic (Romanized)', code: 'arb_Latn' },
    { language: 'Najdi Arabic', code: 'ars_Arab' },
    { language: 'Moroccan Arabic', code: 'ary_Arab' },
    { language: 'Egyptian Arabic', code: 'arz_Arab' },
    { language: 'Assamese', code: 'asm_Beng' },
    { language: 'Asturian', code: 'ast_Latn' },
    { language: 'Awadhi', code: 'awa_Deva' },
    { language: 'Central Aymara', code: 'ayr_Latn' },
    { language: 'South Azerbaijani', code: 'azb_Arab' },
    { language: 'North Azerbaijani', code: 'azj_Latn' },
    { language: 'Bashkir', code: 'bak_Cyrl' },
    { language: 'Bambara', code: 'bam_Latn' },
    { language: 'Balinese', code: 'ban_Latn' },
    { language: 'Belarusian', code: 'bel_Cyrl' },
    { language: 'Bemba', code: 'bem_Latn' },
    { language: 'Bengali', code: 'ben_Beng' },
    { language: 'Bhojpuri', code: 'bho_Deva' },
    { language: 'Banjar (Arabic script)', code: 'bjn_Arab' },
    { language: 'Banjar (Latin script)', code: 'bjn_Latn' },
    { language: 'Standard Tibetan', code: 'bod_Tibt' },
    { language: 'Bosnian', code: 'bos_Latn' },
    { language: 'Buginese', code: 'bug_Latn' },
    { language: 'Bulgarian', code: 'bul_Cyrl' },
    { language: 'Catalan', code: 'cat_Latn' },
    { language: 'Cebuano', code: 'ceb_Latn' },
    { language: 'Czech', code: 'ces_Latn' },
    { language: 'Chokwe', code: 'cjk_Latn' },
    { language: 'Central Kurdish', code: 'ckb_Arab' },
    { language: 'Crimean Tatar', code: 'crh_Latn' },
    { language: 'Welsh', code: 'cym_Latn' },
    { language: 'Danish', code: 'dan_Latn' },
    { language: 'German', code: 'deu_Latn' },
    { language: 'Southwestern Dinka', code: 'dik_Latn' },
    { language: 'Dyula', code: 'dyu_Latn' },
    { language: 'Dzongkha', code: 'dzo_Tibt' },
    { language: 'Greek', code: 'ell_Grek' },
    { language: 'English', code: 'eng_Latn' },
    { language: 'Esperanto', code: 'epo_Latn' },
    { language: 'Estonian', code: 'est_Latn' },
    { language: 'Basque', code: 'eus_Latn' },
    { language: 'Ewe', code: 'ewe_Latn' },
    { language: 'Faroese', code: 'fao_Latn' },
    { language: 'Fijian', code: 'fij_Latn' },
    { language: 'Finnish', code: 'fin_Latn' },
    { language: 'Fon', code: 'fon_Latn' },
    { language: 'French', code: 'fra_Latn' },
    { language: 'Friulian', code: 'fur_Latn' },
    { language: 'Nigerian Fulfulde', code: 'fuv_Latn' },
    { language: 'Scottish Gaelic', code: 'gla_Latn' },
    { language: 'Irish', code: 'gle_Latn' },
    { language: 'Galician', code: 'glg_Latn' },
    { language: 'Guarani', code: 'grn_Latn' },
    { language: 'Gujarati', code: 'guj_Gujr' },
    { language: 'Haitian Creole', code: 'hat_Latn' },
    { language: 'Hausa', code: 'hau_Latn' },
    { language: 'Hebrew', code: 'heb_Hebr' },
    { language: 'Hindi', code: 'hin_Deva' },
    { language: 'Chhattisgarhi', code: 'hne_Deva' },
    { language: 'Croatian', code: 'hrv_Latn' },
    { language: 'Hungarian', code: 'hun_Latn' },
    { language: 'Armenian', code: 'hye_Armn' },
    { language: 'Igbo', code: 'ibo_Latn' },
    { language: 'Ilocano', code: 'ilo_Latn' },
    { language: 'Indonesian', code: 'ind_Latn' },
    { language: 'Icelandic', code: 'isl_Latn' },
    { language: 'Italian', code: 'ita_Latn' },
    { language: 'Javanese', code: 'jav_Latn' },
    { language: 'Japanese', code: 'jpn_Jpan' },
    { language: 'Kabyle', code: 'kab_Latn' },
    { language: 'Jingpho', code: 'kac_Latn' },
    { language: 'Kamba', code: 'kam_Latn' },
    { language: 'Kannada', code: 'kan_Knda' },
    { language: 'Kashmiri (Arabic script)', code: 'kas_Arab' },
    { language: 'Kashmiri (Devanagari script)', code: 'kas_Deva' },
    { language: 'Georgian', code: 'kat_Geor' },
    { language: 'Central Kanuri (Arabic script)', code: 'knc_Arab' },
    { language: 'Central Kanuri (Latin script)', code: 'knc_Latn' },
    { language: 'Kazakh', code: 'kaz_Cyrl' },
    { language: 'Kabiyè', code: 'kbp_Latn' },
    { language: 'Kabuverdianu', code: 'kea_Latn' },
    { language: 'Khmer', code: 'khm_Khmr' },
    { language: 'Kikuyu', code: 'kik_Latn' },
    { language: 'Kinyarwanda', code: 'kin_Latn' },
    { language: 'Kyrgyz', code: 'kir_Cyrl' },
    { language: 'Kimbundu', code: 'kmb_Latn' },
    { language: 'Northern Kurdish', code: 'kmr_Latn' },
    { language: 'Kikongo', code: 'kon_Latn' },
    { language: 'Korean', code: 'kor_Hang' },
    { language: 'Lao', code: 'lao_Laoo' },
    { language: 'Ligurian', code: 'lij_Latn' },
    { language: 'Limburgish', code: 'lim_Latn' },
    { language: 'Lingala', code: 'lin_Latn' },
    { language: 'Lithuanian', code: 'lit_Latn' },
    { language: 'Lombard', code: 'lmo_Latn' },
    { language: 'Latgalian', code: 'ltg_Latn' },
    { language: 'Luxembourgish', code: 'ltz_Latn' },
    { language: 'Luba-Kasai', code: 'lua_Latn' },
    { language: 'Ganda', code: 'lug_Latn' },
    { language: 'Luo', code: 'luo_Latn' },
    { language: 'Mizo', code: 'lus_Latn' },
    { language: 'Standard Latvian', code: 'lvs_Latn' },
    { language: 'Magahi', code: 'mag_Deva' },
    { language: 'Maithili', code: 'mai_Deva' },
    { language: 'Malayalam', code: 'mal_Mlym' },
    { language: 'Marathi', code: 'mar_Deva' },
    { language: 'Minangkabau (Arabic script)', code: 'min_Arab' },
    { language: 'Minangkabau (Latin script)', code: 'min_Latn' },
    { language: 'Macedonian', code: 'mkd_Cyrl' },
    { language: 'Plateau Malagasy', code: 'plt_Latn' },
    { language: 'Maltese', code: 'mlt_Latn' },
    { language: 'Meitei (Bengali script)', code: 'mni_Beng' },
    { language: 'Halh Mongolian', code: 'khk_Cyrl' },
    { language: 'Mossi', code: 'mos_Latn' },
    { language: 'Maori', code: 'mri_Latn' },
    { language: 'Burmese', code: 'mya_Mymr' },
    { language: 'Dutch', code: 'nld_Latn' },
    { language: 'Norwegian Nynorsk', code: 'nno_Latn' },
    { language: 'Norwegian Bokmål', code: 'nob_Latn' },
    { language: 'Nepali', code: 'npi_Deva' },
    { language: 'Northern Sotho', code: 'nso_Latn' },
    { language: 'Nuer', code: 'nus_Latn' },
    { language: 'Nyanja', code: 'nya_Latn' },
    { language: 'Occitan', code: 'oci_Latn' },
    { language: 'West Central Oromo', code: 'gaz_Latn' },
    { language: 'Odia', code: 'ory_Orya' },
    { language: 'Pangasinan', code: 'pag_Latn' },
    { language: 'Eastern Panjabi', code: 'pan_Guru' },
    { language: 'Papiamento', code: 'pap_Latn' },
    { language: 'Western Persian', code: 'pes_Arab' },
    { language: 'Polish', code: 'pol_Latn' },
    { language: 'Portuguese', code: 'por_Latn' },
    { language: 'Dari', code: 'prs_Arab' },
    { language: 'Southern Pashto', code: 'pbt_Arab' },
    { language: 'Ayacucho Quechua', code: 'quy_Latn' },
    { language: 'Romanian', code: 'ron_Latn' },
    { language: 'Rundi', code: 'run_Latn' },
    { language: 'Russian', code: 'rus_Cyrl' },
    { language: 'Sango', code: 'sag_Latn' },
    { language: 'Sanskrit', code: 'san_Deva' },
    { language: 'Santali', code: 'sat_Olck' },
    { language: 'Sicilian', code: 'scn_Latn' },
    { language: 'Shan', code: 'shn_Mymr' },
    { language: 'Sinhala', code: 'sin_Sinh' },
    { language: 'Slovak', code: 'slk_Latn' },
    { language: 'Slovenian', code: 'slv_Latn' },
    { language: 'Samoan', code: 'smo_Latn' },
    { language: 'Shona', code: 'sna_Latn' },
    { language: 'Sindhi', code: 'snd_Arab' },
    { language: 'Somali', code: 'som_Latn' },
    { language: 'Southern Sotho', code: 'sot_Latn' },
    { language: 'Spanish', code: 'spa_Latn' },
    { language: 'Tosk Albanian', code: 'als_Latn' },
    { language: 'Sardinian', code: 'srd_Latn' },
    { language: 'Serbian', code: 'srp_Cyrl' },
    { language: 'Swati', code: 'ssw_Latn' },
    { language: 'Sundanese', code: 'sun_Latn' },
    { language: 'Swedish', code: 'swe_Latn' },
    { language: 'Swahili', code: 'swh_Latn' },
    { language: 'Silesian', code: 'szl_Latn' },
    { language: 'Tamil', code: 'tam_Taml' },
    { language: 'Tatar', code: 'tat_Cyrl' },
    { language: 'Telugu', code: 'tel_Telu' },
    { language: 'Tajik', code: 'tgk_Cyrl' },
    { language: 'Tagalog', code: 'tgl_Latn' },
    { language: 'Thai', code: 'tha_Thai' },
    { language: 'Tigrinya', code: 'tir_Ethi' },
    { language: 'Tamasheq (Latin script)', code: 'taq_Latn' },
    { language: 'Tamasheq (Tifinagh script)', code: 'taq_Tfng' },
    { language: 'Tok Pisin', code: 'tpi_Latn' },
    { language: 'Tswana', code: 'tsn_Latn' },
    { language: 'Tsonga', code: 'tso_Latn' },
    { language: 'Turkmen', code: 'tuk_Latn' },
    { language: 'Tumbuka', code: 'tum_Latn' },
    { language: 'Turkish', code: 'tur_Latn' },
    { language: 'Twi', code: 'twi_Latn' },
    { language: 'Central Atlas Tamazight', code: 'tzm_Tfng' },
    { language: 'Uyghur', code: 'uig_Arab' },
    { language: 'Ukrainian', code: 'ukr_Cyrl' },
    { language: 'Umbundu', code: 'umb_Latn' },
    { language: 'Urdu', code: 'urd_Arab' },
    { language: 'Northern Uzbek', code: 'uzn_Latn' },
    { language: 'Venetian', code: 'vec_Latn' },
    { language: 'Vietnamese', code: 'vie_Latn' },
    { language: 'Waray', code: 'war_Latn' },
    { language: 'Wolof', code: 'wol_Latn' },
    { language: 'Xhosa', code: 'xho_Latn' },
    { language: 'Eastern Yiddish', code: 'ydd_Hebr' },
    { language: 'Yoruba', code: 'yor_Latn' },
    { language: 'Yue Chinese', code: 'yue_Hant' },
    { language: 'Chinese (Simplified)', code: 'zho_Hans' },
    { language: 'Chinese (Traditional)', code: 'zho_Hant' },
    { language: 'Standard Malay', code: 'zsm_Latn' },
    { language: 'Zulu', code: 'zul_Latn' },
], 'language');



//  https://github.com/openlanguagedata/flores
export const newLanguages = sortBy([
    { language: "Acehnese (Arabic script)", code: "ace_Arab" },
    { language: "Acehnese (Latin script)", code: "ace_Latn" },
    { language: "Mesopotamian Arabic", code: "acm_Arab" },
    { language: "Ta'izzi-Adeni Arabic", code: "acq_Arab" },
    { language: "Tunisian Arabic", code: "aeb_Arab" },
    { language: "Afrikaans", code: "afr_Latn" },
    { language: "South Levantine Arabic", code: "ajp_Arab" },
    { language: "Akan", code: "aka_Latn" },
    { language: "Tosk Albanian", code: "als_Latn" },
    { language: "Amharic", code: "amh_Ethi" },
    { language: "North Levantine Arabic", code: "apc_Arab" },
    { language: "Modern Standard Arabic", code: "arb_Arab" },
    { language: "Modern Standard Arabic (Romanized)", code: "arb_Latn" },
    { language: "Najdi Arabic", code: "ars_Arab" },
    { language: "Moroccan Arabic", code: "ary_Arab" },
    { language: "Egyptian Arabic", code: "arz_Arab" },
    { language: "Assamese", code: "asm_Beng" },
    { language: "Asturian", code: "ast_Latn" },
    { language: "Awadhi", code: "awa_Deva" },
    { language: "Central Aymara", code: "ayr_Latn" },
    { language: "South Azerbaijani", code: "azb_Arab" },
    { language: "North Azerbaijani", code: "azj_Latn" },
    { language: "Bashkir", code: "bak_Cyrl" },
    { language: "Bambara", code: "bam_Latn" },
    { language: "Balinese", code: "ban_Latn" },
    { language: "Belarusian", code: "bel_Cyrl" },
    { language: "Bemba", code: "bem_Latn" },
    { language: "Bengali", code: "ben_Beng" },
    { language: "Bhojpuri", code: "bho_Deva" },
    { language: "Banjar (Arabic script)", code: "bjn_Arab" },
    { language: "Banjar (Latin script)", code: "bjn_Latn" },
    { language: "Standard Tibetan", code: "bod_Tibt" },
    { language: "Bosnian", code: "bos_Latn" },
    { language: "Bodo", code: " brx_Deva", devOnly: true },
    { language: "Buginese", code: "bug_Latn" },
    { language: "Bulgarian", code: "bul_Cyrl" },
    { language: "Catalan", code: "cat_Latn" },
    { language: "Cebuano", code: "ceb_Latn" },
    { language: "Czech", code: "ces_Latn" },
    { language: "Chuvash", code: " chv_Cyrl", devOnly: true },
    { language: "Chokwe", code: "cjk_Latn" },
    { language: "Central Kurdish", code: "ckb_Arab" },
    { language: "Mandarin Chinese (Simplified)", code: "cmn_Hans" },
    { language: "Mandarin Chinese (Traditional)", code: "cmn_Hant" },
    { language: "Crimean Tatar", code: "crh_Latn" },
    { language: "Welsh", code: "cym_Latn" },
    { language: "Danish", code: "dan_Latn" },
    { language: "German", code: "deu_Latn" },
    { language: "Dogri", code: " dgo_Deva", devOnly: true },
    { language: "Southwestern Dinka", code: "dik_Latn" },
    { language: "Dyula", code: "dyu_Latn" },
    { language: "Dzongkha", code: "dzo_Tibt" },
    { language: "Greek", code: "ell_Grek" },
    { language: "English", code: "eng_Latn" },
    { language: "Esperanto", code: "epo_Latn" },
    { language: "Estonian", code: "est_Latn" },
    { language: "Basque", code: "eus_Latn" },
    { language: "Ewe", code: "ewe_Latn" },
    { language: "Faroese", code: "fao_Latn" },
    { language: "Fijian", code: "fij_Latn" },
    { language: "Finnish", code: "fin_Latn" },
    { language: "Fon", code: "fon_Latn" },
    { language: "French", code: "fra_Latn" },
    { language: "Friulian", code: "fur_Latn" },
    { language: "Nigerian Fulfulde", code: "fuv_Latn" },
    { language: "Scottish Gaelic", code: "gla_Latn" },
    { language: "Irish", code: "gle_Latn" },
    { language: "Galician", code: "glg_Latn" },
    { language: "Goan Konkani", code: "gom_Deva" },
    { language: "Guarani", code: "grn_Latn" },
    { language: "Gujarati", code: "guj_Gujr" },
    { language: "Haitian Creole", code: "hat_Latn" },
    { language: "Hausa", code: "hau_Latn" },
    { language: "Hebrew", code: "heb_Hebr" },
    { language: "Hindi", code: "hin_Deva" },
    { language: "Chhattisgarhi", code: "hne_Deva" },
    { language: "Croatian", code: "hrv_Latn" },
    { language: "Hungarian", code: "hun_Latn" },
    { language: "Armenian", code: "hye_Armn" },
    { language: "Igbo", code: "ibo_Latn" },
    { language: "Ilocano", code: "ilo_Latn" },
    { language: "Indonesian", code: "ind_Latn" },
    { language: "Icelandic", code: "isl_Latn" },
    { language: "Italian", code: "ita_Latn" },
    { language: "Javanese", code: "jav_Latn" },
    { language: "Japanese", code: "jpn_Jpan" },
    { language: "Kabyle", code: "kab_Latn" },
    { language: "Jingpho", code: "kac_Latn" },
    { language: "Kamba", code: "kam_Latn" },
    { language: "Kannada", code: "kan_Knda" },
    { language: "Kashmiri (Arabic script)", code: "kas_Arab" },
    { language: "Kashmiri (Devanagari script)", code: "kas_Deva" },
    { language: "Georgian", code: "kat_Geor" },
    { language: "Central Kanuri (Arabic script)", code: "knc_Arab" },
    { language: "Central Kanuri (Latin script)", code: "knc_Latn" },
    { language: "Kazakh", code: "kaz_Cyrl" },
    { language: "Kabiyè", code: "kbp_Latn" },
    { language: "Kabuverdianu", code: "kea_Latn" },
    { language: "Khmer", code: "khm_Khmr" },
    { language: "Kikuyu", code: "kik_Latn" },
    { language: "Kinyarwanda", code: "kin_Latn" },
    { language: "Kyrgyz", code: "kir_Cyrl" },
    { language: "Kimbundu", code: "kmb_Latn" },
    { language: "Northern Kurdish", code: "kmr_Latn" },
    { language: "Kikongo", code: "kon_Latn" },
    { language: "Korean", code: "kor_Hang" },
    { language: "Lao", code: "lao_Laoo" },
    { language: "Ligurian", code: "lij_Latn" },
    { language: "Filipino", code: "fil_Latn" },
    { language: "Limburgish", code: "lim_Latn" },
    { language: "Lingala", code: "lin_Latn" },
    { language: "Lithuanian", code: "lit_Latn" },
    { language: "Lombard", code: "lmo_Latn" },
    { language: "Latgalian", code: "ltg_Latn" },
    { language: "Luxembourgish", code: "ltz_Latn" },
    { language: "Luba-Kasai", code: "lua_Latn" },
    { language: "Ganda", code: "lug_Latn" },
    { language: "Luo", code: "luo_Latn" },
    { language: "Mizo", code: "lus_Latn" },
    { language: "Standard Latvian", code: "lvs_Latn" },
    { language: "Magahi", code: "mag_Deva" },
    { language: "Maithili", code: "mai_Deva" },
    { language: "Malayalam", code: "mal_Mlym" },
    { language: "Marathi", code: "mar_Deva" },
    { language: "Meadow Mari", code: " mhr_Cyrl", devOnly: true },
    { language: "Minangkabau (Arabic script)", code: "min_Arab" },
    { language: "Minangkabau (Latin script)", code: "min_Latn" },
    { language: "Macedonian", code: "mkd_Cyrl" },
    { language: "Plateau Malagasy", code: "plt_Latn" },
    { language: "Maltese", code: "mlt_Latn" },
    { language: "Meitei (Bengali script)", code: "mni_Beng" },
    { language: "Meitei (Meitei script)", code: "mni_Mte", devOnly: true },
    { language: "Halh Mongolian", code: "khk_Cyrl" },
    { language: "Mossi", code: "mos_Latn" },
    { language: "Maori", code: "mri_Latn" },
    { language: "Burmese", code: "mya_Mymr" },
    { language: "Dutch", code: "nld_Latn" },
    { language: "Norwegian Nynorsk", code: "nno_Latn" },
    { language: "Norwegian Bokmål", code: "nob_Latn" },
    { language: "Nepali", code: "npi_Deva" },
    { language: "Nko", code: "nqo_Nkoo" },
    { language: "Northern Sotho", code: "nso_Latn" },
    { language: "Nuer", code: "nus_Latn" },
    { language: "Nyanja", code: "nya_Latn" },
    { language: "Occitan", code: "oci_Latn" },
    { language: "West Central Oromo", code: "gaz_Latn" },
    { language: "Odia", code: "ory_Orya" },
    { language: "Pangasinan", code: "pag_Latn" },
    { language: "Eastern Panjabi", code: "pan_Guru" },
    { language: "Papiamento", code: "pap_Latn" },
    { language: "Western Persian", code: "pes_Arab" },
    { language: "Polish", code: "pol_Latn" },
    { language: "Portuguese", code: "por_Latn" },
    { language: "Dari", code: "prs_Arab" },
    { language: "Southern Pashto", code: "pbt_Arab" },
    { language: "Ayacucho Quechua", code: "quy_Latn" },
    { language: "Romanian", code: "ron_Latn" },
    { language: "Rundi", code: "run_Latn" },
    { language: "Russian", code: "rus_Cyrl" },
    { language: "Sango", code: "sag_Latn" },
    { language: "Sanskrit", code: "san_Deva" },
    { language: "Santali", code: "sat_Olck" },
    { language: "Sicilian", code: "scn_Latn" },
    { language: "Shan", code: "shn_Mymr" },
    { language: "Sinhala", code: "sin_Sinh" },
    { language: "Slovak", code: "slk_Latn" },
    { language: "Slovenian", code: "slv_Latn" },
    { language: "Samoan", code: "smo_Latn" },
    { language: "Shona", code: "sna_Latn" },
    { language: "Sindhi (Arabic script)", code: "snd_Arab" },
    { language: "Sindhi (Devanagari script)", code: " snd_Deva", devOnly: true },
    { language: "Somali", code: "som_Latn" },
    { language: "Southern Sotho", code: "sot_Latn" },
    { language: "Spanish", code: "spa_Latn" },
    { language: "Sardinian", code: "srd_Latn" },
    { language: "Serbian", code: "srp_Cyrl" },
    { language: "Swati", code: "ssw_Latn" },
    { language: "Sundanese", code: "sun_Latn" },
    { language: "Swedish", code: "swe_Latn" },
    { language: "Swahili", code: "swh_Latn" },
    { language: "Silesian", code: "szl_Latn" },
    { language: "Tamil", code: "tam_Taml" },
    { language: "Tatar", code: "tat_Cyrl" },
    { language: "Telugu", code: "tel_Telu" },
    { language: "Tajik", code: "tgk_Cyrl" },
    { language: "Thai", code: "tha_Thai" },
    { language: "Tigrinya", code: "tir_Ethi" },
    { language: "Tamasheq (Latin script)", code: "taq_Latn" },
    { language: "Tamasheq (Tifinagh script)", code: "taq_Tfng" },
    { language: "Tok Pisin", code: "tpi_Latn" },
    { language: "Tswana", code: "tsn_Latn" },
    { language: "Tsonga", code: "tso_Latn" },
    { language: "Turkmen", code: "tuk_Latn" },
    { language: "Tumbuka", code: "tum_Latn" },
    { language: "Turkish", code: "tur_Latn" },
    { language: "Twi", code: "twi_Latn" },
    { language: "Uyghur", code: "uig_Arab" },
    { language: "Ukrainian", code: "ukr_Cyrl" },
    { language: "Umbundu", code: "umb_Latn" },
    { language: "Urdu", code: "urd_Arab" },
    { language: "Northern Uzbek", code: "uzn_Latn" },
    { language: "Venetian", code: "vec_Latn" },
    { language: "Vietnamese", code: "vie_Latn" },
    { language: "Waray", code: "war_Latn" },
    { language: "Wolof", code: "wol_Latn" },
    { language: "Xhosa", code: "xho_Latn" },
    { language: "Eastern Yiddish", code: "ydd_Hebr" },
    { language: "Yoruba", code: "yor_Latn" },
    { language: "Yue Chinese", code: "yue_Hant" },
    { language: "Standard Moroccan Tamazight", code: "zgh_Tfng" },
    { language: "Standard Malay", code: "zsm_Latn" },
    { language: "Zulu", code: "zul_Latn" },
].filter(f => Boolean(f.devOnly) === false), 'language');