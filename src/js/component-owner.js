import '../scss/component-specific.scss';

import React from 'react';

class AlertsComponent extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      text: ''
    };
  }

  render() {

    return (
      <div>
        <p>test</p>
      </div>
    )
  }

}

export default AlertsComponent;
