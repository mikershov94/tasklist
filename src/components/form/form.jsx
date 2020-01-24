import React from 'react';

import "./form.sass";

class Form extends React.Component {

    render() {
        return(
            <div className="form">
                <h2>Cоздание/редактирование задачи</h2>
                <form>
                    <div className="form__input-description">
                        <label for="description">Описание (*):</label>
                        <input type="text" id="description"/>
                    </div>
                    <div className="form__selects">
                        <div className="form__input-priority">
                            <label for="priority">Приоритет: </label>
                            <select id="priority">
                                <option value="low">Низкий</option>
                                <option value="mid">Средний</option>
                                <option value="high">Высокий</option>
                            </select>
                        </div>
                        <div className="form__input-status">
                            <label for="status">Статус: </label>
                            <select id="status">
                                <option value="new">Новый</option>
                                <option value="process">В работе</option>
                                <option value="complete">Завершен</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__date-plan">
                        <label>Крайний срок:</label>
                        <input type="date" />
                    </div>
                    <div className="form__submit">
                        <button>Сохранить</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default Form;