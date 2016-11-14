import '../scss/component-specific.scss';

import React from 'react';

import Alert from './alert';

class AlertsComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false,
      opacity: 0
    };
  }

  handleOpen = () => {

    this.setState({ open: true });

    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 1)

  };

  handleClose = () => {

    this.setState({ opacity: 0 });

    setTimeout(() => {
      this.setState({ open: false });
    }, 1)
  };

  renderAlert = () => (
    <Alert opacity={this.state.opacity} handleClose={this.handleClose} />
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
