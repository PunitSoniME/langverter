import { AppCopyIcon } from '@/icons'
import React from 'react'
import { Button } from './ui/button'
import { useCopyToClipboard } from 'react-helper-hooks'
import { toast } from 'sonner';

export default function CopyToClipboardButton({ text, message = '' }) {

    const copyToClipboard = useCopyToClipboard();

    return (
        <Button
            title="Copy"
            variant='ghost'
            size="icon"
            onClick={() => {
                copyToClipboard(text).then(() => {
                    toast.success(message || 'Translation copied');
                }).catch((error) => {
                    toast.error(error.message);
                });
            }}
        >
            <AppCopyIcon className='w-4 h-4' />
        </Button>
    )
}
