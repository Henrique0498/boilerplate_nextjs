import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { PropsWithChildren } from 'react'

import '@styles/globals.css'
import StyledComponentsRegistry from '@lib/registry'
import { Providers } from './providers'

const roboto = Roboto({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'Layout NextJS',
  description: 'Um layout de next'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
