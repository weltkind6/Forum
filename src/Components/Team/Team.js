import React from 'react'
import styles from './Team.module.css'

const Team = (props) => {
    const teamLineUp = props.team.map((item)=> <div key={item.id}>{item.name}</div>)
    return (
        <div>{teamLineUp}</div>
    )
}

export default Team