import React from 'react'
import ReactDOM from 'react-dom'
import Button from '.'

import {render} from '@testing-library/react'
it('rende', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button value="123" />, div)
})

it('render button correctly', () => {
  const {getByTestId} = render(<Button value="123" />)
  expect(getByTestId('button')).toHaveTextContent('123')
})
