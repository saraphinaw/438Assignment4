import {useState} from 'react'
import { AiOutlineSend } from "react-icons/ai";
function TextInput(props) {
    const [text, setText] = useState('')

    function sendMessage(){
        if(text==='') return //skip the function if blank text
        props.send(text)
        setText('')
    }

    function keyPressed(e){
        if(e.key === 'Enter'){
            sendMessage()
        }
    }
    return <footer className="text-input">
        
        <input className="input"
          value={text}
          onChange={e=> setText(e.target.value)}
          onKeyPress={keyPressed}
        /> 
        <button className="button" disabled={!text} onClick={sendMessage}>
          <AiOutlineSend title="send" 
            style={{minWidth:'0.7rem',marginLeft:2}} 
          />

        </button>
        
    
    </footer>
}

export default TextInput