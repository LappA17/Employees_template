// Это будет папка и файл который будет объединять все наши компоненты !

import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

/* Будем фильтровать по имени пользователей, и посел фильтрации остануться только ты пользователи которых нужно отобразить
на страничке */
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'Ruslan P', salary: 6000, increase: false, rise: true, id: 1},
                {name: 'Liza S', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Edward D', salary: 6500, increase: false, rise: false, id: 3}
            ],
            term: '', // Данную строку будет невручную писать, а в компонента search-panel
            filter: 'all'
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

    onToggleProp = (id, prop) => { 
        this.setState(({data}) => ({ 
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    } 

    // Метод для поиска
    searchEmp = (items, term) => {
        if (term.length === 0) { // Если пользователь ничего не введет в поиск
            return items // То мы ничего делать не будем а просто вернем тот массив который нам прийдет
        }

        // Если условие выше не сработает
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
/* Второй аргумент - это строчка по которой будем исать. Первый аргумент - это массив данных который мы будем фильтровать 
   Мы будет фильтровать массив таким образом что будем брать свойство name в объекте data и искать сходство с term(то где пользовать
вбивает в поиске)
   Мы два раза вписываем return потому что у нас двойная КОЛЛБЕК функция
   indexOf - позволяет искать строки или подстроки. И если indexOf ничего не найдет то он будет равен -1. Поэтому прописываем что
наш поиск должен быть чему-то равен большему чем -1 
    На этом этапе когда мы уже передали стейты в наш рендер, если я в term ввиду какуе-то букву то у меня будет на страничке 
только тот работник у которого есть данная строка в имени*/

    // Обновление нашего поиска. Этот метод будет отвечать за установления состояние внутри нашего главного компонента app.jsx
    onUpdateSearch = (term) => {
        this.setState({term});
    }
    /* Этот метод будет только устанавливать состояние
    ОЧЕНЬ ВАЖНО ({term: term}) РАВНО ТОЖЕ САМОМУ ЧТО И ЭТО ({term})  */

    // Займемся нашим флиьтром
    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen4000':
                return items.filter(item => item.salary > 4000);
            default:
                return items;
        }
    }
/* Первый аргумент - наш массив, Второй - фильтер по которому мы будем фильтровать
   Так как у нас от фильтра можем меняться несколько позиции(Все сотрудники, Працовницы до авансу и вынагродзенье повыжей 4000), по-этому
нам нужно взять наш filter и взависимости от его содержания что-то с ним сделать.
   Так как у нас три значения фильтра - будем использовать конструкцию switch 

   1)case 'rise' - тут можно выбрать название строчек абсолютно рандомные, не обязательно rise 
   И если наш фильтер будет rise, то мы применяем этот участок кода return items.filter(item => item.rise), нужно напомнить что здесь
item.rise стоит в логическом контексте true , это тоже самое что return items.filter(item => if (item.rise) return;. Весь этот код
значит что если в нашем массиве data будет объект где rise стоит в позиции true - то он будет включен в наш массив
    Здесь break можно не ставить потому что React и сам знает !

    2) Те у кого зп больше 4000 злотых return items.filter(item => item.salary > 4000);

    3) Это default (если ни один из фильтров не сработает), те все сотрудники. То мы просто возвращаем наш массив
    */

    // Теперь необходимо что бы динамически фильтр переключался. (Обрати внимание что все метод который может сделать пользователь Ваня начинает с on, а статически методы уже без)
    onFilterSelect = (filter) => {
        this.setState({filter})
    }
    /* Мы изменяем в нашем состояние текущий фильтер */


    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        // Создадим отфильтрованный после поиска массив data. И уже потом передаем visibleData как data(данные) в EmployersList
        // const visibleData = this.searchEmp(data, term); Мы использовали эти пропсы для поиска, но Ваня сказал что можно немного передалать и использовать так же и для фильтров
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); /* У нас метод фильтерПост принимает в себя два аргумент:
массив и фильтер. и как массив мы в него помещаем this.searchEmp(data, term)(то что было в нашем поиске), то-есть мы будем фильтровать
уже как бы отфильтрованный массив. А filter мы берем с нашего this.state. То-есть наши данные которые будут отображаться будут проходить
две фильтрации: сначало по поиску, потом по фильтру */

        return(
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                    data={visibleData}
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    } 
}

export default App;