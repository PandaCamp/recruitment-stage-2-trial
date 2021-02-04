import {useEffect, useState} from 'react'

export function useHighlight(value: string) {
  const [higtlightText, setHighlightText] = useState(value)

  return {
    higtlightText,
    setHighlightText,
  }
}
