import React, { Component } from 'react';
import AlertList            from './AlertList';

export default class AlertListManager extends Component {

  constructor(props) {
    super(props);

    this.state = { alertList: [] };

    this.handleClose = _handleClose.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('triggerAlert', e => this.setState( {e, alertList:this.state.alertList.concat(e.detail.alertList)} ) );
    document.body.addEventListener('clearAlert', () => this.setState({ alertList:[] }) );
  }

  componentWillUnmount() {
    document.body.removeEventListener('triggerAlert', e => this.setState( {e, alertList:this.state.alertList.concat(e.detail.alertList)} ) );
    document.body.removeEventListener('clearAlert', () => this.setState({ alertList:[] }) );
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

function _handleClose (closeIndex) {
  const alertListFiltered = this.state.alertList.filter((e, index) => index !== closeIndex)
  this.setState({
    closeIndex,
    alertList: alertListFiltered
  });
}
