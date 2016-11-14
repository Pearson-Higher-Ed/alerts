import '../scss/component-specific.scss';

import React from 'react';

import Alert from './alert';

class AlertsComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false,
      opacity: 0,
      closeProp: 'close-title'
    };
  }

  handleOpen = () => {

    this.setState({ open: true, opacity: 1 });

  };

  handleClose = () => {

// Need to figure out a way that when animation finishes it changes state
    this.setState({ open: true, opacity: 1, closeProp: 'close-title-animation' })

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
