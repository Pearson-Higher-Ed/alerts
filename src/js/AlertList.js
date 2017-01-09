import React, { Component } from 'react';
import Alert                from './Alert';



class AlertList extends Component {


  constructor(props) {
    super(props);

    this.state = {
      opacity      : 1,
      closeProp    : '',
      alertList    : []
    };

    this.handleClose  = _handleClose.bind(this);
    this.renderAlert  = _renderAlert.bind(this);

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



function _renderAlert (alertList) {

  const alertsToRender = [];

  alertList.forEach((alert, index) => {
    alertsToRender.push(
        <Alert
          key            = {index}
          index          = {index}
          opacity        = {this.state.opacity}
          closeTitleProp = {this.state.closeProp}
          alertType      = {alert.alertType}
          alertMessage   = {alert.alertMessage}
          handleClose    = {this.handleClose}
        />
      )
  })

  return alertsToRender;

}


function _handleClose() {

  const transitions = {
    transition: 'animationend',
    WebkitTransition: 'webkitAnimationEnd'
  };

  transitions.map(transitionKey => {
    if (document.getElementById('demo-target1').style[transitionKey] !== undefined) {
      transitions[transitionKey];
    }
  });

  this.setState({
    closeProp    : 'close-title-animation',
    opacity      : 0
  });

};
