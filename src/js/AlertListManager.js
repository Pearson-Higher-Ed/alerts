import React, { Component } from 'react';
import AlertList            from './AlertList';

export default class AlertListManager extends Component {

  constructor(props) {
    super(props);

    this.state = { alertList: [] };
  }

  componentDidMount() {
    document.body.addEventListener('triggerAlert', this.triggerAlerts);
    document.body.addEventListener('clearAlert', this.clearAlerts);
  }

  componentWillUnmount() {
    document.body.removeEventListener('triggerAlert', this.triggerAlerts);
    document.body.removeEventListener('clearAlert', this.clearAlerts);
  }

  triggerAlerts = (e) => {
    this.setState({
      e,
      alertList: this.state.alertList.concat(e.detail.alertList)
    });
  }

  clearAlerts = () => {
    this.setState({ alertList: [] });
  }

  handleClose = (closeIndex) => {
    const alertListFiltered = this.state.alertList.filter((e, index) => index !== closeIndex)
    this.setState({
      closeIndex,
      alertList: alertListFiltered
    });
  }

  render () {
    return (
      <AlertList
        alertList={this.state.alertList}
        handleClose={this.handleClose}
      />
    )
  }

}
