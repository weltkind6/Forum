import React from 'react'
import styles from './Team.module.css'
import {addNewUser, onNewUserAdd} from "../../Redux/state";


const Team = (props) => {
    const teamLineUp = props.team.map((item) => <div key={item.id}>{item.name}</div>)
    //const getNewUser = React.createRef()

    const addUser = () => {
        addNewUser()
    }
    const onNewUserChange = (e) => {
        const text = e.target.value
        onNewUserAdd(text)
    }
    const onKeyDown = (e) => {
        if (e.code === 'Enter') {
            addUser()
        }
    }

    return (
        <div>
            <div>{teamLineUp}</div>
            <div>
                <textarea value={props.newForumUser} onChange={onNewUserChange} onKeyDown={onKeyDown}/>
                <button onClick={addUser}>ADD</button>
            </div>
        </div>
    )
}
/*
Так же как и input, стандартный подход - передавать value/onChange и использовать управляемое значение)
При этом:
    handleChange = (event) => onChange(event.target.value);
onChange={handleChange}*/


export default Team

