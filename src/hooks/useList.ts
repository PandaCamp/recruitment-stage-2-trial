import {useEffect, useState} from 'react'

const data: number[] = (function (length: number): any[] {
  let list: any[] = []
  for (let i = 0; i < length; i++) {
    list.push(i)
  }
  return list
})(2000)
let index = 0
let size = 20
export function useList() {
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [list, setList] = useState<number[]>([])

  useEffect(() => {
    setLoading(true)
    setError(false)
    new Promise<number[]>((res, rej) => {
      res(data.slice(index * size, (index + 1) * size))
      index++
    }).then((res) => {
      console.log(res)
      setTimeout(() => {
        setList((prev) => {
          return [...new Set([...prev, ...res])]
        })
        setLoading(false)
      }, 1000)
    })
  }, [])
  return {
    hasMore,
    loading,
    error,
    list,
  }
}
