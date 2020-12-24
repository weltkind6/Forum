import React from 'react'
import styles from './Sidebar.module.css'
import Clock from "./Clock/Clock";


const Sidebar = (props) => {
    return (
        <div className={styles.wrapper}>Sidebar here!
            <Clock/>
        </div>
    )
}

export default Sidebar