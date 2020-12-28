import React from 'react'
import styles from './Team.module.css'

/*
const Team = (props) => {
    const teamLineUp = props.team.map((item)=> <div key={item.id}>{item.name}</div>)
    return (
        <div>{teamLineUp}</div>
    )
}*/


class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Alex'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            name: 'Ilay'
        })
    }

    render() {
        const addNewTeamer = React.createRef()
        const teamLineUp = this.props.team.map((item) => <div key={item.id}>{item.name}</div>)

        return (
            <div>
                <div>{teamLineUp}</div>
                <div>
                    <h3>{this.state.name}</h3>
                    <textarea value='Got it!' ref={addNewTeamer}/>
                    <button onClick={this.handleClick}>Add teammate!</button>
                </div>
            </div>
        )
    }
}

export default Team