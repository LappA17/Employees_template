import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

/* Создаемм в app.jsx onDelete={id => console.log(id)} и используем его здесь. 
    Так как это проперти то передаем его в аргументы справа от data и дальше эту же функция с app.jsx передаем дальше
в тот onDelete который мы создали изначально. И так как эта функция принимает один аргумент - это id, в нашем onDelete
который мы импортировали с app.jsx мы можем так же вызвать ее каким-то аргументом, при чем у нас здесь есть уникальный
индификатор key={id}, который индифицирует каждый пост каждого сотрудника.
    Теперь при клике на корзинку мы получаем id работника, если кликаем на 1го то в консоль выдает 1, если на второго
сотрудника то 2 и тд. ЭТО ВСЕ ПРОИСХОДИТ БЛАГОДАРЯ ПРИЕМУ ПЕРЕДАЧИ ПРОПЕРТИ (ТО-ЕСТЬ ПЕРЕДАЧИ СВОЙСТВ КОМПОНЕНТОВ 
ПО ИЕРАРХИИ). ТАКИМ ОБРАЗОМ МЫ ДОБИЛИСЬ ЧТО МЫ СПМОЩЬЮ САМОГО ВЕРХНЕГО КОМПОНЕНТА КОТОРОЕ ОБОРАЧИВАЕТ НАШЕ ВСЕ ПРИЛОЖЕНИЕ(app.jsx)
ВЗЯЛИ КАКИЕ-ТО ДАННЫЕ, А ИМЕННО ПРОПЕРТИ onDelete, мы ее обозначали и передали ниже в employers-list, 
мы ее здесь получи в const EmployersList = ({data, onDelete}) и при чем на этом этапе мы ее получилис id вот здесь const {id, ...
И ДАЛЬШЕ МЫ ЕЕ ПЕРЕДАЛИ ЕЩЕ КОМПОНЕНТУ НИЖЕ  onDelete={() => onDelete(id)} (В employers-list-item), то-есть она у нас будет вызывать
на самом низком уровне на кнопке */

const EmployersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
    export default EmployersList;

