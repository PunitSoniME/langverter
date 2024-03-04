import type { Metadata } from "next";
import { useProvidersTree } from 'react-helper-hooks';
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import DarkModeProvider from "@/providers/DarkModeProvider";
import { Sheet } from "@/components/ui/sheet";
import dynamic from "next/dynamic";
import { TooltipProvider } from "@/components/ui/tooltip";
import { appName } from "@/helpers/client/utils";
import { Toaster } from "@/components/ui/sonner"
import { ConfirmationDialogProvider } from "@/providers/ConfirmationDialogProvider";

import "./globals.css";

const Header = dynamic(() => import("@/components/header"));

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: appName,
  description: "AI powered language converter",
  manifest: "/manifest.json",
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/dark-favicon.svg?v=1',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/light-favicon.svg?v=1',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const buildProvidersTree = useProvidersTree();
  const ProvidersTree = buildProvidersTree([
    [TooltipProvider, { delayDuration: 0 }],
    [DarkModeProvider],
    [ConfirmationDialogProvider],
  ]);

  return (
    <html lang="en" id="app-id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ProvidersTree>
          <Sheet>
            <div className="flex flex-col">

              <Header />

              <div>
                {children}
              </div>

              <Toaster richColors />

            </div>

          </Sheet>
        </ProvidersTree>
      </body>
    </html>
  );
}
