import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react'
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
  const {hasMore, loading, list, error} = useList(+value)
  console.log(list)

  return (
    <div
      onScroll={(e) => {
        console.log(e)
      }}>
      <header
        style={{
          background: 'RED',
          height: 80,
        }}>
        list information
      </header>
      <input type="text" value={value} onChange={(e: any) => setValue(e.target.value)} />
      <article>
        {list.map((i: any, index: number) => (
          <div key={index} className={'item'}>
            <Button value={i} style={btn} />
          </div>
        ))}
      </article>
      <div>{loading && 'loading'}</div>
      <div>{error && 'error'}</div>
    </div>
  )
}
export default SliderLoadList
