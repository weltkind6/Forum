import React from 'react'
import UserInfo from "./UserInfo/UserInfo";

function formatDate(date) {
    return date.toLocaleDateString();
}

const Forum = (props) => {
    return (
        <div className="Comment">
            <UserInfo uzer={props.user}/>
            <div className="Comment-text">
                {props.data.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.data.date)}
            </div>
        </div>
    );
}



export default Forum