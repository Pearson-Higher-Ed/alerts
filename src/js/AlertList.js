// Lifecycle interface for ReactCSSTransitionGroup located in
// Component-specific.scss with the naming convention
// transitionName-lifecyclehook
import React, { Component }    from 'react';
import Alert                   from './Alert';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AlertList extends Component {

  constructor(props) {
    super(props);

    this.state = { alertList: [] };

    this.renderAlert = _renderAlert.bind(this);
    this.handleClose = _handleClose.bind(this);

    document.body.addEventListener( 'triggerAlert', e => this.setState( {e, alertList:this.state.alertList.concat(e.detail.alertList)} ) );
    document.body.addEventListener( 'clearAlert', () => this.setState({ alertList:[] }) );
  }

  render () {
    console.log(this.state.e)
    return (
      <ul className="alertList" >
        {this.renderAlert(this.state.alertList)}
      </ul>
    )
  }

}


export default AlertList;


function _handleClose (closeIndex) {
  const alertListFiltered = this.state.alertList.filter((e, index) => index !== closeIndex)
  this.setState({ closeIndex, alertList:alertListFiltered });
}

function _renderAlert (alertList) {
  return alertList.map((alert, index) =>
    <Alert
      key          = {index}
      index        = {index}
      alertType    = {alert.alertType}
      alertMessage = {alert.alertMessage}
      handleClose  = {this.handleClose}
    />
  );
}
