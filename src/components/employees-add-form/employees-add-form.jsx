import { Component } from 'react';

//import './employees-add-form.css';
import './employees-add-form.scss'

class EmployeesAddForm extends Component {
    /*Свойства которые будет у экземпляра теперь создаются без КОНСТРУКТОРА(И БЕЗ СУПЕРА).
Очень важно наконец-то это понять что оно создается как свойство класса, а не как переменная(ты уже встречал такое и думал что это) */
        state = {
            name: '',
            salary: ''
        }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    // Делаем статичный МЕТОД (static). Что бы метод стал статичным прописываем static. В самом низу этот метод вызываем !
    static onLog = () => {
        console.log('Hey')
    }

    //Так же можем так создавать СВОЙСТВА ! Когда для целого класса должно быть какое-то одно свойство
    static logged = "you"; /* Свойства можно использовать что бы на весь класс была одна какая-то переменная, которую можно использовать,
условно значение ширины и тому подобное */

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Dodaj nowego pracownika</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Jak ma na imię?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Wynagrodzenie w zł?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Dodaj</button>
                </form>
            </div>
        )
    }
}

EmployeesAddForm.onLog()/* Я прямо на классе вызываю его метод ! */
console.log(EmployeesAddForm.logged)

export default EmployeesAddForm;