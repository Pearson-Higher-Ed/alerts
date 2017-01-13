import React, { Component } from 'react';
import Alert                from './Alert';


class AlertList extends Component {

  constructor(props) {
    super(props);

    this.state = { alertList : [] };

    this.renderAlert = _renderAlert.bind(this);
    this.handleClose = _handleClose.bind(this);

    document.body.addEventListener( 'triggerAlert', e => this.setState( {alertList:this.state.alertList.concat(e.detail.alertList)} ) );
    document.body.addEventListener( 'clearAlert', () => this.setState({ alertList:[] }) );
  }

  render () {
    const { alertList, closeIndex } = this.state;

    return <ul className="alertList">{this.renderAlert(alertList, closeIndex)}</ul>;
  }

}


export default AlertList;


function _handleClose (currentIndex) {
  this.setState({ closeIndex : currentIndex });
}

function _renderAlert (alertList, closeIndex) {
  const alertListFiltered = alertList.filter((e, index) => index !== closeIndex)
  this.state.closeIndex   = undefined;
  this.state.alertList    = alertListFiltered;
  return alertListFiltered.map((alert, index) =>
    <Alert
      index        = {index}
      closeIndex   = {closeIndex}
      key          = {index}
      alertType    = {alert.alertType}
      alertMessage = {alert.alertMessage}
      handleClose  = {this.handleClose}
    />
  );
}
