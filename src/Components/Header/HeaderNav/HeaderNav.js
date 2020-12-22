import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const HeaderNav = (props) => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav_item}><NavLink className={styles.item} to='/news'>News</NavLink></div>
            <div className={styles.nav_item}><NavLink className={styles.item} to='/forum'>Forum</NavLink></div>
            <div className={styles.nav_item}><NavLink className={styles.item} to='/team'>Team</NavLink></div>
            <div className={styles.nav_item}><NavLink className={styles.item} to='/rules'>Rules</NavLink></div>
            <div className={styles.nav_item}><NavLink className={styles.item} to='/users'>Users</NavLink></div>
        </div>
    )
}

export default HeaderNav