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
