import React from 'react';

import "./task-list-item.sass";

const TaskListItem = (props) => {
    const dateToStr = (date) => {
        const day = (date.getDate()) < 10 ? '0' + String(date.getDate()) : String(date.getDate());
        const month = (date.getMonth() + 1) < 10 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1)
        const dateStr = day + '.' + month + '.' + String(date.getFullYear());
        return dateStr;
    };
    return(
        <tr>
            <td className="tasklist__description">{props.description}</td>
            <td className="tasklist__status">{props.status}</td>
            <td className="tasklist__priority">{props.priority}</td>
            <td className="tasklist__date-plan">{dateToStr(props.datePlan)}</td>
            <td className="tasklist__date-fact">{props.dateFact}</td>
            <td className="tasklist__move">
                <button onClick={props.handlerDeleteTask}>Удалить</button>
            </td>
        </tr>
    );
};

export default TaskListItem;