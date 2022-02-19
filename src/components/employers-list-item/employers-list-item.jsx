// Каждый отдельный сотрудник который у нас будет находится в приложении. Под него будет каждый отдельный компонент

import { Component } from 'react';
import './employers-list-item.css';

class EmployerListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rise: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onRise = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    }

    /* Мы в employers-list-item создаем функцию onDelete и можем ее здесь уже использовать. onDelete - эта та фция (тот проперти), который
мы передавали ниже по иерархии. Теперь функция onDelete будет здесь работать, это значит что кнопки буду связанны на разных уровнях, те
из корневого элемента const EmployersList на другой странице мы можем прокинуть проперти с фцией onDelete={() => }.
    И если это работает между двумя этими компонентами то мы можем тоже самое сделать в app.jsx */
    render() {
        const {name, salary, onDelete} = this.props
        const {increase, rise} = this.state; 

        let classNames = "list-group-item d-flex justify-content-between"
        if (increase) {
            classNames += ' increase'
        }
        if (rise) {
            classNames += ' like'
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                onClick={this.onRise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "zl"} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

    export default EmployerListItem;