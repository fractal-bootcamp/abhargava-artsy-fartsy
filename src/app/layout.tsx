import '~/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '~/components/themes'
import { TRPCReactProvider } from '~/trpc/react'

export const metadata: Metadata = {
  title: 'Artsy-Fartsy Project',
  description: 'Artsy-Fartsy Project',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${GeistSans.variable}`}
        suppressHydrationWarning
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            forcedTheme="system"
            disableTransitionOnChange
          >
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
