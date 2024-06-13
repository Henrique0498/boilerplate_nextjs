import { PropsWithChildren } from 'react'

import GlobalStyles from '@styles/global'
import StyledComponentsRegistry from '@lib/registry'

export function Providers({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {children}
    </StyledComponentsRegistry>
  )
}
