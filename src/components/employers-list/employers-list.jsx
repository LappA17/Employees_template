import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

const EmployersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem/>
            <EmployersListItem/>
            <EmployersListItem/>
        </ul>
    )
}
/* В ЭТОМ ЛИСТЕ БУДУТ КОМПОНЕНТЫ С employers-list-item !!! в анордерет лист !
    Компоненты мы должны где-то переиспользовать в других частях приложения */

    export default EmployersList;