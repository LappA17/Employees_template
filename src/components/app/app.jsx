// Это будет папка и файл который будет объединять все наши компоненты !

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Ruslan P', salary: 6000, increase: false, id: 1},
        {name: 'Liza S', salary: 3000, increase: true, id: 2},
        {name: 'Edward D', salary: 6500, increase: false, id: 3}
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
}

export default App;