'use client'

import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

export default function InputToTranslate({ text, onChange }) {
    return (
        <div>
            <Label>Enter text to translate</Label>
            <Textarea
                value={text}
                className='w-full'
                onChange={onChange}
            />
        </div>
    )
}
