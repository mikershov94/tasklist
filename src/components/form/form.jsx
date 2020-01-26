import React from 'react';
import { dateToAttr } from '../../lib';


import "./form.sass";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            description: '',
            priority: 'Низкий',
            status: 'Новая',
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
            e.preventDefault();
            if (this.props.edit) {
                this.props.handlerEditTask(this.props.id, this.state);
            } else {
                this.props.handlerAddTask(this.state);
            }

            this.props.close();
        };

    }

    componentDidMount() {
        if (this.props.edit) {
            this.setState(() => {
                return {
                    description: this.props.description,
                    status: this.props.status,
                    priority: this.props.priority,
                    datePlan: this.props.datePlan,
                }
            })
        }
    }

    render() {
        return(
            <div className="form">
                <h2>Cоздание/редактирование задачи</h2>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form__input-description">
                        <label>Описание (*):</label>
                        <input type="text" value={this.state.description} onChange={this.onDescriptionChange} />
                    </div>
                    <div className="form__selects">
                        <div className="form__input-priority">
                            <label>Приоритет: </label>
                            <select onChange={this.onPriorityChange} value={this.state.priority}>
                                <option value="Низкий">Низкий</option>
                                <option value="Средний">Средний</option>
                                <option value="Высокий">Высокий</option>
                            </select>
                        </div>
                        <div className="form__input-status">
                            <label>Статус: </label>
                            <select onChange={this.onStatusChange}
                                    disabled={this.props.disabled}
                                    value={this.state.status} >
                                <option value="Новая">Новая</option>
                                <option value="В работе">В работе</option>
                                <option value="Завершена">Завершена</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__date-plan">
                        <label>Крайний срок:</label>
                        <input type="date" value={dateToAttr(this.state.datePlan)} onChange={this.onDatePlanChange} />
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