import React from 'react';

const TaskListItem = (
                        {
                            description,
                            status,
                            priority,
                            datePlan,
                            dateFact
                        }) => {
    return(
        <tr>
            <td className="tasklist__description">{description}</td>
            <td className="tasklist__status">{status}</td>
            <td className="tasklist__priority">{priority}</td>
            <td className="tasklist__date-plan">{datePlan}</td>
            <td className="tasklist__date-fact">{dateFact}</td>
            <td className="tasklist__move">Удалить</td>
        </tr>
    );
};

export default TaskListItem;