// Поиск сотрудником
import { Component } from 'react';
import './search-panel.css';

/* Нам нужно то что вбито в поиске где-то сохранить(а именно в app.jsx) и это будет происходить поиск в этом компоненте */
// Так как у нас будет все зависить от состояние то создадим класс
class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }
/* Этот term МЫ ДОЛЖНЫ БУДЕМ ПОДНИМАТЬ НА ВЕРХ В app.jsx и там ему устанавливать значение  */

    // Это уже другой метод
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }
/* Когда у нас здесь сработает событие то мы просто получаем value, который ввел пользователь
   this.setState({term}) - это установка ЛОКАЛЬНОГО СОСТОЯНИЯ term, именно тот что у нас в классе SearchPanel 
   this.props.onUpdateSearch(term) - теперь будем пробрасывать состояник на верх при помощи того проперти который нам пришел, term
в данном случае - это то что ввел пользователь
    ОЧЕНЬ ВАЖНО ! ХОТЬ У НАС ЗДЕСЬ ДВА onUpdateSearch, НО ОНИ РАЗНЫЕ ! Та что первая onUpdateSearch = (e) - эта та что будет работать
локально, мы ее так же назначим в наш инпут здесь. А вот эта часть props.onUpdateSearch нам приходит из app.jsx
    На этом этапе наш поиск готов ! */

    render() {
        return (
            <input type="text" 
            className="form-control search-input" /* Классы уже готовые и идут из библиотеки bootstrap ! */
            placeholder="Znajdź pracownika"
            value={this.state.term}
            onChange={this.onUpdateSearch}/> 
        )
    }
}

export default SearchPanel;