import React from 'react';
import Popup from 'reactjs-popup';
import Form from '../form';

class ModalEdit extends React.Component {
    constructor() {
        super();
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ open: true });
      }
    closeModal() {
        this.setState({ open: false });
    }

    render() {
        return(
            <span>
                <span onDoubleClick={this.openModal} >{this.props.description}</span>
                <Popup modal
                       open={this.state.open}
                       onClose={this.closeModal}
                       closeOnDocumentClick>
                    <div className="modal">
                        <a className="modal__close" onClick={this.closeModal}>
                            &times;
                        </a>
                    <Form disabled={false}
                            close={this.closeModal}
                            edit={true}
                            {...this.props} /> 
                    </div>
                </Popup>
            </span>
        );
    }
};

export default ModalEdit