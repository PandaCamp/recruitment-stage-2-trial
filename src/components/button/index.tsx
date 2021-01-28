import type {FC} from 'react'

interface InputProps {
  value?: string
}

const Button: FC<InputProps> = (props) => {
  return <button>{props.value ?? '确认'}</button>
}

export default Button
