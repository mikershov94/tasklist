import React from 'react';
import Popup from 'reactjs-popup';
import Form from '../form';

const ModalEdit = (props) => {
    return(
        <Popup trigger={<span>{props.description}</span>}
               modal
               closeOnDocumentClick>
            { close => (
                <div className="modal">
                    <a className="modal__close" onClick={close}>
                        &times;
                    </a>
                   <Form disabled={false}
                         close={close}
                         edit={true}
                         {...props} /> 
                </div>
            )}
        </Popup>
    );
};

export default ModalEdit