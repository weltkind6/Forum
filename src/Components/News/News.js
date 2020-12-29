import React from 'react'
import styles from './News.module.css'
import {onAddNews, onNewsChange} from "../../Redux/state";

const News = (props) => {
    const getNews = props.news.map((n) => <div key={n.id}>{n.title} - {n.author} - {n.url}</div>)
    const gotNews = props.news2.map(n => <div>{n.gnew}</div>)

    const getNewNews = React.createRef()

    const addNew = () => {
        const text = getNewNews.current.value
        onAddNews(text)
    }
    const changeNews = () => {
        const text = getNewNews.current.value
        onNewsChange(text)
    }
    return (
        <div>
            <div>{getNews}</div>
            <div>{gotNews}</div>
            <div>
                <textarea ref={getNewNews} value={props.gotNewNews} onChange={changeNews}/>
                <button onClick={addNew}>Push</button>
            </div>
        </div>
    )
}

export default News