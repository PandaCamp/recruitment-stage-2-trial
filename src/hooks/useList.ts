import {useEffect, useState} from 'react'

const data: number[] = (function (length: number): any[] {
  let list: any[] = []
  for (let i = 0; i < length; i++) {
    list.push(i)
  }
  return list
})(100000)

export function useList(value: number, size = 1) {
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [list, setList] = useState<number[]>([])

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
      setTimeout(() => {
        setList((prev) => {
          const newList = [...new Set([...prev, ...res])]
          if (newList.length === data.length) {
            setHasMore(false)
          }
          return newList
        })
        setLoading(false)
      }, 500)
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
