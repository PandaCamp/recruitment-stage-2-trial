import React, {FC} from 'react'
import './styles.css'
interface InputProps {
  value?: string
  style?: React.CSSProperties
  placeholder?: string
}



const Input: FC<InputProps> = (props) => {
  return <input placeholder={props.placeholder ?? '请填写'} {...props} value={props.value ?? ''} />
}
export default Input
