import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('should render the children', () => {
    render(<Title>Testando...</Title>)

    expect(
      screen.getByRole('heading', { name: /testando/i })
    ).toBeInTheDocument()
  })
})
