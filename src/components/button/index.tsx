import type {FC} from 'react'

interface InputProps {
  /* 文本值 */
  value?: string
  style?: React.CSSProperties
  /**50%透明度的特效 */
  disable?: boolean
}

const Button: FC<InputProps> = (props) => {
  const {style = {}, disable = false, value = '登录'} = props

  return (
    <button {...props} style={{...style, opacity: disable ? '0.5' : '1'}}>
      {value}
    </button>
  )
}

export default Button
