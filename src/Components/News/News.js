import React from 'react'
import styles from './News.module.css'

const News = (props) => {
    const getNew = props.news.map((n) => <div key={n.id}>{n.title} - {n.author} - {n.url}</div>)
    return (
        <div>{getNew}</div>
    )
}

export default News