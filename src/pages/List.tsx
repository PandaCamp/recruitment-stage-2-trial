import React, {FC, useEffect, useState} from 'react'
import Button from '../components/button'
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
const data = (function (length: number): any[] {
  let list: any[] = []
  for (let i = 0; i < length; i++) {
    list.push(i)
  }
  return list
})(100)
interface ListProps {
  initialSize: number
  size: number
  loadingAnimation: React.ReactNode
}
const SliderLoadList: FC<Partial<ListProps>> = () => {
  const [loading, setLoading] = useState(true)
  async function fetchData() {
    return true
  }
  useEffect(() => {
    if (loading === true) {
      console.log(1)
    }
  }, [])
  return (
    <div>
      <header>list information</header>
      <article>
        {' '}
        {data.map((i) => (
          <Button value={i} style={btn} />
        ))}
      </article>
    </div>
  )
}
export default SliderLoadList
