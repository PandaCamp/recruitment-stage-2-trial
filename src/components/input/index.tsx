import React,{FC} from 'react'
// import CmpDemo from "@beisen-phoenix/demo-container"
import style from './index.module.scss'

interface InputProps {
    style?: React.CSSProperties
    clearIcon?: React.ReactNode
    field?:string // 控件的字段名称
    placeHolder?: string // 输入框的提示信息
    fieldShow?: boolean // 其它的字段是否需要展示
    errorMessage?: string // 错误信息提示
    defaultValue?: string // 默认的value值
    value?: string // 输入的value值
    disabled?: boolean // 输入框是否禁止状态
    handleDialog?: () => void // 触发手机号弹窗的事件
}

const Input: FC<InputProps> = props => {
    const {clearIcon='X'} = props
    let lineRefEle = React.useRef<HTMLDivElement>(null);
    let inputRefEle = React.useRef<HTMLInputElement>(null);
    let [flag, setFlag] = React.useState(false) // 控制按钮显示
    const handleFocus = function() :void {
        lineRefEle.current!.className = style["lineStyle"];
        setFlag(true);
    }
    const handleBlur = () :void => {
        lineRefEle.current!.className = style["line"];
        setFlag(false);
    }
    const clearInput = () :void => {
        console.log(2222);
        
        inputRefEle.current!.value = '';
    }
    return (
        <div className={style["inputItemContainer"]}>

            {props.field && <div className={style["fieldName"]}>
                {props.field}&nbsp;<span style={{color: "red"}}>{props.disabled ?? "*"}</span>
            </div>}
            <div className={style["inputBox"]}>
                {props.fieldShow && 
                <div 
                    className={style["fieldLeft"]} 
                    style={{color: props.disabled ? '#8c8c8c': ''}}
                >
                    <label>{props.disabled?'+86':"大陆手机号"}</label> 
                    <span onClick={props.handleDialog} className={style["toggleState"]}>^</span> 
                    <span className={style["splitLine"]}></span>
                </div>}
                <div className={style["inputRight"]}>             
                    <input onFocus={handleFocus}
                    onBlur={handleBlur}
                    type="text"
                    placeholder={props.placeHolder ?? "请填写"}
                    ref={inputRefEle}
                    className={style["input"]}
                    value={props.disabled ? props.defaultValue ?? '--' : props.value}
                    disabled={props.disabled}
                    
                    />
                    <div className={style["close"]} onClick={clearInput} style={{display: flag?"block":"none"}}>{clearIcon}</div>
                </div>        
            </div>
            <div ref={lineRefEle} className={props.errorMessage ? style["errorLine"] : style["line"]} ></div>
            {props.errorMessage && <div className={style["errorArea"]}>{props.errorMessage}</div>}
        </div>
    )

}

export default Input
