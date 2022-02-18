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
        // Будем использовать коллбек, потому что мы зависим от предыдущего состояния
        this.setState(({increase}) => ({
            increase: !increase
        })) /* Что мы здесь вообще написали? Наш коллбек принимает один аргумент {increase} и это стейт. Для того что бы
не писать здесь state.increase вот в этом коде increase: !increase, очень часто берут и диструктуризируют его вот
здесь его в аргументах {increase}. Те аргумент я обернул в круглые скобки и уже потом вытащил increase, дальше после
=> мы ставим круглые скобки что бы не прописывать return и мы просто возвращаем объект из сетСтейта. А внутри объекта
increase мы устанавливаем ПРОТИВОПОЛОЖНОЕ СВОЙСТО тому что было до этого! increase: !increase*/
    }

    onRise = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    }

    render() {
        const {name, salary} = this.props // мы обращаемся к свойству нашего класса

/* Теперь здесь немного поменяем логику, потому что increase должен приходить не из пропсов, а должен определяться
внутри самого компонента ! Изначально внутрение состояние равна false - то-есть мы думаем что премия не идет человеку */
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
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

    export default EmployerListItem;