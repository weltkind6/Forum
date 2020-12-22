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
    debugger
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='main-content'>
                <div>
                    {props.state.forumsTeam.map((i) => <div>{i.name}</div>)}
                </div>
                <div>
                    {props.state.dataFromBook.map((i) =>
                        <div>{i.title} - {i.author} - {i.urs}</div>)}
                </div>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/forum' render={() => <Forum/>}/>
                <Route path='/team' render={() => <Team/>}/>
                <Route path='/rules' render={() => <Rules/>}/>
                <Route path='/users' render={() => <Users/>}/>
            </div>
        </div>
    )
}

export default App;
// In map method you should use a key value (of existing id ofc)
