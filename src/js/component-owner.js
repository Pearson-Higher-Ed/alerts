import React from 'react';

import '../scss/component-specific.scss';

import Alert from './alert';
import Helper from './helper';

const errorAlert = document.getElementById('demo-target1');
const successAlert = document.getElementById('demo-target2');

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
    const findAlert1 = document.querySelector('div#demo-target1 [data-reactroot] .alert-span');
    const findAlert2 = document.querySelector('div#demo-target2 [data-reactroot] .alert-span');
    if (findAlert1 && findAlert2) { findAlert2.style.top = '165px'; }
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
    const removeEL = () => {
      this.setState({ open: false, opacity: 0, closeProp: '', alertType: '', alertMessage: '' });
      if (this.state.open === false) {
        errorAlert.removeEventListener(Helper.whichTransitionEvent(), removeEL);
        successAlert.removeEventListener(Helper.whichTransitionEvent(), removeEL);
      }
    }

    this.setState({ closeProp: 'close-title-animation' });

    errorAlert.addEventListener(Helper.whichTransitionEvent(), removeEL);
    successAlert.addEventListener(Helper.whichTransitionEvent(), removeEL);
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
        }<br/>
        <button onClick={this.handleSuccessOpen}>Success</button>
      </div>
    );
  }

}

export default AlertsComponent;
