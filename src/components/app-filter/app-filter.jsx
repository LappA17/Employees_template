import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Wszyscy pracownicy', colored: false},
        {name: 'rise', label: 'Do promocji', colored: false},
        {name: 'moreThen1000', label: 'Wynagrodzenie powyżej 4000 zł', colored: true}
    ];

    /* Логика в том что если у кнопки colored стоит в тру то она будет подсвечиваться крассным 
    style={colored ? {color: 'red'} : null} и так же вытаскиваем colored из объекта в buttonsData
    Если колоред будет тру то мы задаем инлайн стиль, если фолс то налл  */

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = colored ? {color: 'rgb(236, 167, 167)'} : null;
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}
                    style={style}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;