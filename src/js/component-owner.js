import React, { Component }      from 'react';
import { intlShape, injectIntl } from 'react-intl';
import Alert                     from './alert';
import Helper                    from './helper';

import '../scss/component-specific.scss';



class ComponentOwner extends Component {

  static propTypes = { intl: intlShape.isRequired }


  constructor(props) {
    super(props);

    this.state = {
      opacity      : 0,
      closeProp    : '',
      alertType    : '',
      alertMessage : '',
      alertList    : []
    };

    this.handleClose  = _handleClose.bind(this);
    this.renderAlert  = _renderAlert.bind(this);

  }


  componentWillMount() {
    document.body.addEventListener( 'triggerAlert',
      e => this.setState({ alertList:this.state.alertList.concat([e.detail]) })
    );
  }


  render () {

    const { alertList } = this.state;
    return alertList.length > 0 ? this.renderAlert(alertList) : null;

  }


}



export default injectIntl(ComponentOwner);



function _renderAlert (alertList) {
  const alertsToRender = [];

  alertList.forEach((alert, index) => {
    alertsToRender.push(
        <Alert
          index          = {index}
          opacity        = {1}
          closeTitleProp = {this.state.closeProp}
          alertType      = {alert.alertType}
          alertMessage   = {alert.alertMessage}
          handleClose    = {this.handleClose}
        />
      )
  })

  return <ul>{alertsToRender}</ul>;

}


function _handleClose() {

  const alert1 = document.getElementById('demo-target1');

  const removeEL = () => {
    if (this.state.alertIsOpen === false) {
      alert1.removeEventListener(Helper.whichTransitionEvent(), removeEL);
    }
  }

  this.setState({
    closeProp    : 'close-title-animation',
    opacity      : 0,
    alertType    : '',
    alertMessage : ''
  });

};
