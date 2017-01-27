import React, { Component } from 'react';
import Icon                 from './icon';

class Alert extends Component {

  render () {

    const { index, alertType, alertMessage, handleClose } = this.props;

    return (
            <li
              className = "pe-alert"
              id        = {`alert-${alertType}-${index}`}
              role      = "alert"
              >

              <strong className={`pe-label ${alertType}-title`}>
                {alertType}
              </strong>

              <button className="close-title" onClick={() => handleClose(index)} aria-label="Close alert">
                <Icon name="remove-lg-18" />
              </button><br/>

              <span className="pe-copy">
                {alertMessage}
              </span>

            </li>
          )
  }

}

export default Alert;
