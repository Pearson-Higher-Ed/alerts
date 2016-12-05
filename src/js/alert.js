import React from 'react';

const Icon = (props) => {

  const icon_class = 'pe-icon--' + props.name;

  return(
    <svg version = "1.1"
         xmlns = "http://www.w3.org/2000/svg"
         xmlnsXlink = "http://www.w3.org/1999/xlink"
         aria-hidden = "true"
         className = {icon_class}>
      <use xlinkHref = {'#' + props.name}></use>
    </svg>
  );
}

const Alert = (props) => (
  <span className={`alert-span ${props.closeTitleProp}`} id={`${props.whichAlertProp}`} role="alert" style={{opacity: props.opacity}}>
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
