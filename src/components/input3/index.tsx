import {getPalette} from '&/theme/palette'
import {classChain as C} from '&/utils/string'
import Close from '&/assets/icon/close'
import React, {FC, useCallback, useState} from 'react'

import './style.scss'

const c = C`uxi-input`
const c2 = C(c`__wrap`)
const c3 = C(c2`__box`)
const p3 = C(c2`__polishing`)
const c4 = C(c3`__input`) as (val: TemplateStringsArray) => 'uxi__wrap__box'
const {S6} = getPalette()

enum StatePalette {
  normal,
  error,
  touch,
}
const statePalette = {
  [StatePalette.normal]: '#F5F5F5',
  [StatePalette.error]: 'red',
  [StatePalette.touch]: S6,
}

interface InputProps {
  prefix: React.ReactNode
  affix: React.ReactNode
  /* 文本值 */
  value?: string
  style?: React.CSSProperties
  /**50%透明度的特效 */
  disable: boolean
  placeholder: string
  className: string
  onValidate(e: React.ChangeEvent<HTMLInputElement>): boolean
  onClear(): void
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  type?: Type
}
type Type = 'group' | undefined

const flex: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
}
const block: React.CSSProperties = {
  display: 'block',
}
const Input: FC<Partial<InputProps>> = (props) => {
  const {
    placeholder = '',
    onValidate = (e: React.ChangeEvent<HTMLInputElement>) => true,
    onClear = () => void 0,
    disable = false,
    style = {},
    value = '',
    className = '',
    prefix = <></>,
    affix = <></>,
    type = undefined,
  } = props

  const [hasValue, setHasValue] = useState<boolean>(value.length > 0)
  const [isTouch, setIsTouch] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [polishingColor, setPolishingColor] = useState<string>(statePalette[StatePalette.normal])
  const [val, setVal] = useState(value)
  function polish() {
    setIsTouch((val) => !val)
  }
  const onFocus = useCallback(() => {
    polish()
    if (isError) setPolishingColor(statePalette[StatePalette.error])
    else setPolishingColor(statePalette[StatePalette.touch])
  }, [isError])
  const onBlur = useCallback(() => {
    polish()
    if (isError) {
      setPolishingColor(statePalette[StatePalette.error])
      return
    }
    setPolishingColor(statePalette[StatePalette.normal])
  }, [isError])

  return (
    <div className={`${c2``} ${className}`}>
      <div className={c3``} style={type === 'group' ? flex : block}>
        {prefix}
        <input
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            if (onValidate(e)) {
              setPolishingColor(statePalette[StatePalette.touch])
              setIsError(false)
            } else {
              setPolishingColor(statePalette[StatePalette.error])
              setIsError(true)
            }
            if (e.target.value.length <= 0) setHasValue(false)
            else setHasValue(true)

            setVal(e.target.value)
          }}
          type="text"
          className={c4``}
          value={val}
        />
        {hasValue && isTouch && (
          <Close
            onClick={() => {
              console.log(value)

              setVal('')
              setHasValue(false)
              setPolishingColor(statePalette[StatePalette.normal])
              onClear()
            }}
            className={c3`__close`}
            width={22}
            height={22}
          />
        )}
      </div>
      <div
        className={`${p3``} ${isTouch ? p3`--effect` : ''}`}
        style={{backgroundColor: polishingColor, height: 1}}></div>
    </div>
  )
}

export default Input
