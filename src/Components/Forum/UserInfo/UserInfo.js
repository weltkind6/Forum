import  React from  'react'
import Avatar from "../Avatar/Avatar";

const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <Avatar info={props.uzer.avatarUrl} alt={props.uzer.name}/>
            <div className="UserInfo-name">
                {props.uzer.name}
            </div>
        </div>
    )

}

export default UserInfo