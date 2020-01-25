import React from 'react';

const TaskListItem = (
                        {
                            description,
                            status,
                            priority,
                            datePlan,
                            dateFact
                        }) => {
    const dateToStr = (date) => {
        const day = (date.getDate()) < 10 ? '0' + String(date.getDate()) : String(date.getDate());
        const month = (date.getMonth() + 1) < 10 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1)
        const dateStr = day + '.' + month + '.' + String(date.getFullYear());
        return dateStr;
    };
    return(
        <tr>
            <td className="tasklist__description">{description}</td>
            <td className="tasklist__status">{status}</td>
            <td className="tasklist__priority">{priority}</td>
            <td className="tasklist__date-plan">{dateToStr(datePlan)}</td>
            <td className="tasklist__date-fact">{dateFact}</td>
            <td className="tasklist__move">Удалить</td>
        </tr>
    );
};

export default TaskListItem;