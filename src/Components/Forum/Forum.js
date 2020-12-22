import React from 'react'
import styles from './Forum.module.css'

function formatDate(date) {
    return date.toLocaleDateString();
}

const Forum = (props) => {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.user.avatarUrl}
                     alt={props.user.name}
                />
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
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