import React from 'react'
import { useHighlight } from '../hooks/useHighlight'
 

const names = ['mary', 'jorg', 'max well']

export default () => {
  const {higtlightText, setHighlightText} = useHighlight('')
  return (
    <div>
      <input
        type="text"
        value={higtlightText}
        onChange={(e) => {
          setHighlightText(e.target.value)
        }}
      />
      <ul>
        {names.map((item) => {
          if (item.includes(higtlightText)) {
            console.log(item, higtlightText)

            return <p>123</p>
          }
          return <p>{item}</p>
        })}
      </ul>
    </div>
  )
}
