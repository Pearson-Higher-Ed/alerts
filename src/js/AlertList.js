// Lifecycle interface for CSSTransitionGroup located in
// Component-specific.scss with the naming convention
// transitionName-lifecyclehook
import React, { Component }       from 'react';
import PropTypes                  from 'prop-types';
import Alert                      from './Alert';
import { CSSTransitionGroup }     from 'react-transition-group';

export default class AlertList extends Component {

  static propTypes = {
    alertList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      alertTitle: PropTypes.string,
      alertMessage: PropTypes.string
    })),
    handleClose: PropTypes.func
  };

  render () {
    const { alertList, handleClose } = this.props;

    return (
      <div role="alert">
        <CSSTransitionGroup
          component="ul"
          aria-live="polite"
          transitionName="transition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
          className="alertList">
          {_renderAlert(alertList, handleClose)}
        </CSSTransitionGroup>
      </div>
    )
  }

}

function _renderAlert (alertList = [], handleClose) {
  return alertList.map((alert, index) =>
    <Alert
      key          = {alert.id}
      index        = {index}
      alertType    = {alertList[index].alertType}
      alertTitle   = {alert.alertTitle}
      alertMessage = {alert.alertMessage}
      handleClose  = {handleClose}
    />
  );
}
