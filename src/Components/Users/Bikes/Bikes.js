import React from 'react'
import styles from "../Users.module.css";


const Bikes = (props) => {
    return (
        <div className={styles.bike_wrapper}>
            <div>Bike model: <strong>{props.model}</strong>. Year: {props.year}</div>
            <button onClick={props.onDelete}>Delete</button>
            <input type="text" onChange={props.onChangeName}/>
        </div>
    )
}

export default Bikes