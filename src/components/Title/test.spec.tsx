import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('should render the children', () => {
    const { container } = render(<Title>Testando...</Title>)

    expect(
      screen.getByRole('heading', { name: /testando/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the font size correctly', () => {
    const { container } = render(<Title>Testando...</Title>)

    expect(container.firstChild).toHaveStyle({ 'font-size': '3rem' })
  })
})
