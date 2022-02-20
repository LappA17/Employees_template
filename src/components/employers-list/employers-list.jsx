import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

// Здесь точно так же вытаскиваем из наших пропсов 
const EmployersList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))} />  /* Здесь начинается самый тяжелый участок кода.  
Здесь кроме id нужно передать название нашего проперти, те что мы конкретно будем менать в нашей data. Это должна быть строка и она
должна быть получена с того элемента, на котором происходит событие. Клик у нас происходил в двух местах: <span className="list-group-item-label"
onClick={onToggleRise}>{name}</span> и <button type="button" onClick={onToggleIncrease}> .
Теперь когда мы знае где должны быть клика нам нужна МЕТКА, которая будет показывать где будет происходить событие, такая метка всегда
и везде может применяться благодаря DATA-аттрибтам, и мы их назначаем с тем значением которое нас интересует, с тем значением. Те мы 
создаем data-toggle="rise" и data-toggle="increase"
    Теперь главное получить эти дата-аттрибуты и помещаем ОБЪЕКТ СОБЫТИЯ в onToggleProp. Те нам будет приходить автоматически. 
Это значит что во время клика или другого любого события когда она передается просто как ссылка на этот метод как у нас (onClick={onToggleProp})
то у нас автоматически как первый аргумент подставляется ОБЪЕКТ СОБЫТИЯ, который мы и можем использовать: 
e.currentTarget.getAttribute('data-toggle'). 
    Здесь нам currenTarget нужен вместо обычного таргета для того что бы невелировать всплытие событий и получать только тот элемент
который нам действительно сейчас нужен. Потом мы получаем нужный нам аттрибут обращаясь к data- и там где написано toggle будет
автоматически подставлять то rise то increase взвависимости куда кликнул пользователь
 */
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
    export default EmployersList;

