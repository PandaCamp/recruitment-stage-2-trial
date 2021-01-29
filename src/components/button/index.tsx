import type {FC} from 'react'

interface InputProps {
  value?: string
  style?: React.CSSProperties
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
