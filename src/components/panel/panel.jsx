import React from 'react';

const Panel = ({handleAddTask}) => {
    return(
        <div className="panel">
            <button className="panel__add-but" onClick={handleAddTask} >Добавить задачу</button>
        </div>
    );
};

export default Panel;