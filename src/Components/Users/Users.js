import React from 'react'
import styles from './Users.module.css'
import Bikes from "./Bikes/Bikes";

class Users extends React.Component {
    state = {
        bikes: [
            {model: 'Kawasaki', year: '2017', id: 1},
            {model: 'Yamaha', year: '2018', id: 2},
            {model: 'Honda', year: '2019', id: 3},
            {model: 'Suzuki', year: '2020', id: 4},
        ],
        pageTitle: 'A happy new Year! Plz change your present!',
        newBike: '',
        showBikes: false

    }

    changeTitle = () => {
        this.setState({
            showBikes: !this.state.showBikes
        })
    }
    onChangeInput = (e) => {
        console.log(e.target.value)
    }
    onChangeTitle = () => {
        this.setState({
            pageTitle: 'It comes and i wish i will be very productive.)'
        })
    }
    onChangeName = () => {
        this.setState({

        })
    }

    render() {
        return (
            <div>
                <div><h4>{this.state.pageTitle}</h4></div>
                <button onClick={this.changeTitle}>Show</button>
                <button onClick={this.onChangeTitle}>Change</button>
                <div>
                    {
                        this.state.showBikes === true ?
                            this.state.bikes.map((b) => <Bikes model={b.model} year={b.year} key={b.id}/>)
                            : null
                    }
                </div>
            </div>
        );

    }
}


export default Users