import React from 'react';

import '../scss/component-specific.scss';

import Alert from './alert';
import Helper from './helper';

const targetAlert = document.getElementById('demo-target1');

class AlertsComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false,
      opacity: 0,
      closeProp: ''
    };
  }

  handleOpen = () => {
    this.setState({ open: true, opacity: 1, closeProp: 'close-title' });
  };

  handleClose = () => {

    const reset = () => {
      this.setState({ open: false, opacity: 0, closeProp: '' });
      if (this.state.open === false) {
        targetAlert.removeEventListener(Helper.whichTransitionEvent(), reset);
      }
    }

    this.setState({ closeProp: 'close-title-animation' });

    targetAlert.addEventListener(Helper.whichTransitionEvent(), reset);
  };

  renderAlert = () => (
    <Alert opacity={this.state.opacity} handleClose={this.handleClose} closeTitleProp={this.state.closeProp} />
  );

  render () {

    return (
      <div>
        <button className="test-button" onClick={this.handleOpen}>Error</button>

        {this.state.open
          ? this.renderAlert()
          : ''
        } <br/><br/><br/><br/>

        <button className="test-button">Success</button>
      </div>
    );
  }

}

export default AlertsComponent;
