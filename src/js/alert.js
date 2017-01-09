import React from 'react';
import Icon  from './icon';


const Alert = (props) => (
      <li
        className = {`pe-alert ${props.dismissAlert}`}
        id        = {`alert-${props.alertType}-${props.index}`}
        role      = "alert"
        >

        <strong className={`pe-label ${props.alertType}-title`}>
          {props.alertType}
        </strong>

        <button className="close-title" onClick={() => props.handleClose(props.index)} aria-label="Close alert">
          <Icon name="remove-lg-18" />
        </button><br/>

        <span className="pe-copy">
          {props.alertMessage}
        </span>

      </li>
    )



export default Alert;
