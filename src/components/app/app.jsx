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
                {name: 'Ruslan P', salary: 6000, increase: false, id: 1},
                {name: 'Liza S', salary: 3000, increase: true, id: 2},
                {name: 'Edward D', salary: 6500, increase: false, id: 3}
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

    // Код внимательно + переписать
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++ // то-есть каждому след пользователю айдишка будет добавляться на 1 больше
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]; // Берем новый массив, в него записываем развернутый старый массив(те все что было там до этого) + новые данные с newItem
            return {
                data: newArr // заменяем старый массив на новый
            }
        });
    }

    render() {
        return(
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    } 
}

export default App;