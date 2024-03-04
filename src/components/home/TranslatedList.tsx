'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import CopyToClipboardButton from '../CopyToClipboardButton'

export default function TranslatedList({ translations }) {
    return (
        <Table id="translations">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[150px]">Language</TableHead>
                    <TableHead>Translation</TableHead>
                    <TableHead className="w-[50px] text-right"></TableHead>
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
                            <TableCell>
                                <CopyToClipboardButton
                                    text={m.translation}
                                    message={`${m.language} translation copied`}
                                />
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
