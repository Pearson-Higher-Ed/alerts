import React, { Component } from 'react';
import Icon                 from './Icon';

class Alert extends Component {

  render () {

    const { index, alertType, alertMessage, handleClose, alertTitle } = this.props;

    return (<li className = "pe-alert"
                id = {`alert-${alertType}-${index}`}
                >

              <span>
                <strong className="pe-label alert-title">
                  {alertTitle}
                </strong>

                <span className="pe-paragraph alert-text">
                  {alertMessage}
                </span>
              </span>

              <button className="close-title" onClick={() => handleClose(index)} aria-label="Close alert">
                <Icon name="remove-sm-24" />
              </button><br/>


            </li>
          )
  }

}

export default Alert;
