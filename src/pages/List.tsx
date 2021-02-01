import React, {FC, useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import Button from '../components/button'
import {useList} from '../hooks/useList'

import './list.css'
const btn: React.CSSProperties = {
  marginTop: 50,
  height: 48,
  borderRadius: 5,
  width: '100%',
  backgroundColor: '#13C2C2',
  border: 0,
  color: '#fff',
  fontSize: 18,
  textAlign: 'center',
  outline: 'none',
}

interface ListProps {
  initialSize: number
  size: number
  loadingAnimation: React.ReactNode
}
const SliderLoadList: FC<Partial<ListProps>> = () => {
  const [value, setValue] = useState(0)
  const {hasMore, loading, list, error} = useList(+value, 10)

  const observer = useRef<any>()
  const lastItemRef = useCallback(
    (node: any) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setValue((val) => val + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  return (
    <div>
      <header
        style={{
          background: 'RED',
          height: 80,
        }}>
        list information
      </header>
      <input type="text" value={value} onChange={(e: any) => setValue(e.target.value)} />
      <button onClick={() => setValue((value) => value + 1)}>+</button>
      <article>
        {list.map((i: any, index: number, arr) => {
          if (arr.length - 1 === index) {
            return (
              <div key={index} className={'item'} ref={lastItemRef}>
                <Button value={i} style={btn} />
              </div>
            )
          } else {
            return (
              <div key={index} className={'item'}>
                <Button value={i} style={btn} />
              </div>
            )
          }
        })}
      </article>
      <div>{loading && 'loading'}</div>
      <div>{error && 'error'}</div>
      <footer
        style={{
          background: 'RED',
          height: 80,
        }}>
        footer information
      </footer>
    </div>
  )
}
export default SliderLoadList
