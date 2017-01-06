import React from 'react';
import Icon  from './icon';

const Alert = (props) => (
  <span
    key       = {props.key}
    className = {`pe-alert pe-template__static-small ${props.closeTitleProp}`}
    id        = {`${props.alertType}`}
    role      = "alert"
    style     = {{opacity: props.opacity}}>

    <strong className={`pe-label ${props.alertType}-title`}>{props.alertType}</strong>

      <button className="close-title" onClick={props.handleClose} aria-label="Close alert">
        <Icon name="remove-lg-18" />
      </button><br/>

      <span className="pe-copy">
        {props.alertMessage}
      </span>

  </span>
)

export default Alert;
