import React from 'react'
import UserInfo from "./UserInfo/UserInfo";
import {onNewPostChange} from "../../Redux/state";


/*
function formatDate(date) {
    return date.toLocaleDateString();
}
*/

const Forum = (props) => {
    const newPostText = React.createRef()
    const onKeyDown = (e) => {
        if(e.code === 'Enter') {
            addPost()
        }
    }
    const addPost = () => {
        let text = newPostText.current.value
        props.addNewPost(text)
    }
    const onPostChange = () => {
        let text = newPostText.current.value
        onNewPostChange(text)
    }
    return (
        <div>
            <Comment ifnoData={props.data} userData={props.data}/>
            <div>
                <div><textarea ref={newPostText} onKeyDown={onKeyDown} value={props.newPostText} onChange={onPostChange}/></div>
                <div><button onClick={addPost} >Got it!</button></div>
            </div>
        </div>
    )

}

const Comment = (props) => {
    return (
        <div className="Comment">
            <UserInfo uzer={props.userData}/>
            <div className="Comment-text">
                {props.ifnoData.map(t => <div>{t.text}</div>)}
            </div>
            {/*<div className="Comment-date">
                {formatDate(props.ifnoData.date)}
            </div>*/}
        </div>
    )
}

export default Forum