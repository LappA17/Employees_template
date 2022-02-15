// Фильтер сотрудников
import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Wszyscy pracownicy
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Pracownicy do awansu
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Wynagrodzenie powyżej 4000 zł 
            </button>
        </div>
    ) /* btn-group - тоже встроеная в bootstrap класс, что бы мы не сильно парились над стилями 
    Все эти кнопки берутся от Бутстерпа который мы подключили к нашему index.html, а все их значение или их вид
мы можем увидеть в документации https://getbootstrap.com/docs/5.1/components/buttons/ !!!*/
}

export default AppFilter;