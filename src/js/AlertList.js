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

    document.body.addEventListener( 'triggerAlert', e => this.setState( {e, alertList:this.state.alertList.concat(e.detail.alertList)} ) );
    document.body.addEventListener( 'clearAlert', () => this.setState({ alertList:[] }) );
  }

  render () {
    return (
      <ReactCSSTransitionGroup transitionName="transition" transitionEnterTimeout={300} transitionLeaveTimeout={800} className="alertList">
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

  return alertList.map((alert, index) =>

    <Alert
      key          = {alert.id}
      index        = {index}
      alertType    = {(this.state.alertList[index].alertType) === 'success' ?
      intl.formatMessage(messages.successAlert)
      :
      intl.formatMessage(messages.errorAlert)}
      alertMessage = {alert.alertMessage}
      handleClose  = {this.handleClose}
    />
  );
}
