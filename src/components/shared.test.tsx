import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Title } from './sharedstyles'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3'
  }
}

describe('Teste', () => {
  it('Render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Title>Teste</Title>
      </ThemeProvider>
    )
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
