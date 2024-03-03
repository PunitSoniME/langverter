'use client'

import { cn } from "@/lib/utils";

type TypographyType = {
    className?: string;
    children: React.ReactNode;
}

export function Blockquote({ className, children }: TypographyType) {
    return (
        <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
            {children}
        </blockquote>
    )
}

export function H3({ className, children }: TypographyType) {
    return (
        <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
            {children}
        </h3>
    )
}

export function Large({ className, children }: TypographyType) {
    return (
        <div className={cn('text-lg font-semibold', className)}>
            {children}
        </div>
    )
}

export function Lead({ className, children }: TypographyType) {
    return (
        <p className={cn('text-xl text-muted-foreground', className)}>
            {children}
        </p>
    )
}

export function Muted({ className, children }: TypographyType) {
    return (
        <p className={cn('text-sm text-muted-foreground', className)}>
            {children}
        </p>
    )
}

export function P({ className, children }: TypographyType) {
    return (
        <p className={cn('leading-7', className)}>
            {children}
        </p>
    )
}

export function Small({ className, children }: TypographyType) {
    return (
        <small className={cn('text-sm font-medium leading-none', className)}>
            {children}
        </small>
    )
}