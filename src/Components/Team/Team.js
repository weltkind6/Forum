import React from 'react'
import styles from './Team.module.css'
import {addNewUser} from "../../Redux/state";


const Team = (props) => {
    debugger
    const teamLineUp = props.team.map((item) => <div key={item.id}>{item.name}</div>)
    const getNewUser = React.createRef()

    const addUser = () => {
        const text = getNewUser.current.value
        addNewUser(text)
    }

    return (
        <div>
            <div>{teamLineUp}</div>
            <div>
                <textarea value={props.newForumUser} ref={getNewUser}/>
                <button onClick={addUser}>ADD</button>
            </div>
        </div>
    )
}


export default Team