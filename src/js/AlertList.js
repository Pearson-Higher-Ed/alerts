import React, { Component } from 'react';
import Alert                from './Alert';



class AlertList extends Component {


  constructor(props) {
    super(props);

    this.state = {

      alertList    : [],
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


  // componentWillUnmount() {
  //   this.setState({alertList:this.state.alertList.filter((e, index, a) => a[index] !== a[this.state.currentIndex])})
  // }


  render () {

    const { alertList } = this.state;
    return <ul className={"alertList"}>{alertList.length > 0 ? this.renderAlert(alertList) : null}</ul>;

  }


}



export default AlertList;



function _handleClose (currentIndex) {

  this.setState({
    dismissAlert : 'close-title-animation',
    alertList:this.state.alertList.filter((e, index, a) => a[index] !== a[currentIndex])
  });

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
