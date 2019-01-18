import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SimpleModal.scss';
import LoginCard from './LoginCard/LoginCard';

class SimpleModal extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <LoginCard />
        </Modal>
        <button type="button" onClick={this.showModal}>
          Love
        </button>
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
          <FontAwesomeIcon icon="times" size="7px"/>
        </button>
      </section>
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);
export default SimpleModal;