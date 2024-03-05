'use client'

import { getSupportedSourceLanguages, } from '@/helpers/server/utils'
import React from 'react'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const languages = getSupportedSourceLanguages();

export default function SourceLanguage({ defaultValue, onLanguageChange }) {
    return (
        <div>
            <Label>Select source language</Label>
            <Select
                defaultValue={defaultValue}
                onValueChange={(selected) => {
                    onLanguageChange(selected);
                }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select source language" />
                </SelectTrigger>
                <SelectContent className="h-[250px]">
                    <SelectGroup>
                        {
                            languages.map((m) => (
                                <SelectItem key={m.code} value={m.code}>
                                    {m.language}
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
