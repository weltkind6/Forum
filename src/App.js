import './App.css';
import {Route} from "react-router-dom";
import React from 'react'
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Forum from "./Components/Forum/Forum";
import Team from "./Components/Team/Team";
import Users from "./Components/Users/Users";
import RulesContainer from "./Components/Rules/RulesContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='main-content'>
                <Route path='/news' render={() => <News news={props.state.dataFromBook}/>}/>
                <Route path='/forum'
                       render={() => <Forum data={props.state.comment} addNewPost={props.addNewPost} newPostText={props.state.newPostText}/>}/>
                <Route path='/team' render={() => <Team team={props.state.forumsTeam} newForumUser={props.state.newForumUser}/>}/>
                <Route path='/rules' render={() => <RulesContainer rules={props.state.rules} state={props.state.dataFromBook}/>}/>
                <Route path='/users' render={() => <Users/>}/>
            </div>
        </div>
    )
}

export default App;
// In map method you should use a key value (of existing id ofc)

//git config core.autocrlf true
