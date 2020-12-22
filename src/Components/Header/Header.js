import React from 'react'
import styles from './Header.module.css'
import HeaderNav from "./HeaderNav/HeaderNav";


const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div>Header</div>
            <HeaderNav />
        </div>
    )
}

export default Header