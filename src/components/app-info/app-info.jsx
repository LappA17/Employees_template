/* Это будет шапка профиля, в шапке будет показываться общее число сотрудников + зарплата */

import './app-info.css'

// И здесь из пропрсов достаем два этих пропса
const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Rozliczanie pracowników w firmie CCIG</h1>
            <h2>Łączna liczba pracowników: {employees}</h2>
            <h2>Nagrodę otrzymają: {increased}</h2>
        </div>
    )
}
/* То что мы создаем компоненты стрелочные - не имеет никакой роли так как все в разных файлаъ */

export default AppInfo;