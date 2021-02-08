import {useState} from 'react'
import { AiOutlineEdit } from "react-icons/ai";

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState( localStorage.getItem('username') || 'Username')

    function save(){
        props.saveName(username)
        setShowInput(false)
        localStorage.setItem('username', username)
    }
    function keyPressed(e){
        if(e.key === 'Enter'){
            save()
        }
    }

    if (showInput) {
        return <div className="name-picker">
            <input className ='name-input' value={username}
                onChange={e=> setUsername(e.target.value)}
                onKeyPress={keyPressed}
            />
            <button className="save-button" onClick={save}>Save</button>
            
        </div>
    }

    return <div className="name-picker">
        <div className="username"> {username}</div>
        <button className="edit-button" onClick={()=> setShowInput(true)}>
            <AiOutlineEdit 
            style={{minWidth:'1rem'}} size={20}
          />
        </button>
    </div>
}

export default NamePicker
