'use client';

import React, { useReducer } from 'react'
import { Button } from "@/components/ui/button";
import { AppSpinnerIcon } from '@/icons';
import { getSourceTargetPair, getSupportedSourceLanguages } from '@/helpers/server/utils';
import { postApi } from '@/helpers/client/utils';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const SourceLanguage = dynamic(() => import('./SourceLanguage'));
const InputToTranslate = dynamic(() => import('./InputToTranslate'));
const LanguageSelection = dynamic(() => import('./LanguageSelection'));
const TranslatedList = dynamic(() => import('./TranslatedList'));

const languages = getSupportedSourceLanguages();

const defaultSourceValue = languages.find(d => d.language === 'English')?.code || '';

export default function Home() {

    const router = useRouter();
    const [properties, updateProperties] = useReducer((prev, next) => {
        return { ...prev, ...next };
    }, {
        text: '',
        src_lang: defaultSourceValue,
        supportedTranslations: getSourceTargetPair(defaultSourceValue),
        tgt_lang: [],
        translations: [],
        loading: false
    })

    const { text, src_lang, supportedTranslations, tgt_lang, translations, loading } = properties;

    const disableTranslateButton = loading === true || text.trim() === '' || tgt_lang.length === 0;

    const translate = async () => {
        try {
            updateProperties({
                loading: true,
                translations: []
            });

            const obj = {
                text,
                src_lang,
                tgt_lang
            };

            const response = await postApi({
                url: 'translate',
                data: obj,
                successMessage: "Translation completed"
            }) as any;

            updateProperties({
                loading: false,
                translations: response
            });

            setTimeout(() => {
                router.replace('#translations');
            }, 500)
        } catch (ex) {
            updateProperties({
                loading: false
            });
        }
    }

    return (
        <div className="space-y-3">

            <div className="max-w-[500px] m-auto">
                <div className="flex flex-col gap-3">

                    <SourceLanguage defaultValue={src_lang} onLanguageChange={(selected) => {
                        updateProperties({
                            text: '',
                            tgt_lang: [],
                            translations: [],
                            src_lang: selected,
                            supportedTranslations: getSourceTargetPair(selected)
                        })
                    }} />

                    <InputToTranslate text={text} onChange={(e) => {
                        updateProperties({
                            text: e.target.value
                        })
                    }} />

                    <LanguageSelection
                        multiple
                        supportedTranslations={supportedTranslations}
                        selectedLanguage={tgt_lang}
                        onSelectionChange={(selected) => {
                            updateProperties({
                                tgt_lang: selected
                            })
                        }}
                    />

                    <Button
                        className='w-full my-2'
                        disabled={disableTranslateButton}
                        onClick={translate}
                    >
                        {
                            loading ? <AppSpinnerIcon className="animate-spin" /> : 'Start Translation'
                        }
                    </Button>
                </div>
            </div>

            <div className="max-w-xl">
                {
                    translations.length > 0 ? <TranslatedList translations={translations} /> : ''
                }
            </div>
        </div>
    )
}
