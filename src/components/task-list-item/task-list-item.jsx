import React from 'react';
import ModalEdit from '../modal-edit';
import { dateToStr } from '../../lib';

import "./task-list-item.sass";

const TaskListItem = (props) => {
    const greyClass = (props.id % 2) === 0 ? 'tasklist__row' : 'tasklist__row_grey';
    return(
        <tr className={greyClass}>
            <td className="tasklist__description">
                <ModalEdit {...props} />
            </td>
            <td className="tasklist__status">{props.status}</td>
            <td className="tasklist__priority">{props.priority}</td>
            <td className="tasklist__date-plan">{dateToStr(props.datePlan)}</td>
            <td className="tasklist__date-fact">{props.dateFact}</td>
            <td className="tasklist__move">
                <button onClick={() => props.handlerDeleteTask(props.id)}>Удалить</button>
            </td>
        </tr>
    );
};

export default TaskListItem;