import {useEffect, useState} from 'react'

const data: number[] = (function (length: number): any[] {
  let list: any[] = []
  for (let i = 0; i < length; i++) {
    list.push(i)
  }
  return list
})(2000)

let size = 20
export function useList(value: number) {
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [list, setList] = useState<number[]>([])
    console.log(value);
    
  useEffect(() => {
    // setList([])
  }, [value])

  function fetchData() {
    console.log('start loading data')

    setLoading(true)
    setError(false)
    new Promise<number[]>((res, rej) => {
      res(data.slice(value * size, (value + 1) * size))
    }).then((res) => {
      console.log(res)
      setTimeout(() => {
        setList((prev) => {
          return [...new Set([...prev, ...res])]
        })
        setLoading(false)
      }, 1000)
    })
  }

  useEffect(() => {
    fetchData()
  }, [value])
  return {
    hasMore,
    loading,
    error,
    list,
  }
}
