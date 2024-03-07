import { NextRequest } from "next/server"
import withErrorHandler from "@/helpers/server/api-error-handling";

import { pipeline } from '@xenova/transformers';
import { HfInference } from '@huggingface/inference';
import { languages, models, newSupportedLanguages } from "@/helpers/server/utils";
import PipelineSingleton from "./pipeline";

const HF_ACCESS_TOKEN = process.env.HUGGING_FACE_TRANSLATE_ACCESS_TOKEN;
const hf = new HfInference(HF_ACCESS_TOKEN);

export const GET = withErrorHandler(async (req: NextRequest) => {
    try {
        return { success: true };
    } catch (ex) {
        console.log(ex);
        throw new Error(ex);
    }
});

export const POST = withErrorHandler(async (req: NextRequest) => {
    try {
        const { text, src_lang, tgt_lang } = await req.json();

        // Get the classification pipeline. When called for the first time,
        // this will load the pipeline and cache it for future use.
        const classifier = await PipelineSingleton.getInstance();

        const promises = tgt_lang.map((m: string) => {
            // Actually perform the classification
            return classifier(text, {
                //  @ts-ignore
                src_lang: src_lang, // Hindi
                tgt_lang: m, // French
            }).then((result) => {
                if (result.length > 0) {
                    const { translation_text } = result[0];
                    const lang = newSupportedLanguages.find(d => d.code === m);
                    return { language: lang?.language, translation: translation_text }
                }
            }).catch((ex) => {
                throw new Error(ex.message);
            });
        });

        return Promise.all(promises).then((result) => {
            return result.filter(f => Boolean(f));
        }).catch((ex) => {
            throw new Error(ex.message);
        })

        // return output[0];

        // // Create a translation pipeline
        // const translator = await pipeline('translation', 'Xenova/nllb-200-distilled-600M');

        // // Translate text from Hindi to French
        // const output = await translator(text, {
        //     //  @ts-ignore
        //     src_lang: 'eng_Latn', // Hindi
        //     tgt_lang: 'hin_Deva', // French
        // });


        // [{ translation_text: 'La vie est comme une boîte à chocolat.' }]

        // const promises = tgt_lang.map((m: string) => {

        //     const { model, src, tgt } = models[src_lang][m];

        //     const payload = {
        //         model: 'Xenova/nllb-200-distilled-600M',
        //         inputs: text,
        //     }

        //     payload['parameters'] = {
        //         src_lang: 'eng_Latn',
        //         tgt_lang: 'hin_Deva',
        //     }

        //     // if (src || tgt) {
        //     //     payload['parameters'] = {
        //     //         src_lang: src || src_lang,
        //     //         tgt_lang: tgt || m,
        //     //     }
        //     // }

        //     return hf.translation(payload).then(({ translation_text }) => {
        //         return { language: languages[m], translation: translation_text }
        //     }).catch((ex) => {
        //         throw new Error(ex.message)
        //     })
        // });

        // return Promise.all(promises).then((result) => {
        //     return result;
        // }).catch((ex) => {
        //     throw new Error(ex.message);
        // })


    } catch (ex) {
        console.log(ex);
        throw new Error(ex.message);
    }
});

export const dynamic = "force-dynamic";
