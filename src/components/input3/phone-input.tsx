import React from 'react'
import {Input} from '.'

const phoneRegion: React.CSSProperties = {
  fontSize: 18,
  color: '#424242',
  fontWeight: 400,
}
const line: React.CSSProperties = {
  width: 2,
  background: `#D9D9D9`,
  height: 16,
  display: 'inline-block',
  marginLeft: 10,
  marginRight: 10,
}

export default function PhoneInput() {
  return (
    <Input
      type="group"
      style={{display: 'flex'}}
      prefix={
        <>
          <span style={phoneRegion}>+86</span>
          <i style={line}></i>
        </>
      }
    />
  )
}


// calc(100% - 10px - 77px)