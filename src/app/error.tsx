'use client'

import { Button } from "@/components/ui/button";
import { Large, Muted } from "@/components/ui/typography";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="bg-primary-foreground container min-h-screen flex items-center flex-col justify-center gap-5">
            <div className="text-8xl">500</div>

            <Large>Something bad just happened...</Large>

            <Muted>
                Try refreshing the page.
            </Muted>

            <div className="flex justify-center">
                <Button asChild>
                    <Link href={window.location.origin}>
                        Go back to home page
                    </Link>
                </Button>
            </div>
        </div>
    )
}