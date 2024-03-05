'use client';

import React, { useReducer } from 'react'
import { Button } from "@/components/ui/button";
import { AppSpinnerIcon } from '@/icons';
import { getSourceTargetPair, getSupportedSourceLanguages } from '@/helpers/server/utils';
import { postApi, quotes } from '@/helpers/client/utils';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Blockquote, Muted } from '../ui/typography';

const SourceLanguage = dynamic(() => import('./SourceLanguage'));
const InputToTranslate = dynamic(() => import('./InputToTranslate'));
const LanguageSelection = dynamic(() => import('./LanguageSelection'));
const TranslatedList = dynamic(() => import('./TranslatedList'));

const languages = getSupportedSourceLanguages();

const defaultSourceValue = languages.find(d => d.language === 'English')?.code || '';

const GenerateRandomQuote = () => {

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)] || quotes[0];

    return <div className="p-8 my-3 flex flex-col items-center gap-3">
        <Blockquote className="max-w-2xl">{randomQuote.quote} - {randomQuote.author}</Blockquote>

        <AppSpinnerIcon className="animate-spin h-6 w-6" />

    </div>
}

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
        isTranslating: false
    })

    const { text, src_lang, supportedTranslations, tgt_lang, translations, isTranslating } = properties;

    const disableTranslateButton = isTranslating === true || text.trim() === '' || tgt_lang.length === 0;

    const translate = async () => {
        try {
            updateProperties({
                isTranslating: true,
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
                isTranslating: false,
                translations: response
            });

            setTimeout(() => {
                router.replace('#translations');
            }, 500)
        } catch (ex) {
            updateProperties({
                isTranslating: false
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
                        key={src_lang}
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
                            isTranslating ? <AppSpinnerIcon className="animate-spin h-3 w-3" /> : 'Start Translation'
                        }
                    </Button>
                </div>
            </div>

            {
                isTranslating ? <GenerateRandomQuote /> : ''
            }

            <div className="max-w-2xl m-auto">
                {
                    translations.length > 0 ? <TranslatedList translations={translations} /> : ''
                }
            </div>
        </div>
    )
}
