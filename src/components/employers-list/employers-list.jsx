import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

// Здесь точно так же вытаскиваем из наших пропсов 
const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)} // В наш проперти Запускаем одноименный метод с id
            onToggleRise={() => onToggleRise(id)} /> /* И так как мы передали в EmployersListItem то мы туда и идем */
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
    export default EmployersList;

