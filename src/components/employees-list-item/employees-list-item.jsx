import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    /* В каждой компании свой подход работы со стилями, кто-то больше уперается в инлайн стили, кто-то css(sass), и тд.
Ваня сказал что нет особо разницы, каждый работает так как ему удобней, но он покажет примеры по каждым стилям
style={{fontSize: 40}} - задаем в виде Объекта инлайн-стили + важно что мы недописываем к 40 пиксели ! реакт понимает
за нас это. Реакт подставляет только пиксели.
    Так же этот объект можно вынести в переменную и передавать style={{fontSize: 40, color: 'orange'}} 
    Мы не можем просто прописать transition: 'all', потому что нужно будет ВРУЧНУЮ указывать префиксы к нему
WebkitTransitiom: 'all' или msTransition: 'all'. За это нужно помнить, это такой минус Реакта*/
    return (
        <li className={classNames}>
            <span  
                className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="rise"
                style={{fontSize: 40, color: 'orange'}}
                >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + 'zł'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;