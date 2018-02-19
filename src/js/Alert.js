import React from 'react';
import Icon  from './Icon';

const Alert = ({ index, alertType, handleClose, alertTitle, alertMessage }) => {
  const alertTypeCheck = () => {
    if (alertType === 'Error') {
      return (
        <span className="error-svg">
          <Icon name="warning-18" />
        </span>
      );
    }
    if (alertType === 'Success') {
      return (
        <span className="success-svg">
          <Icon name="check-lg-18" />
        </span>
      );
    }
  };

  const infoCheck = alertType === 'Information' ? '-info' :'';

  return (
    <li className ="pe-alert" id = {`alert-${alertType}-${index}`}>
      <div className="alert-content-container">
        {alertTypeCheck()}
        <div className={`alert-content${infoCheck}`}>
          <h2 className="pe-label alert-title">
            <strong>{alertTitle}</strong>
          </h2>
          <p className="pe-paragraph alert-text">{alertMessage}</p>
        </div>
      </div>
      <button
        className="pe-icon--btn close-title"
        onClick={() => handleClose(index)}
        aria-label="Close alert">
        <Icon name="remove-sm-24" />
      </button>
    </li>
  );
};

export default Alert;
