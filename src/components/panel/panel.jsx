import React from 'react';
import Modal from '../modal';

const Panel = ({handleAddTask}) => {
    return(
        <div className="panel">
            <Modal handleAddTask={handleAddTask} />
        </div>
    );
};

export default Panel;