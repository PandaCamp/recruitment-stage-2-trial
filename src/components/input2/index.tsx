import type {FC} from 'react'
import './style.scss'

const createCSSPrefix = (prefix: string) => (affix: TemplateStringsArray) => prefix + affix
const p = createCSSPrefix('xxx')
const p2 = createCSSPrefix(p`__wrap`)
const p3 = createCSSPrefix(p2`__box`)

interface InputProps {
  /* 文本值 */
  value?: string
  style?: React.CSSProperties
  /**50%透明度的特效 */
  disable?: boolean
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className={p2``}>
      <div className={p2`__box`}>
        <input type="text" className={p3`__input`} />1
      </div>
      <div className={p`__wrap__polishing`}> </div>
    </div>
  )
}

export default Input
