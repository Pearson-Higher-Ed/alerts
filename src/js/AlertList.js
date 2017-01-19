// Lifecycle interface for ReactCSSTransitionGroup located in
// Component-specific.scss with the naming convention
// transitionName-lifecyclehook
import React, { Component, PropTypes }    from 'react';
import Alert                              from './Alert';
import ReactCSSTransitionGroup            from 'react-addons-css-transition-group';
import { intlShape, injectIntl }          from 'react-intl';
import { messages }                       from '../../translations/defaultMessages';

class AlertList extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.shape({
      locale: PropTypes.string
    })
  };

  constructor(props) {
    super(props);

    this.state = { alertList: [] };

    this.renderAlert = _renderAlert.bind(this);
    this.handleClose = _handleClose.bind(this);

    document.body.addEventListener( 'triggerAlert', e => this.setState( {alertList:this.state.alertList.concat(e.detail.alertList)} ) );
    document.body.addEventListener( 'clearAlert', () => this.setState({ alertList:[] }) );
  }

  render () {
    return (
      <ReactCSSTransitionGroup
        component              = "ul"
        className              = "alertList"
        transitionName         = "transition"
        transitionEnterTimeout = {300}
        transitionLeaveTimeout = {2800}
        >
        {this.renderAlert(this.state.alertList)}
      </ReactCSSTransitionGroup>
    )
  }

}


export default injectIntl(AlertList);

function _handleClose (closeIndex) {
  const alertListFiltered = this.state.alertList.filter((e, index) => index !== closeIndex)
  this.setState({ closeIndex, alertList:alertListFiltered });
}


function _renderAlert (alertList) {
  const { intl } = this.props;
  console.log(alertList, 'asgd');

  return alertList.map((alert, index) =>

  (this.state.alertList[index].alertType) === 'success' ?

    <Alert
      key          = {index}
      index        = {index}
      alertType    = {intl.formatMessage(messages.successAlert)}
      alertMessage = {alert.alertMessage}
      handleClose  = {this.handleClose}
    />

    :

    <Alert
      key          = {index}
      index        = {index}
      alertType    = {intl.formatMessage(messages.errorAlert)}
      alertMessage = {alert.alertMessage}
      handleClose  = {this.handleClose}
    />
  );
}
