import React from 'react';

const Alert = (props) => (
    <span className="alert-span" style={{opacity: props.opacity}}>
      <span className="alert-title">
      <strong>Error</strong>
      <span className="close-title" onClick={props.handleClose}>&times;</span>
      </span><br/>
      <span className="alert-body">Uh oh, we weren&apos;t able to verify your email address.<br />
      Try resending the email.
      </span>
    </span>
)

export default Alert;
