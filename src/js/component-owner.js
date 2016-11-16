import '../scss/component-specific.scss';

import React from 'react';

import Alert from './alert';

const someVarName = document.getElementById('demo-target1');

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
        someVarName.removeEventListener('webkitAnimationEnd', reset);
      }
    }

    this.setState({ closeProp: 'close-title-animation' });

    someVarName.addEventListener('webkitAnimationEnd', reset);

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
