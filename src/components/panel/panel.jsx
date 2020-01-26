import React from 'react';
import ModalAdd from '../modal-add';

const Panel = ({handlerAddTask}) => {
    return(
        <div className="panel">
            <ModalAdd handlerAddTask={handlerAddTask} />
        </div>
    );
};

export default Panel;