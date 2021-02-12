import React from 'react'
import ReactDOM from 'react-dom'
import Button from '.'

import {render} from '@testing-library/react'
import renderer from 'react-test-renderer'

it('rende', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button value="123" />, div)
})

it('render button correctly', () => {
  const {getByTestId} = render(<Button value="123" />)
  expect(getByTestId('button')).toHaveTextContent('123')
})

it('match snapshot 1', () => {
  const tree = renderer.create(<Button value="~~~" />).toJSON()
  expect(tree).toMatchSnapshot()
})
