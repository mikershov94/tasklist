import React from 'react';

import "./form.sass";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            description: '',
            priority: 'low',
            status: 'new',
            datePlan: new Date(),
        };

        this.onDescriptionChange = (e) => {
            this.setState({
                description: e.target.value
            })
        };

        this.onPriorityChange = (e) => {
            this.setState({
                priority: e.target.value
            })
        };

        this.onStatusChange = (e) => {
            this.setState({
                status: e.target.value
            })
        };

        this.onDatePlanChange = (e) => {
            this.setState({
                datePlan: new Date(e.target.value)
            })
        };

        this.onFormSubmit = (e) => {
            e.preventDefault()
        };
    }

    render() {
        return(
            <div className="form">
                <h2>Cоздание/редактирование задачи</h2>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form__input-description">
                        <label>Описание (*):</label>
                        <input type="text" onChange={this.onDescriptionChange} />
                    </div>
                    <div className="form__selects">
                        <div className="form__input-priority">
                            <label>Приоритет: </label>
                            <select onChange={this.onPriorityChange}>
                                <option value="low">Низкий</option>
                                <option value="mid">Средний</option>
                                <option value="high">Высокий</option>
                            </select>
                        </div>
                        <div className="form__input-status">
                            <label>Статус: </label>
                            <select onChange={this.onStatusChange}>
                                <option value="new">Новый</option>
                                <option value="process">В работе</option>
                                <option value="complete">Завершен</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__date-plan">
                        <label>Крайний срок:</label>
                        <input type="date" onChange={this.onDatePlanChange} />
                    </div>
                    <div className="form__submit">
                        <button onClick={this.onFormSubmit}>Сохранить</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default Form;