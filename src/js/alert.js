import React from 'react';
import Icon from './icon';

const Alert = (props) => (
  <span className={`pe-template__static-small ${props.closeTitleProp}`} id={`${props.whichAlertProp}`} role="alert" style={{opacity: props.opacity}}>
    <strong className={`pe-label ${props.whichAlertProp}-title`}>{props.whichAlertProp}</strong>
      <button className="close-title" onClick={props.handleClose} aria-label="Close alert">
        <Icon name="remove-lg-18" />
      </button><br/>
      <span className="pe-copy">
        {props.alertMessage}
      </span>
  </span>
)

export default Alert;
