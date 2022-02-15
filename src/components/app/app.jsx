// Это будет папка и файл который будет объединять все наши компоненты !

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'; // так как мы используем вебпак то он соберет этот файлик в общие стили

function App() {
    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;