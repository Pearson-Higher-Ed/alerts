import React, { Component } from 'react';
import Alert                from './Alert';



class AlertList extends Component {


  constructor(props) {
    super(props);

    this.state = {
      alertList : [],
      dismissAlert : ''
    };

    this.renderAlert = _renderAlert.bind(this);
    this.handleClose = _handleClose.bind(this);

  }


  componentWillMount() {
    document.body.addEventListener( 'triggerAlert',
      e => this.setState({ alertList:this.state.alertList.concat(e.detail.alertList) })
    );

    document.body.addEventListener( 'clearAlert',
      () => this.setState({ alertList:[] })
    );
  }


  render () {

    const { alertList } = this.state;
    return <ul className={"alertList"}>{alertList.length > 0 ? this.renderAlert(alertList) : null}</ul>;

  }


}



export default AlertList;



function _handleClose (currentIndex) {

  // apply style and decrement array...
  this.setState({
    dismissAlert:'close-title-animation',
    alertList:this.state.alertList.filter((e, index, a) => a[index] !== a[currentIndex] )
  });

  this.state.alertList.forEach(((a, i) => console.log(i + ' ' + a)))

}



function _renderAlert (alertList) {

  const alertsToRender = [];

  alertList.forEach((alert, index) => {
    alertsToRender.push(
        <Alert
          index        = {index}
          key          = {index}
          alertType    = {alert.alertType}
          alertMessage = {alert.alertMessage}
          dismissAlert = {this.state.dismissAlert}
          handleClose  = {this.handleClose}
        />
      )
  })

  return alertsToRender;

}
