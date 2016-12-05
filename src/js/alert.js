import React from 'react';

const Alert = (props) => (
  <span className={`alert-span ${props.closeTitleProp}`} id={`${props.whichAlertProp}`} role="alert" style={{opacity: props.opacity}}>
    <strong className={`pe-label ${props.whichAlertProp}-title`}>{props.whichAlertProp}</strong>
      <button className="close-title" onClick={props.handleClose} aria-label="Close alert" >&times;</button><br/>
      <span className="pe-copy">
        {props.alertMessage}
      </span>
  </span>
)

export default Alert;
