import  React from  'react'


const Avatar = (props) => {
    return (
        <img className="Avatar"
             src={props.info}
             alt={props.alt}
        />
    )
}

export default Avatar