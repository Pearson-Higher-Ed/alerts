import React from 'react';
import Icon  from './icon';



const Alert = (props) => (
  <li
    className = {`pe-alert ${props.closeTitleProp}`}
    id        = {`alert-${props.alertType}-${props.index}`}
    role      = "alert"
    style     = {{opacity: props.opacity}}
    >

    <strong className={`pe-label ${props.alertType}-title`}>
      {props.alertType}
    </strong>

    <button className="close-title" onClick={props.handleClose} aria-label="Close alert">
      <Icon name="remove-lg-18" />
    </button><br/>

    <span className="pe-copy">
      {props.alertMessage}
    </span>

  </li>
)



export default Alert;
