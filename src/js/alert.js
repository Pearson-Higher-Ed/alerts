import React from 'react';

const Alert = (props) => (
  <span className={`alert-span ${props.closeTitleProp}`} role="alert" style={{opacity: props.opacity}}>
    <strong>{props.whichAlertProp}</strong>
      <button className="close-title" onClick={props.handleClose} aria-label="Close alert" >&times;</button><br/>
      <span className="alert-body">
        {props.alertMessage}
      </span>
  </span>
)

export default Alert;
