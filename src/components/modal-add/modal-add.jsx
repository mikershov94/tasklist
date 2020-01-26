import React from 'react';
import Popup from 'reactjs-popup';
import Form from '../form';

import "./modal-add.sass"

const ModalAdd = ({handlerAddTask}) => {
    return(
        <Popup trigger={<button className="panel__add-but" >Добавить задачу</button>}
               modal
               closeOnDocumentClick>
            { close => (
                <div className="modal">
                    <a className="modal__close" onClick={close}>
                        &times;
                    </a>
                    <Form handlerAddTask={handlerAddTask}
                          close={close}
                          disabled={true}
                          edit={false} />
                </div>
            )}
        </Popup>
    );
};

export default ModalAdd;
