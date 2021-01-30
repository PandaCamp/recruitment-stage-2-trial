import type {FC} from 'react'

interface InputProps {
  /* 文本值 */
  value?: string
  style?: React.CSSProperties
  /**50%透明度的特效 */
  disable?: boolean
}

const Button: FC<InputProps> = (props) => {
  return (
    <button {...props} style={{...props.style, opacity: props.disable ? '0.5' : '1'}}>
      {props.value ?? '确认'}
    </button>
  )
}

export default Button
