import {FC} from 'react'
import './Dialog.scss'

interface DialogProps {
    title?: string       // 标题
    textInfo?: string // 弹窗的文本信息
    cancleDialog?: () => void // 取消弹窗事件
    height?: number|string  // 对话框高度
}

const Dialog: FC<DialogProps> = props => {
    return (
        <div className="dialogContainer" style={{height: props.height}}>
            <header>
                <span onClick={props.cancleDialog} className="close">X</span>
            </header>
            <div>
                <p className="tipTitle">{props.title}</p>
                <p>{props.textInfo}</p>
            </div>
            
        </div>
    )
}

export default Dialog