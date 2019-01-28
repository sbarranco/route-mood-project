import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SimpleModal.scss';


class SimpleModal extends Component {
  state = { show: this.props.displayModal };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main className="main-modal">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {this.props.children}
        </Modal>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          <FontAwesomeIcon icon="times" size="lg" curso="pointer"/>
        </button>
      </section>
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);
export default SimpleModal;