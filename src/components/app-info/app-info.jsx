/* Это будет шапка профиля, в шапке будет показываться общее число сотрудников + зарплата */

import './app-info.css'

const AppInfo = () => {
    return (
        <div className="app-info">
            <h1>Rozliczanie pracowników w firmie CCIG</h1>
            <h2>Łączna liczba pracowników:</h2>
            <h2>Nagrodę otrzymają:</h2>
        </div>
    )
}
/* То что мы создаем компоненты стрелочные - не имеет никакой роли так как все в разных файлаъ */

export default AppInfo;