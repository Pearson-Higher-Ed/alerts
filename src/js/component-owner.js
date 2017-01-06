import React, { Component }      from 'react';
import { intlShape, injectIntl } from 'react-intl';
import Alert                     from './alert';
// import Helper                    from './helper';

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

    // this.handleClose  = _handleClose.bind(this);
    this.renderAlert  = _renderAlert.bind(this);

  }


  componentDidMount() {
    // const { alertList } = this.state;
    document.body.addEventListener('triggerAlert',
      alert => console.log(alert)
    );
  }


  render () {
    const { alertList } = this.state;
    console.log(alertList[0])
    return this.state.alertList.length > 0 ? alertList.forEach( (alert, index) => <ul>{this.renderAlert(alert, index)}</ul> ) : null;
  }


}



export default injectIntl(ComponentOwner);



function _renderAlert (alert, index) {
  return (
    <Alert
      key            = {index}
      opacity        = {1}
      closeTitleProp = {this.state.closeProp}
      alertType      = {alert.alertType}
      alertMessage   = {alert.alertMessage}
      handleClose    = {this.handleClose}
    />
  );
}


// function _handleClose() {
//
//   const alert1 = document.getElementById('demo-target1');
//
//   const removeEL = () => {
//     if (this.state.alertIsOpen === false) {
//       alert1.removeEventListener(Helper.whichTransitionEvent(), removeEL);
//     }
//   }
//
//   this.setState({
//     // closeProp    : 'close-title-animation',
//     opacity      : 0,
//     closeProp    : '',
//     alertType    : '',
//     alertMessage : ''
//   });
//
// };
