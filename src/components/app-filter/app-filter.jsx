import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Wszyscy pracownicy', colored: false},
        {name: 'rise', label: 'Do promocji', colored: false},
        {name: 'moreThen1000', label: 'Wynagrodzenie powyżej 4000 zł', colored: true}
    ];

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