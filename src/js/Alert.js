import React, { Component } from 'react';
import Icon                 from './Icon';

export default class Alert extends Component {

  render () {

    const { index, alertType, alertMessage, handleClose, alertTitle } = this.props;
    const infoCheck = alertType === 'Information' ? 'info' :'';

    return (<li className = "pe-alert"
                id = {`alert-${alertType}-${index}`}>

                <button className="close-title"
                        onClick={() => handleClose(index)}
                        aria-label="Close alert">
                  <Icon name="remove-sm-24" />
                </button><br/>

                <div className="alert-content-container">
                  {alertType === 'Error' ? <span className="error-svg">
                                             <svg focusable="false"
                                                  className="pe-icon--warning-24">
                                                  <use xlinkHref="#warning-24"></use>
                                             </svg>
                                           </span>
                                         :null}
                  {alertType === 'Success' ? <span className="success-svg">
                                               <svg focusable="false"
                                                    className="pe-icon--check-sm-24">
                                                    <use xlinkHref="#check-sm-24"></use>
                                               </svg>
                                             </span>
                                           :null}
                  <div className={`alert-content-${infoCheck}`}>
                    <h4 className="pe-label alert-title">
                      <strong>{alertTitle}</strong>
                    </h4>
                    <p className="pe-paragraph alert-text">
                      {alertMessage}
                    </p>
                  </div>
                </div>

            </li>
          );
  }

};
