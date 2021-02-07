import type {FC} from 'react'
import './style.scss'

const Chain = (prefix: TemplateStringsArray | string) => (affix: TemplateStringsArray | string) =>
  ((prefix as unknown) as string) + ((affix as unknown) as string)
const p = Chain`xxx`
const p2 = Chain(p`__wrap`)
const p3 = Chain(p2`__box`)

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
      <div className={p3``}>
        <input type="text" className={p3`__input`} />1
      </div>
      <div className={p`__wrap__polishing`}> </div>
    </div>
  )
}

export default Input
