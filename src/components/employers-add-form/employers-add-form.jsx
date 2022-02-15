// По добавлению нового сотрудника

import './employers-add-form.css'

const EmployersAddForm = () => {
    return(
        <div className="app-add-form">
            <h3>Dodaj nowego pracownika</h3>
            <form className="add-form d-flex">
                <input type="text" 
                       className="form-control new-post-label"
                       placeholder="Jak on ma na imię?"/>
                <input type="number" 
                       className="form-control new-post-label"
                       placeholder="Wynagrodzenie w zł?"/>

                <button type="submit"
                        className="btn btn-outline-light">
                            Dodać
                </button>
            </form>
        </div>
    )
}

export default EmployersAddForm;