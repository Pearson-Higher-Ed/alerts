import React from 'react';

const Alert = (props) => (
    <span className={`alert-span ${props.closeTitleProp}`} role="alert" style={{opacity: props.opacity}}>
      <span className="alert-title">
      <strong>Error</strong>
      <button className="close-title" onClick={props.handleClose} aria-label="Close alert" >&times;</button>
      </span><br/>
      <span className="alert-body">Uh oh, we weren&apos;t able to verify your email address.
      Try resending the email.
      </span>
    </span>
)

export default Alert;
