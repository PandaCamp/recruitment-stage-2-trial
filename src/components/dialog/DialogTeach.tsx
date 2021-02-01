import {FC} from 'react'
import './Dialog.scss'

interface DialogProps {
    title?: string       // 标题
    textInfo?: string // 弹窗的文本信息
    cancleDialog?: () => void // 取消弹窗事件
    height?: number|string  // 对话框高度
}

const DialogTeach: FC<DialogProps> = props => {
    
    return (
        <div className="dialogContainer" style={{height: props.height??220}}>
            <header>
                <span onClick={props.cancleDialog} className="close">X</span>
            </header>
            {/* 标题 */}
            <div>
                <p className="tipTitle">{props.title}</p>
            </div>
            {/* 内容区域 */}
            <div className="content">
                <h4 style={{marginBottom: 10}}>一、推荐码是什么</h4>
                <p style={{color: "#595959",marginBottom: 20}}>推荐码是企业内部员工认证身份成功后生成的专属号码。推荐码中带有认证员工的认证信息，求职者使用推荐码投递职位成功后，将给您记录推荐奖励。</p>
                <h4 style={{marginBottom: 10}}>二、推荐码有效期为多久</h4>
                <p style={{color: "#595959",marginBottom: 20}}>1. 推荐码有效期时长由企业统一设置，最短时长为1个月，最长可不限制有效时长。<br/><br/>
2. 推荐码有效期到期后，不会自动刷新，需要手动刷新生成新的推荐码。</p>
                <h4 style={{marginBottom: 10}}>三、推荐码如何使用</h4>
                <p style={{color: "#595959",marginBottom: 20}}>1. 推荐码功能由企业后台统一设置是否使用；<br/><br/>2. 如企业设置了推荐码功能，您在推荐平台认证身份成功后，将生成您的专属推荐码；
                <br/><br/>3. 您可在推荐平台个人中心复制推荐码，分享至其他推广渠道（微信朋友圈、贴吧等）；
                <br/><br/>4. 求职者可使用您的推荐码在本企业招聘官网投递职位时使用，投递成功将算作您推荐求职者推荐成功。
                <br/><br/>5. 推荐成功后将根据企业配置的奖励规则给您记录推荐奖励；</p>
            </div>
        </div>
    )
}

export default DialogTeach