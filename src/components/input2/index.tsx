import type {FC} from 'react'
import {TemplateLiteral} from 'typescript'

import './style.scss'
export const C = <T extends TemplateStringsArray | string, T2 extends TemplateStringsArray | string>(prefix: T) => (
  affix: T2
) => `${prefix}${affix}`

const c = C`xxx`
const c2 = C(c`__wrap`)
const c3 = C(c2`__box`)
const c4 = C(c3`__input`)

interface InputProps {
  /* 文本值 */
  value?: string
  style?: React.CSSProperties
  /**50%透明度的特效 */
  disable?: boolean
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className={c2``}>
      <div className={c3``}>
        <input type="text" className={c4``} />1
      </div>
      <div className={c2`__polishing`}> </div>
    </div>
  )
}

export default Input

function a<T extends string>(a: T) {
  return function b<T2 extends string>(b: T2) {
    return `${a}${b}` as `${T}${T2}`
  }
}

let a1 = a('xxx')

let a2 = a(a1('__wrap'))

let a3 = a(a2('__'))
