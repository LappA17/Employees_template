// Поиск сотрудником

import './search-panel.css';

const SearchPanel = () => {
    return (
        <input type="text" 
        className="form-control search-input" /* Классы уже готовые и идут из библиотеки bootstrap ! */
        placeholder="Znajdź pracownika"/> 
    )
}

export default SearchPanel;