import React from 'react';

import '../scss/component-specific.scss';

import Alert from './alert';
import Helper from './helper';

class AlertsComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false,
      opacity: 0,
      closeProp: '',
      alertType: '',
      alertMessage: ''
    };
  }

  componentDidUpdate = () => {
    const findAlert1 = document.querySelector('#demo-target1 [data-reactroot] .pe-template__static-small');
    const findAlert2 = document.querySelector('#demo-target2 [data-reactroot] .pe-template__static-small');
    if (findAlert1 && findAlert2) { findAlert2.style.top = '170px'; }
    if (!findAlert1 && findAlert2) { findAlert2.style.top = '50px'; }
  };

  handleErrorOpen = () => {
    this.setState({ open: true, opacity: 1, alertType: 'Error',
      alertMessage: `Uh oh, we weren't able to verify your email address. Try resending the email.` });
  };

  handleSuccessOpen = () => {
    this.setState({ open: true, opacity: 1, alertType: 'Success',
      alertMessage: 'Your email was verified! Your old address may receive messages for up to 48 hours while we update our systems.' });
  };

  handleClose = () => {
    const alert1 = document.getElementById('demo-target1');
    const alert2 = document.getElementById('demo-target2');

    const removeEL = () => {
      this.setState({ open: false, opacity: 0, closeProp: '', alertType: '', alertMessage: '' });
      if (this.state.open === false) {
        alert1.removeEventListener(Helper.whichTransitionEvent(), removeEL);
        alert2.removeEventListener(Helper.whichTransitionEvent(), removeEL);
      }
    }

    this.setState({ closeProp: 'close-title-animation' });

    alert1.addEventListener(Helper.whichTransitionEvent(), removeEL);
    alert2.addEventListener(Helper.whichTransitionEvent(), removeEL);
  };

  renderAlert = () => (
    <Alert
      opacity={this.state.opacity}
      handleClose={this.handleClose}
      closeTitleProp={this.state.closeProp}
      whichAlertProp={this.state.alertType}
      alertMessage={this.state.alertMessage}
    />
  );

  render () {

    return (
      <div>
        <button onClick={this.handleErrorOpen}>Error</button>
        {this.state.open
          ? this.renderAlert()
          : ''
        }
        <button onClick={this.handleSuccessOpen}>Success</button>
      </div>
    );
  }

}

export default AlertsComponent;
