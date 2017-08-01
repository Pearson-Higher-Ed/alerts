import React, { Component }       from 'react';
import PropTypes                  from 'prop-types';
import { intlShape, injectIntl }  from 'react-intl';
import AlertList                  from './AlertList';

class AlertListManager extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.shape({
      locale: PropTypes.string
    })
  };

  constructor(props) {
    super(props);

    this.state = { alertList: [] };

    this.handleClose = _handleClose.bind(this);

    document.body.addEventListener('triggerAlert', e => this.setState( {e, alertList:this.state.alertList.concat(e.detail.alertList)} ) );
    document.body.addEventListener('clearAlert', () => this.setState({ alertList:[] }) );
  }

  render () {
    return (
      <AlertList
        alertList={this.state.alertList}
        handleClose={this.handleClose}
      />
    )
  }

}

function _handleClose (closeIndex) {
  const alertListFiltered = this.state.alertList.filter((e, index) => index !== closeIndex)
  this.setState({ closeIndex, alertList:alertListFiltered });
}

export default injectIntl(AlertListManager);
