import React from 'react';
import TaskListItem from '../task-list-item';

const TaskList = () => {
    return(
        <table className="tasklist">
            <tr>
                <th className="tasklist__description">Описание</th>
                <th className="tasklist__status">Статус</th>
                <th className="tasklist__priority">Приоритет</th>
                <th className="tasklist__date-plan">Плановая дата окончания</th>
                <th className="tasklist__date-fact">Фактическая дата окончания</th>
                <th className="tasklist__move">Действие</th>
            </tr>
            <TaskListItem description="Описание задачи №1"
                          status="Новая"
                          priority="Низкий"
                          datePlan="01.01.2019"
                          dateFact="-" />
            <tr>
                <td className="tasklist__description">Описание задачи №2</td>
                <td className="tasklist__status">В работе</td>
                <td className="tasklist__priority">Средний</td>
                <td className="tasklist__date-plan">23.04.2019</td>
                <td className="tasklist__date-fact">-</td>
                <td className="tasklist__move">Удалить</td>
            </tr>
            <tr>
                <td className="tasklist__description">Описание задачи №3</td>
                <td className="tasklist__status">Завершено</td>
                <td className="tasklist__priority">Высокий</td>
                <td className="tasklist__date-plan">16.02.2019</td>
                <td className="tasklist__date-fact">18.02.2019</td>
                <td className="tasklist__move">Удалить</td>
            </tr>
            <tr>
                <td className="tasklist__description">Описание задачи №4</td>
                <td className="tasklist__status">Завершено</td>
                <td className="tasklist__priority">Средний</td>
                <td className="tasklist__date-plan">12.05.2019</td>
                <td className="tasklist__date-fact">20.04.2019</td>
                <td className="tasklist__move">Удалить</td>
            </tr>
        </table>
    );
};

export default TaskList;