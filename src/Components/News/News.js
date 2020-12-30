import React from 'react'
import styles from './News.module.css'
import {onAddNews, onNewsChange} from "../../Redux/state";

const News = (props) => {
    const getNews = props.news.map((n) => <div key={n.id}>{n.title} - {n.author} - {n.url}</div>)
    const gotNews = props.news2.map(n => <div>{n.gnew}</div>)

    const addNew = () => {
        onAddNews()
    }
    const changeNews = (e) => {
        const text = e.target.value
        onNewsChange(text)
    }
    return (
        <div>
            <div>{getNews}</div>
            <div>{gotNews}</div>
            <div>
                <textarea value={props.gotNewNews} onChange={changeNews}/>
                <button onClick={addNew}>Push</button>
            </div>
        </div>
    )
}

export default News