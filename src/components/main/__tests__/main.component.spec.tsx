import React from 'react'
import { render, screen } from '@testing-library/react'
import { Main } from '..'

describe('<Main />', () => {
  it('it renders the heading correctly', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveClass('bg-blue-400')
  })
})
