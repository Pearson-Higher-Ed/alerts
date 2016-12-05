import React from 'react';

const svgString = `<svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    role="img"
                    aria-labelledby="close_alert"
                    className="pe-icon--remove-lg-18">
                    <title id="close_alert">Close Alert</title>
                    <use xlinkHref="#remove-lg-18"></use>
                  </svg>`;

const Alert = (props) => (
  <span className={`alert-span ${props.closeTitleProp}`} id={`${props.whichAlertProp}`} role="alert" style={{opacity: props.opacity}}>
    <strong className={`pe-label ${props.whichAlertProp}-title`}>{props.whichAlertProp}</strong>
      <button className="close-title" onClick={props.handleClose} aria-label="Close alert"
      dangerouslySetInnerHTML={{ __html: svgString }}></button><br/>
      <span className="pe-copy">
        {props.alertMessage}
      </span>
  </span>
)

export default Alert;
