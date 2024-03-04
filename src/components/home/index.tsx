'use client';

import React, { Fragment, useReducer } from 'react'
import { Button } from "@/components/ui/button";
import { AppSpinnerIcon } from '@/icons';
import axios from 'axios';
import { Textarea } from '../ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// import { languages } from '@/helpers/client/utils';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { getSourceTargetPair, getSupportedSourceLanguages } from '@/helpers/server/utils';
import { postApi } from '@/helpers/client/utils';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const languages = getSupportedSourceLanguages();

const defaultSourceValue = languages.find(d => d.language === 'English')?.code || '';

export default function Home() {

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

    const convert = async () => {
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

            // const response = await axios({
            //     method: 'POST',
            //     url: '/api/convert',
            //     data: obj,
            //     // headers: {
            //     //     'Content-Type': 'application/json'
            //     // }
            // }) as any;

            const response = await postApi({
                url: 'convert',
                data: obj,
                successMessage: "Translation completed"
            }) as any;

            updateProperties({
                loading: false,
                translations: response
            });
        } catch (ex) {
            updateProperties({
                loading: false
            });
        }
    }

    return (
        <div className="max-w-[500px] m-auto">
            <div className="flex flex-col gap-3">

                <div>
                    <Label>Select source language</Label>
                    <Select
                        defaultValue={src_lang}
                        onValueChange={(selected) => {
                            updateProperties({
                                txt: '',
                                tgt_lang: [],
                                translations: [],
                                src_lang: selected,
                                supportedTranslations: getSourceTargetPair(selected)
                            })

                        }}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select source language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    languages.map((m) => (
                                        <SelectItem key={m.code} value={m.code} disabled={tgt_lang.some(s => s === m.code)}>
                                            {m.language}
                                        </SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label>Enter text to translate</Label>
                    <Textarea
                        className='w-full'
                        onChange={(e) => {
                            updateProperties({
                                text: e.target.value
                            })
                        }}
                    />
                </div>

                <div>
                    <Label>Select translation language</Label>
                    <div className="flex items-center gap-3 w-full flex-wrap mt-1">
                        {
                            supportedTranslations.map((m) => (
                                <div key={m.code} className='flex gap-2 items-center'>
                                    <Switch
                                        id={m.code}
                                        disabled={m.code === src_lang}
                                        onCheckedChange={(value) => {
                                            if (value) {
                                                updateProperties({
                                                    tgt_lang: [...tgt_lang, m.code]
                                                })
                                            }
                                            else {
                                                updateProperties({
                                                    tgt_lang: tgt_lang.filter(f => f !== m.code)
                                                })
                                            }
                                        }} />
                                    <Label htmlFor={m.code}>
                                        {m.language}
                                    </Label>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Button
                    className='w-full my-2'
                    disabled={disableTranslateButton}
                    onClick={convert}
                >
                    {
                        loading ? <AppSpinnerIcon className="animate-spin" /> : 'Start Translation'
                    }
                </Button>

                {
                    translations.length > 0 ? <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">Language</TableHead>
                                <TableHead>Translation</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                translations.map((m) => (
                                    <TableRow key={m.language}>
                                        <TableCell className="font-medium">
                                            {m.language}
                                        </TableCell>
                                        <TableCell>
                                            {m.translation}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table> : ''
                }

            </div>
        </div>
    )
}
