import React, { Component } from 'react';
import { FormattedMessage}  from 'react-intl';
import Icon                 from './Icon';

export default class Alert extends Component {

  render () {

    const { index, alertType, handleClose, alertTitle } = this.props;
    const infoCheck = alertType === 'Information' ? 'info' :'';
    let { alertMessage } = this.props;

    if (alertMessage && alertMessage.defaultMessage) {
      alertMessage = <FormattedMessage {...alertMessage} />
    }

    return (<li className ="pe-alert"
                id = {`alert-${alertType}-${index}`}>

                <button className="pe-icon--btn close-title"
                        onClick={() => handleClose(index)}
                        aria-label="Close alert">
                  <Icon name="remove-sm-24" />
                </button><br/>

                <div className="alert-content-container">
                  {alertType === 'Error' ? <span className="error-svg">
                                             <Icon name="warning-18" />
                                           </span>
                                         :null}
                  {alertType === 'Success' ? <span className="success-svg">
                                               <Icon name="check-sm-18" />
                                             </span>
                                           :null}
                  <div className={`alert-content-${infoCheck}`}>
                    <h2 className="pe-label alert-title">
                      <strong>{alertTitle}</strong>
                    </h2>
                    <p className="pe-paragraph alert-text">
                      {alertMessage}
                    </p>
                  </div>
                </div>

            </li>
          );
  }

};
