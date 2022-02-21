// По добавлению нового сотрудника
import { Component } from 'react';

import './employers-add-form.css'

class EmployersAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
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
        return(
            <div className="app-add-form">
                <h3>Dodaj nowego pracownika</h3>
                <form className="add-form d-flex"
                      onSubmit = {this.onSubmit}>
                    <input type="text" 
                           className="form-control new-post-label"
                           placeholder="Jak on ma na imię?"
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
                            className="btn btn-outline-light">
                                Dodać
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;