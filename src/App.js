import './App.css';
import React from 'react'
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='main-content'>
                Main
            </div>
        </div>
    )
}

export default App;
