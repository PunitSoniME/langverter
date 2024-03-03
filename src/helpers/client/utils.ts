'use client'

import { toast } from "sonner";
import axiosInstance from "./axiosInstance";

export const appName = 'Langverter'


export const languages = [
    { language: 'Arabic', code: 'ar_AR' },
    { language: 'Czech', code: 'cs_CZ' },
    { language: 'German', code: 'de_DE' },
    { language: 'English', code: 'en_XX' },
    { language: 'Spanish', code: 'es_XX' },
    { language: 'Estonian', code: 'et_EE' },
    { language: 'Finnish', code: 'fi_FI' },
    { language: 'French', code: 'fr_XX' },
    { language: 'Gujarati', code: 'gu_IN' },
    { language: 'Hindi', code: 'hi_IN' },
    { language: 'Italian', code: 'it_IT' },
    { language: 'Japanese', code: 'ja_XX' },
    { language: 'Kazakh', code: 'kk_KZ' },
    { language: 'Korean', code: 'ko_KR' },
    { language: 'Lithuanian', code: 'lt_LT' },
    { language: 'Latvian', code: 'lv_LV' },
    { language: 'Burmese', code: 'my_MM' },
    { language: 'Nepali', code: 'ne_NP' },
    { language: 'Dutch', code: 'nl_XX' },
    { language: 'Romanian', code: 'ro_RO' },
    { language: 'Russian', code: 'ru_RU' },
    { language: 'Sinhala', code: 'si_LK' },
    { language: 'Turkish', code: 'tr_TR' },
    { language: 'Vietnamese', code: 'vi_VN' },
    { language: 'Chinese', code: 'zh_CN' },
    { language: 'Afrikaans', code: 'af_ZA' },
    { language: 'Azerbaijani', code: 'az_AZ' },
    { language: 'Bengali', code: 'bn_IN' },
    { language: 'Persian', code: 'fa_IR' },
    { language: 'Hebrew', code: 'he_IL' },
    { language: 'Croatian', code: 'hr_HR' },
    { language: 'Indonesian', code: 'id_ID' },
    { language: 'Georgian', code: 'ka_GE' },
    { language: 'Khmer', code: 'km_KH' },
    { language: 'Macedonian', code: 'mk_MK' },
    { language: 'Malayalam', code: 'ml_IN' },
    { language: 'Mongolian', code: 'mn_MN' },
    { language: 'Marathi', code: 'mr_IN' },
    { language: 'Polish', code: 'pl_PL' },
    { language: 'Pashto', code: 'ps_AF' },
    { language: 'Portuguese', code: 'pt_XX' },
    { language: 'Swedish', code: 'sv_SE' },
    { language: 'Swahili', code: 'sw_KE' },
    { language: 'Tamil', code: 'ta_IN' },
    { language: 'Telugu', code: 'te_IN' },
    { language: 'Thai', code: 'th_TH' },
    { language: 'Tagalog', code: 'tl_XX' },
    { language: 'Ukrainian', code: 'uk_UA' },
    { language: 'Urdu', code: 'ur_PK' },
    { language: 'Xhosa', code: 'xh_ZA' },
    { language: 'Galician', code: 'gl_ES' },
    { language: 'Slovene', code: 'sl_SI' }
];


export const getApi = async (url: string) => {
    return new Promise(async (resolve, reject) => {
        return await axiosInstance().get(url).then(({ data }) => {
            resolve(data);
        }).catch((error) => {
            toast.error(error.message);
            reject(error);
        })
    })
}

type RequestModel = {
    url: string;
    data: Record<string, any>;
    successMessage?: string;
}
export const postApi = async ({ url, data, successMessage }: RequestModel) => {
    return new Promise(async (resolve, reject) => {
        return await axiosInstance().post(url, data).then(({ data }) => {
            if (successMessage)
                toast.success(successMessage);

            resolve(data);
        }).catch((error) => {
            toast.error(error.message);
            reject(error);
        })
    })
}

export const patchApi = async ({ url, data, successMessage }: RequestModel) => {
    return new Promise(async (resolve, reject) => {
        return await axiosInstance().patch(url, data).then(({ data }) => {
            if (successMessage)
                toast.success(successMessage);

            resolve(data);
        }).catch((error) => {
            toast.error(error.message);
            reject(error);
        })
    })
}

export const deleteApi = async ({ url, data, successMessage }: RequestModel) => {
    return new Promise(async (resolve, reject) => {
        return await axiosInstance().delete(url, data).then(({ data }) => {
            if (successMessage)
                toast.success(successMessage);

            resolve(data);
        }).catch((error) => {
            toast.error(error.message);
            reject(error);
        })
    })
}