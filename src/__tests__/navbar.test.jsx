import React from 'react'
import Navbar from '../components/navbar'
import { render } from '@testing-library/react'

test('navbar renders', () => {
  const { getByTestId } = render(<Navbar />)
  const header = getByTestId('header')

  expect(header)
})

