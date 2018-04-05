// Lifecycle interface for CSSTransition located in
// Component-specific.scss with the naming convention
// transitionName-lifecyclehook
import React, { Component }       from 'react';
import PropTypes                  from 'prop-types';
import Alert                      from './Alert';
import { TransitionGroup, CSSTransition }     from 'react-transition-group';

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
        <TransitionGroup className="alertlList" aria-live="polite">
          {_renderAlert(alertList, handleClose)}
        </TransitionGroup>
      </div>
    )
  }
}

function _renderAlert (alertList = [], handleClose) {
  return alertList.map((alert, index) =>
    <CSSTransition
      key={alert.id}
      classNames="transition"
      timeout={{ enter: 300, exit: 200 }}
    >
      <Alert
        index        = {index}
        alertType    = {alertList[index].alertType}
        alertTitle   = {alert.alertTitle}
        alertMessage = {alert.alertMessage}
        handleClose  = {handleClose}
      />
    </CSSTransition>
  );
}
