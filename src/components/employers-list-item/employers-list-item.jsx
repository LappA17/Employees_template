// Каждый отдельный сотрудник который у нас будет находится в приложении. Под него будет каждый отдельный компонент

// import { Component } from 'react'; Тоже больше не нужен
import './employers-list-item.css';

const EmployerListItem = (props) => {
    /* constructor(props) {
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
    } */


    /* onToggleIncrease заменяем вместо this.onIncrease  
       Второй метод тоже копируем и заменяем this.onRise 
    Теперь состояние у нас контролируются двумя методами onToggleIncrease, onToggleRise, которые находятся аж app.jsx
И повышение с премией нам логичней отслеживать на верхнем уровне, в данных где массив data И ДВА ЭТИ МЕТОДА onRise
и onIncrease, которые мы записывали в стейте, нам уже не нужны. Ведь раньше мы думали что будем отслеживать только
на локальном уровне, но теперь изменили свое мнение !!!
    НАМ БОЛЬШЕ НЕ НУЖЕН КЛАСС, МЕТОД РЕНДЕР, КОНСТРУКТОР, СТЕЙТЫ, ИМПОРТИРОВАТЬ КОМПОНЕНТЫ И ТД 
    
    increase и rise будут нам приходить из главного объекта из data в app.jsx*/
    const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props // без this, потому что это просто объект пропсов который нам приходит
    // const {increase, rise} = this.state; не нужно больше

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
            onClick={onToggleRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "zl"} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
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

    export default EmployerListItem;