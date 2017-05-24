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
                                             <Icon name="warning-24" />
                                           </span>
                                         :null}
                  {alertType === 'Success' ? <span className="success-svg">
                                               <Icon name="check-sm-24" />
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
