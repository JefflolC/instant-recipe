import React from 'react';
import './Modal.scss';

export default class Modal extends React.Component {
  render() {
    const showHideModal = this.props.show ? "modal-container display-flex" : "modal-container display-none";

    return (
      <div className={showHideModal}>
        <div className="modal-backdrop" onClick={this.props.handleClose}></div>
        <div className="modal-content">
          <div className="close-modal" onClick={this.props.handleClose}>
            <img src={require('../../images/close.png')} alt="close" />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}