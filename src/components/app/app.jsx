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
    /* Нам нужно какой-то механизм который берет внутренее состояние из employer-list-item и его передает на вверх в
с самый главный наш компонент app.jsx, что бы в app.jsx можно менять параметр increase и уже на основание этого измененого компонента
мы будет формировать AppInfo. Такой прием когда мы поднимаем внутреннее состояние одно компонента выше по иерархии называется -
ПОДЪЕМОМ СОСТОЯНИЯ. Мы уже отправляли данные вниз с app.jsx и теперь наоборот будет ПОДНИМАТЬ ВВЕРХ */

    // Будет переключать increase 
    onToggleIncrease = (id) => { // передаем id что бы по нем можно было определять наш объект
        /* Теперь нужно оживить эти методы. Алгоритм будет следующий: нам нужно взять определенный объект с которым работает пользователь
потом сделать его копию, поменять в нем опредленное свойство которое он изменяет, потом создать новый стейт и поменять уже его
в компоненте */
        // Первый способ
        this.setState(({data}) => { // ({data}) так мы вытаскиваем data
            const index = data.findIndex(elem => elem.id === id) // получаем индекс элемента с которым будем работать

            //дальше берем объект по данному индексу и сделать его коппию 
            const old = data[index]; // получили старый объект
            const newItem = {...old, increase: !old.increase}; 
/* ...old все свойства которые были в нашем старом объекте просто развернуться и сформирую из 
этого новый объект, то-есть ...old - это уже новый объект который сфомирован ! И он не нарушает принципов иммутабильности, он уже 
занимает отдельную ячейку памяти(где-то там в опперативной памяти компьютера) и если я после ...old поставлю ЗАПЯТУЮ то Я МОГУ ДОБАВЛЯТЬ
НОВЫЕ СВОЙСТВА И ЕСЛИ ЭТИ СВОЙСТВА БУДУТ СОВПАДАТЬ С ТЕМ ЧТО РАЗВЕРНЕТСЯ В ...old ТО НАПИСАННЫЕ ПОСЛЕ ЭТОГО БУДУТ ЕГО ЗАМЕНЯТЬ.
Теперь мы прописываем increase: !old.increase и новое значение записывается противоположно староме*/

            // После того как мы поменяли объект, нам нужно переработать весь state, который был
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)] /* ...data.slice(0, index) - это то что было ДО
...data.slice(index + 1) - это уже ПОСЛЕ, те остаток от того массива */

            return {
                data: newArr
            }
        })
    }

    // Здесь будет второй метод, который ровно точно так же подходит к onToggleIncrease
    // Сотрудник на повышение
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => { /* После применение метода map мы получим новый массив. item - каждый отдельный элемент внутри массива */
                if (item.id === id) { // если айди внутри объект совпадает с айди который пришел onToggleRise = (id) (те мы нашли нужный нам объект который на нужно изменить)
                    return {...item, rise: !item.rise} // мы вернем новый нужный нам объект. ...item - все свойсвто что были до этого. rise: !item.rise - то что нужно изменить
                }
                return item;
            }) 
        }))
    } /* Теперь еще раз проговорим что было в этом коде. Мы знаем что объект стейта мы напрямую менять не можем, по этому мы возвращаем
новый объект (вот здесь => ({ после setState(({data}) все что дальше это тот объект который мы возвращаем), у нас есть свойство 
data: и в нем будет формироваться новый массив с помощью map через коллбек фцию которая находится внутри, и если во време перебора
у нас совпали айдишки то мы нашли нужный нам объект. В таком случае мы будем возвращать новый объект который содержит то что было до этого
змененным rise. И если это условие не совпало то мы возвращаем этот объект*/

    render() {
        const employees = this.state.data.length // Общее количество сотрудников
        const increased = this.state.data.filter(item => item.increase).length /* Сотрудники которые идут на премию. Метод filter вернет нам 
новый массив. Перебираем каждый объект и возвращаем тот объект где increase будет в позиции true. И так как эта часть вернет
нам массив data.filter(item => item.increase), то мы просто можем применить length что бы получить кство.*/
/* И теперь передаем employees increased в AppInfo*/
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
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    } 
}

export default App;