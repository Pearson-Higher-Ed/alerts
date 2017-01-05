import '../scss/component-specific.scss';

import React, { PropTypes, Component} from 'react';
import { intlShape, injectIntl } from 'react-intl';
import Alert from './alert';
import Helper from './helper';

class AlertsComponent extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.shape({
      locale: PropTypes.string,
      alertType: PropTypes.string,
      alertMessage: PropTypes.string
    })
  }

  constructor(props) {
    super();

    this.state = {
      alertIsOpen: false,
      opacity: 0,
      closeProp: '',
      alertType: '',
      alertMessage: ''
    };
  }

  componentDidUpdate = () => {
    const findAlert1 = document.querySelector('#demo-target1 [data-reactroot] .pe-template__static-small');
    const findAlert2 = document.querySelector('#demo-target2 [data-reactroot] .pe-template__static-small');
    if (findAlert1 && findAlert2) { findAlert2.style.top = '170px'; }
    if (!findAlert1 && findAlert2) { findAlert2.style.top = '50px'; }
  };

  handleErrorOpen = (props) => {
    this.setState({ alertIsOpen: true, opacity: 1, alertType: this.props.alertType,
      alertMessage: this.props.alertMessage });
  };

  handleSuccessOpen = (props) => {
    this.setState({ alertIsOpen: true, opacity: 1, alertType: this.props.alertType,
      alertMessage: this.props.alertMessage });
  };

  handleClose = () => {
    const alert1 = document.getElementById('demo-target1');
    const alert2 = document.getElementById('demo-target2');

    const removeEL = () => {
      this.setState({ alertIsOpen: false, opacity: 0, closeProp: '', alertType: '', alertMessage: '' });
      if (this.state.alertIsOpen === false) {
        alert1.removeEventListener(Helper.whichTransitionEvent(), removeEL);
        alert2.removeEventListener(Helper.whichTransitionEvent(), removeEL);
      }
    }

    this.setState({ closeProp: 'close-title-animation' });

    alert1.addEventListener(Helper.whichTransitionEvent(), removeEL);
    alert2.addEventListener(Helper.whichTransitionEvent(), removeEL);
  };

  renderAlert = () => (
    <Alert
      opacity={this.state.opacity}
      handleClose={this.handleClose}
      closeTitleProp={this.state.closeProp}
      whichAlertProp={this.state.alertType}
      alertMessage={this.state.alertMessage}
    />
  );

  render () {

    return (
      <div>
        <button onClick={this.handleErrorOpen}>Error</button>
        {this.state.alertIsOpen
          ? this.renderAlert()
          : ''
        }
        <button onClick={this.handleSuccessOpen}>Success</button>
      </div>
    );
  }

}

export default injectIntl(AlertsComponent);
