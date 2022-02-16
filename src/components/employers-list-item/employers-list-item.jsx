// Каждый отдельный сотрудник который у нас будет находится в приложении. Под него будет каждый отдельный компонент

import './employers-list-item.css';

/* Мы сюда передаем пропсы с employer-list 

   Именно здесь должен добавлять класс increase
   classNames - будет содержать все базовые классы li
   И мы говорим что у нас есть переменная classNames в которую мы добавляем еще один класс, только важно что бы этот
класс добавлялся через пробел что бы не он не притулялся к последнему классу который там уже был
    Теперь у того элемента у которого increase стоит в true будет окрашен !*/
const EmployerListItem = ({name, salary, increase}) => {

    let classNames = "list-group-item d-flex justify-content-between"
    if (increase) {
        classNames += ' increase'
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "zl"} />
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

    export default EmployerListItem;