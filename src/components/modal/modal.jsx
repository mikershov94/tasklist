import React from 'react';
import Popup from 'reactjs-popup';

const Modal = ({handleAddTask}) => {
    return(
        <Popup trigger={<button className="panel__add-but" onClick={handleAddTask} >Добавить задачу</button>}
               modal
               closeOnDocumentClick>
            <span>Modal Form</span>
        </Popup>
    );
};

export default Modal;
