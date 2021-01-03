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
    getShowBikes = () => {
        this.setState({
            showBikes: !this.state.showBikes
        })
    }
    onChangeName = (name, id) => {
        const bike = this.state.bikes[id]
        bike.model = name
        const bikes = [...this.state.bikes]
        bikes[id] = bike
        this.setState({bikes})
    }

    onDelete = (id) => {
        const bikes = [...this.state.bikes]
        bikes.splice(id, 1)
        this.setState({bikes})
    }

    // Нашли нужный байк который надо изменить
    // Изменяем model на новые имя.
    // Скопировали state
    // Обратились к новому массиву по id и сказали что он будет === новому байку.
    // setState


    render() {
        return (
            <div>
                <div><h4>{this.state.pageTitle}</h4></div>
                <button onClick={this.getShowBikes}>Show</button>
                <div>
                    {this.state.showBikes === true ?
                        this.state.bikes.map((b, id) =>
                            <Bikes model={b.model} year={b.year} key={id}
                                   onChangeName={(e) => this.onChangeName(e.target.value, id)
                                   }
                                   onDelete={() => this.onDelete(id)}/>) : null
                    }
                </div>
            </div>
        );

    }
}


export default Users