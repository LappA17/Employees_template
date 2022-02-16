// Это будет папка и файл который будет объединять все наши компоненты !

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

/* Попрактикуемся поработать с даными (переменная data)

   Сейчас добавиим класс increase что бы в случае появляение его у элемента - элемент на странице менял цвет, 
пока что не будем добавлять обрабртчик события, но логика такая что при клике на печеньку - нам будет оранжевым
подсвечивать человека который идет на повышение*/
function App() {

    const data = [
        {name: 'Ruslan P', salary: 6000, increase: false},
        {name: 'Liza S', salary: 3000, increase: true},
        {name: 'Edward D', salary: 6500, increase: false}
    ]

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data} />
            <EmployersAddForm/>
        </div>
    ); 
} /* Передаем в Компонент нашу переменую которая содержит массив данных */

export default App;