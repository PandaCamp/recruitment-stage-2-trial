import React,{FC} from 'react'
type CSS = React.CSSProperties;
interface PopupProps {
    value?: string,
    style?: CSS
    handleEvent?: () => void
}
const popupBox: CSS = {
    zIndex: 10,
    position: 'fixed',
    width: '100%',
    padding: '0 20px', 
    left: 0,
    bottom: 50
}

const popupStyle:CSS = {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    lineHeight: '50px',
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 18,
    zIndex: 10,
    border: 0,
    outline: 'none',
}
const Popup:FC<PopupProps> = props => {
    
    return (
        <div style={{...popupBox, ...props.style}}>
            <button onClick={props.handleEvent} style={popupStyle}>{props.value}</button>
        </div>
    )
}

export default Popup
