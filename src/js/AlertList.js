import React, { Component, PropTypes } from 'react';
import Alert from './Alert';
import { intlShape, injectIntl } from 'react-intl';
import { messages } from '../../translations/defaultMessages';

class AlertList extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.shape({
      locale: PropTypes.string
    })
  };

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


export default injectIntl(AlertList);


function _handleClose (currentIndex) {
  this.setState({ closeIndex : currentIndex });
}

function _renderAlert (alertList, closeIndex) {
  const alertListFiltered = alertList.filter((e, index) => index !== closeIndex);
  this.state.alertList    = alertListFiltered;
  const { intl } = this.props;

  return alertListFiltered.map((alert, index) =>

    (this.state.alertList[(this.state.alertList.length) - 1].alertType) === 'success' ?

    <Alert
      index        = {index}
      closeIndex   = {closeIndex}
      key          = {index}
      alertType    = {intl.formatMessage(messages.successAlert)}
      alertMessage = {intl.formatMessage(messages.successAlert)}
      handleClose  = {this.handleClose}
    />

    :

    <Alert
      index        = {index}
      closeIndex   = {closeIndex}
      key          = {index}
      alertType    = {intl.formatMessage(messages.errorAlert)}
      alertMessage = {intl.formatMessage(messages.errorAlert)}
      handleClose  = {this.handleClose}
    />
  );
}
