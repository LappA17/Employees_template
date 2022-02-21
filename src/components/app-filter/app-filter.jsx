// Фильтер сотрудников
import './app-filter.css';

/* Ваня сказал что в качестве учебного материала он хочет показать еще один способ добавляения фильтра. Дело в том что когда у нас
кнопок много(особенно фильтров), то они нам приходят чаще не в качестве уже готовой верстке(например 10 одинаковых кнопок), а они
чаще всего рассположены в каком-то массиве с данными(так даже удобней будет работать когда кнопки формируются из массива с данными) и уже
потом будет интерфейс. И мы создаем buttonsData 

    Обрати внимание что у одной кнопки отличается класс btn-light вместо outline. У нас btn-outline-light подставляется тогда,
когда кнопка - неактивна. А btn-light когда активна и у нас эта кнопка будет в массиве, по этому на данные мы не можем ориентироваться.
Единственное на что мы можем ориентироваться это на ФИЛЬТЕР который нам приходит из app.jsx. Мы назначаем в app.jsx в filter: 'all'
что бы уже передавать фильтер в компонента app-filter и уже здесь использовать и уже от этого будет зависить какая кнопка будет активна.
ДЛЯ ЭТОГО В app.jsx в AppFilter как проперти filter буду передавать текущий стейт. И у меня получается что теперь в props.filter лежит
название фильтра КОТОРОЕ СОВПАДАЕТ С ОДНИМ ИЗ НАШИХ name(в данном случае name: "all"). По-этому создаем переменную active*/

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: 'Wszyscy pracownicy'}, // name - filter с app.jsx, label - это то что будет писаться внутри этой кнопки 
        {name: "rise", label: 'Pracownicy do awansu'},
        {name: "moreThen4000", label: 'Wynagrodzenie powyżej 4000 zł'}
    ]

    /* В map у нас будет каждый отдельный объект из которого я буду вытаскивать нужные мне данные  */
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name/* Так как у нас метод map проходится по всем объектам, то я буду узнавать 
активный это объект или нет, то-есть где совпадает у нас фильтр. Эта запись аналогична записи if и в active у нас будет либо true либо false*/
        const clazz = active ? 'btn-light' : 'btn-outline-light'/* Создадим переменую которая будет содержать в себе строчку с классом !
Если active тру то назначаем класс бтн-лайт, если фолс то оутлайн */
/* В бектиках назначаем нужный нам класс и теперь при переборе когда мы натыкаемся на действительно активный который совпадает с неймом
то мы эту кнопку будет подсвечивать как активную ! */

    /* Здесь что бы активировать onFilterSelect нужно обратиться к пропсам и активировать обработчик событий. Но если бы все наши кнопки
были бы статичны то мы бы просто на каждую кнопку cntr c + cntr v навесили бы обработчики событий. Но так как у нас все происходит
в одном месте то мы вызываем onClick и прям там же вызываем коллбек. Передаем аргумент name потому что это название нашего фильтра
который мы туда будем передавать*/
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
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
            </button> */}
        </div>
    ) 
}

export default AppFilter;