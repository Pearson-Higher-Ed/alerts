import React, { Component } from 'react';
import Icon                 from './Icon';

export default class Alert extends Component {

  alertTypeCheck = () => {
    if (this.props.alertType === 'Error') {
      return (
        <span className="error-svg">
          <Icon name="warning-18" />
        </span>
      );
    }
    if (this.props.alertType === 'Success') {
      return (
        <span className="success-svg">
          <Icon name="check-sm-18" />
        </span>
      )
    }
  }

  render () {
    const { index, alertType, handleClose, alertTitle, alertMessage } = this.props;
    const infoCheck = alertType === 'Information' ? 'info' :'';

    return (
      <li className ="pe-alert"
          id = {`alert-${alertType}-${index}`}>

        <button className="pe-icon--btn close-title"
                onClick={() => handleClose(index)}
                aria-label="Close alert">

          <Icon name="remove-sm-24" />

        </button> <br/>

        <div className="alert-content-container">
          {this.alertTypeCheck()}
          <div className={`alert-content-${infoCheck}`}>
            <h2 className="pe-label alert-title">
              <strong>{alertTitle}</strong>
            </h2>
            <p className="pe-paragraph alert-text">{alertMessage}</p>
          </div>
        </div>
      </li>
    );
  }

};
