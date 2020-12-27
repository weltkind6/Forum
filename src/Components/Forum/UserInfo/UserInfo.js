import  React from  'react'
import Avatar from "../Avatar/Avatar";


const UserInfo = (props) => {
    let ava = props.uzer.map(a => <Avatar info={a.avatarUrl} alt={a.name}/>)
    //Вообщем тут при мар пропсы в info и все такое не нужны.
    return (
        <div className="UserInfo">
            {ava}
            <div className="UserInfo-name">
                {props.uzer.map(n => <div>{n.name}</div>)}
            </div>
        </div>
    )

}

export default UserInfo