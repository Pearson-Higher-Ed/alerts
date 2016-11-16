import '../scss/component-specific.scss';

import React from 'react';

import Alert from './alert';

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
    this.setState({ closeProp: 'close-title-animation' });
    const cp = document.getElementById('demo-target1');

    cp.addEventListener('webkitAnimationEnd', () => {
      this.setState({ open: false, opacity: 0 })
    }, false);

  };

  renderAlert = () => (
    <Alert opacity={this.state.opacity} handleClose={this.handleClose} closeTitleProp={this.state.closeProp} />
  );

  render () {

    return (
      <div>
        <button onClick={this.handleOpen}>Error</button>

        {this.state.open
          ? this.renderAlert()
          : ''
        }

      </div>
    );
  }

}

export default AlertsComponent;
