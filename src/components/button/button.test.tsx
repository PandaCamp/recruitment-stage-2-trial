import React from 'react'
import ReactDOM from 'react-dom'
import Button from '.'

it('rende', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button value="123" />, div)
})
