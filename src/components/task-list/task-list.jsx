import React from 'react';
import TaskListItem from '../task-list-item';

const TaskList = (props) => {
    const items = props.data.map((item) => {
        const { id, ...itemProps } = item;
        return(
            <TaskListItem key={id} {...item} />
        );
    })

    return(
        <table className="tasklist">
            <thead>
                <tr>
                    <th className="tasklist__description">Описание</th>
                    <th className="tasklist__status">Статус</th>
                    <th className="tasklist__priority">Приоритет</th>
                    <th className="tasklist__date-plan">Плановая дата окончания</th>
                    <th className="tasklist__date-fact">Фактическая дата окончания</th>
                    <th className="tasklist__move">Действие</th>
                </tr>
            </thead>
            <tbody>
                { items }
            </tbody>
            
        </table>
    );
};

export default TaskList;