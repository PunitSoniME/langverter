'use client'

import React, { useId } from 'react'
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export default function LanguageSelection({ multiple = false, supportedTranslations, selectedLanguage, onSelectionChange }) {

    const uniqueId = useId();

    return (
        <div>
            <Label>Select translation language</Label>
            <div className="flex items-center gap-3 w-full flex-wrap mt-1">
                {
                    supportedTranslations.map((m) => (
                        <div key={m.code} className='flex gap-2 items-center'>
                            <Switch
                                key={`${uniqueId}-${m.code}`}
                                id={`${uniqueId}-${m.code}`}
                                // disabled={m.code === src_lang}
                                onCheckedChange={(value) => {
                                    if (multiple) {
                                        if (value) {
                                            onSelectionChange([...selectedLanguage, m.code]);
                                        }
                                        else {
                                            onSelectionChange([...selectedLanguage.filter(f => f !== m.code)]);
                                        }
                                    } else {
                                        onSelectionChange(value);
                                    }
                                }} />
                            <Label htmlFor={`${uniqueId}-${m.code}`}>
                                {m.language}
                            </Label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
