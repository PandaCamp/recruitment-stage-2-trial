import React,{FC} from 'react'
interface maskProps {
    opacity?: number
}
const mask:React.CSSProperties = {
    position: "fixed",
    left: 0,
    top: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: "#000000",
    // opacity: 
    zIndex: 1
}
const Mask: FC<maskProps> = props => {
    return (
        <div style={{...mask, opacity: props.opacity ?? .5}}>   {props.children}   </div>
    )
}
export default Mask