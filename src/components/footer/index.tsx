import { AppGithubIcon, AppLinkedinIcon, AppTwitterXIcon } from '@/icons'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Large } from '../ui/typography'

export default function Footer() {
    return (
        <div className="flex flex-col gap-5 items-center py-8 px-2 bg-primary-foreground border-t mt-3">
            <Large className='text-primary text-md'>Made by Punit Soni</Large>

            <div className="flex gap-0">
                <Button asChild variant="link">
                    <Link href='https://twitter.com/punitsonime' target='_blank'>
                        <AppTwitterXIcon className="h-5 w-5"></AppTwitterXIcon>
                    </Link>
                </Button>

                <Button asChild variant="link">
                    <Link href='https://linkedin.com/in/punitsonime' target='_blank'>
                        <AppLinkedinIcon className="h-5 w-5"></AppLinkedinIcon>
                    </Link>
                </Button>

                <Button asChild variant="link">
                    <Link href='https://github.com/punitsonime' target='_blank'>
                        <AppGithubIcon className="h-5 w-5"></AppGithubIcon>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
