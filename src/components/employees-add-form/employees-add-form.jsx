import { Component } from 'react';

//import './employees-add-form.css';
import './employees-add-form.scss'/* Вот так прописать импорт нельзя, будет ошибка при компиляции. Во многих почти
во всех гайдах на ютубе говоритса что нужно установить пакет Node sass, но сейчас он не поддерживается, по-этому вместо него нужно ставить
пакет sass
    nmp i sass --save  --сейв прописываем что бы сохранить зависимости
    
    Нужно быть очень аккуратными с переменными sass, ведь если я создам один глобальный файл сасс и в него буду импортировать файл с
переменными и потом на переферии попробую их использовать то будет ошибка. Для примера создадим папку на уровне src variables.scss
    Так же создадим один глобальный файл index.scss
    @import './variables.scss' в индекс.scss
    и в body в index.scss помещаем переменую цвета
    Теперь у нас цвет фона стал оранжевым и МЫ МОЖЕМ ПОДУМАТЬ ЧТО ТЕПЕРЬ МЫ МОЖЕМ ИСПОЛЬЗОВАТЬ ЭТУ ПЕРЕМЕНУЮ ВЕЗЛЕ НИЖЕ ПО 
ИЕРАРХИИ В НАШИХ КОМПОНЕНТАХ В scss ФАЙЛАХ И МЫ ПОПРОБУЕМ В add-form ПЕРЕДАТЬ ЭТУ ПЕРМЕНУЮ
    color: $main-color; назначаем в .app-add-form и у нас возникает ошибка компиляции. 
    ЕСЛИ Я ХОЧУ ИСПОЛЬЗОВАТЬ ГЛОБАЛЬНЫЙ ФАЙЛ С ПЕРМЕНЫМИ ТО МНЕ ПРИЙДЕТСЯ ИМПОРТИРОВАТЬ ЕГО ВО ВСЕ ОСТАЛЬНЫЕ ФАЙЛЫ !
    @import '../../variables.scss'; пишем в employees-add-form.scss и все работает !

    Еще есть один интересный ньюанс "как стили отображаются в нашем ДОМ дереве", если мы зайдем в консоли в head, то мы 
там обнаружим целую кучу style аттрибутов и если мы их расскроем то мы увидим эти стили, которые у нас хранятс в css файлах
Дело в том что когда ВебПек собирает наше приложение, он учитывает что мы в режиме разработки, те мы не хотим финальный 
большой css файл формировать их тех стилей что мы подключили, он просто берет все стили и подключает их в качестве тегов
В финальной сборки проекта со всеми оптимизациями, ТО ТАМ ВСЕ СТАЙЛЫ ИСЧЕЗНУТ и будут в одином файлике
*/

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Dodaj nowego pracownika</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Jak ma na imię?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Wynagrodzenie w zł?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;