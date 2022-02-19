// Это будет папка и файл который будет объединять все наши компоненты !

import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

/* Теперь приступим к удалению данных, что бы после клика на корзину удалялся объект. 
    Так как мы можем работать динамически с компонентом только благодаря state, то мы переделаем нашу функцию в function App в класс */
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
    } 

    /* Этот метод который лежит в самом верхнем уровне будет передавать аж в employer-list-items и будет вызывать по клику
    Cейчас обговорим алогрит удаление элемента из массива с объектами, где мы будем оринетироваться по уникальному id !!!
Нам нужно взять id и по нему найти объект внутри массива.
    Что бы найти нужный объект нам нужен его индекс (от 0-2) и нужно его найти
    findIndex() - запускает коллбек функцию и если она вернет ТРУ то из этого метода вернет номер элмента на котором сработала эта
функция. elem - это каждый объект в массиве. И МЫ ГОВОРИМ ЧТО МЫ БУДЕМ СРАВНИВАТЬ id у элемента из объекта с id который нам приходит
как аргумент в из deleteItems !!!(Мы не делаем строго сравнение ведь у нас могут быть разные данные, у объект айди как число а нам может
прийти строка !). И если у нас будет такое совпадение elem.id == id то у нас будет индекс того объекта который нам нужно будет удалить */
    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id); // индекс мы получили. Этот участок кода нужен только для 1го способа

            /*Теперь будем удалять объект. Здесь нужно еще раз поговорить о неизменяемсоти стейта(про его иммутабильность). Напрямую через
this.state менять его НЕЛЬЗЯ(мы не должны его мутировать). Неизменяемым(иммутабельным) становиться тот объект который не можем изменятья
после своего создание. И что бы внести какие-то изменения нужно создать копию нашего объекта с нововедениеями. МЫ НЕ МОЖЕМ НАПРЯМУЮ
ВЗЯТЬ И ИЗМЕНИТЬ data в this.state. Мы не можем прописать data.splice(index, 1) - мы не можем так удалить элемент из массива, а потом 
прописать return {data: data} 
    Наша задача - создать новый массив, который будет отталкиваться от старого только с нужными нам элементами*/
    // 1) Вариант через метод slice копируя часть массива и создавать новый
             /*const before = data.slice(0, index)   Начинаем с 0го массива и дальше до того элемента который нам нужен */
             /*const after = data.slice(index + 1) То-есть наш главный элемент который мы нашли мы пропускаем и после него начинаем
копировать кусочек массива начиная со следующего элемента и до конца массива. Таким образом мы создали два кусочка массива, которые
содержат половинки нашего старого */

            /*const newArr = [...before, ...after]  Такимм образом мы создали новый массив, который будет содержать все те же данные который 
были раньше в data, но без того который мы удалили */

            /* return {
                data: newArr // вместо data возвращаем новый массив 
            } */

    // 2) Способ filter - создавая новый массив
            return {
                data: data.filter(item => item.id !== id) /* Мы перебираем каждый объект внутри (это наш item). Если говорить простыми
словами то весь код читается так: у нас данные отфильтруются и у нас остануться только те элементы id(id именно из объектов в data в this.state) 
которых не сопвпадает с тем id который приходит методу deleteItems. ЭТОТ СПОСОБ НАМНОГО ЛУЧШЕ ТАК КАК ЗАДЕЙСТВУЕТСЯ НАМНОГО МЕНЬШЕ
КОДА ПЛЮС НАМ НЕ НУЖЕН ЭТОТ КОД const index = data.findIndex(elem => elem.id === id); */
            } 
        })
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
                <EmployersAddForm/>
            </div>
        )
    } 
}

export default App;