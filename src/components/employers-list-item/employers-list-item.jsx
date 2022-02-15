// Каждый отдельный сотрудник который у нас будет находится в приложении. Под него будет каждый отдельный компонент

import './employers-list-item.css';

const EmployerListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">Ruslan Postoiuk</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
/* defaultValue - это дополнительный аттрибут Реакта !
    У нас есть элементы отдельные элементы списка (лист айтем). Что бы правильно работало СЕО и другие аспекты приложения
необходимо использовать именно лист айтем.
    В спене лежит имя пользователя
    Инпут - поле значение заработно платы
    Дальше див блока с кнопками
    Первая кнопка - иконка с печенькой
    Вторая кнопка - иконка удаление 
    i - отдельна ионка со звездной что бы отображать пользователя который идет на повышение */

    export default EmployerListItem;