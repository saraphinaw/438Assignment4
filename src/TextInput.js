import {useState} from 'react'
<head><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"></link>
</head>
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
        <button className="button" disabled={!text} onClick={sendMessage}> ↑
        </button>
        
    
    </footer>
}

export default TextInput