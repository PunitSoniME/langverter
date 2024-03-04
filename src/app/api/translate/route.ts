import { NextRequest } from "next/server"
import withErrorHandler from "@/helpers/server/api-error-handling";

import { HfInference } from '@huggingface/inference';
import { languages, models } from "@/helpers/server/utils";

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

        const promises = tgt_lang.map((m: string) => {
            return hf.translation({
                model: models[src_lang][m],
                inputs: text,
            })
        });

        return Promise.all(promises).then((result) => {

            return result.map((res, index) => {
                return {
                    language: languages[tgt_lang[index]],
                    translation: res.translation_text
                }
            });

        }).catch((ex) => {
            throw new Error(ex.message);
        })


    } catch (ex) {
        console.log(ex);
        throw new Error(ex.message);
    }
});

export const dynamic = "force-dynamic";
