// Это будет папка и файл который будет объединять все наши компоненты !

import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'Ruslan P', salary: 6000, increase: false, rise: true, id: 1},
                {name: 'Liza S', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Edward D', salary: 6500, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4
    } 

    deleteItem = (id) => {
        this.setState(({data}) => {
            // 1ый способ
            //const index = data.findIndex(elem => elem.id === id); 
            //const before = data.slice(0, index)   
            //const after = data.slice(index + 1) 
            /*const newArr = [...before, ...after]  
            /* return {
                data: newArr // вместо data возвращаем новый массив 
            } */

    // 2) Способ filter - создавая новый массив
            return {
                data: data.filter(item => item.id !== id)
            } 
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++ 
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]; 
            return {
                data: newArr
            }
        });
    }

    /* В самом конце урока, Ваня сказал что бы не было повторений кода, можно объеденить increase и rise в один метод 
Здесь я буду менять не какое-то конкретное свойство как раньше, а рандомное свойство которое мы будет передавать как аргумент prop*/
    onToggleProp = (id, prop) => { 
        this.setState(({data}) => ({ 
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]} // prop которое нам приходит будет замещаться
                }
                return item
            })
        }))
    } 

    /* Теперь везде удаляем onToggleRise и вместо тоггл инкрис делаем onToggleProp ! */
    render() {
        const employees = this.state.data.length 
        const increased = this.state.data.filter(item => item.increase).length 
        return(
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    } 
}

export default App;