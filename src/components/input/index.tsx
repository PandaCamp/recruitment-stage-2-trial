import React, {FC} from 'react'

interface InputProps {
  value?: string
  style?: React.CSSProperties
}
const Input: FC<InputProps> = (props) => <input {...props} value={props.value ?? ''} />
export default Input
