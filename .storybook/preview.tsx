import type { Preview } from '@storybook/react'
import React from 'react'

import GlobalStyles from '../src/styles/global'
import '../src/styles/global.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  tags: ['autodocs']
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

export default preview
