import './App.css';
import {Route} from "react-router-dom";
import React from 'react'
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Forum from "./Components/Forum/Forum";
import Team from "./Components/Team/Team";
import Rules from "./Components/Rules/Rules";
import Users from "./Components/Users/Users";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='main-content'>
                <Route path='/news' render={() => <News news={props.state.dataFromBook}/>}/>
                <Route path='/forum'
                       render={() => <Forum data={props.state.comment} user={props.state.comment.author}/>}/>
                <Route path='/team' render={() => <Team team={props.state.forumsTeam}/>}/>
                <Route path='/rules' render={() => <Rules/>}/>
                <Route path='/users' render={() => <Users/>}/>
            </div>
        </div>
    )
}

export default App;
// In map method you should use a key value (of existing id ofc)

//git config core.autocrlf true
