import React from 'react';
import Popup from 'reactjs-popup';
import Form from '../form';

import "./modal.sass"

const Modal = ({handleAddTask}) => {
    return(
        <Popup trigger={<button className="panel__add-but" >Добавить задачу</button>}
               modal
               closeOnDocumentClick>
            { close => (
                <div className="modal">
                    <a className="modal__close" onClick={close}>
                        &times;
                    </a>
                    <Form handleAddTask={handleAddTask}
                          close={close} />
                </div>
            )}
        </Popup>
    );
};

export default Modal;