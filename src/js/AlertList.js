// Lifecycle interface for CSSTransitionGroup located in
// Component-specific.scss with the naming convention
// transitionName-lifecyclehook
import React, { Component }       from 'react';
import PropTypes                  from 'prop-types';
import Alert                      from './Alert';
import { CSSTransitionGroup }    from 'react-transition-group';
import { intlShape, injectIntl }  from 'react-intl';

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

    document.body.addEventListener('triggerAlert', e => this.setState( {e, alertList:this.state.alertList.concat(e.detail.alertList)} ) );
    document.body.addEventListener('clearAlert', () => this.setState({ alertList:[] }) );
  }

  render () {
    return (
      <div role="alert">
        <CSSTransitionGroup
          component="ul"
          aria-live="polite"
          transitionName="transition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
          className="alertList">
          {this.renderAlert(this.state.alertList)}
        </CSSTransitionGroup>
      </div>
    )
  }

}

export default injectIntl(AlertList);


function _handleClose (closeIndex) {
  const alertListFiltered = this.state.alertList.filter((e, index) => index !== closeIndex)
  this.setState({ closeIndex, alertList:alertListFiltered });
}

function _renderAlert (alertList) {

  return alertList.map((alert, index) =>

    <Alert
      key          = {alert.id}
      index        = {index}
      alertType    = {this.state.alertList[index].alertType}
      alertTitle   = {alert.alertTitle}
      alertMessage = {alert.alertMessage}
      handleClose  = {this.handleClose}
    />
  );
}
