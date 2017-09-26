import ReactDOM         from 'react-dom';
import AlertListManager from './src/js/AlertListManager';
import AlertList        from './src/js/AlertList';
import Alert            from './src/js/Alert';
import Icon             from './src/js/Alert';

import './src/scss/component-specific.scss';

export default class AlertsComponent {

  constructor(config) {
    this.init(config);
  }

  init(config) {
    ReactDOM.render(
      <AlertListManager />,
      document.getElementById(config.elementId)
    );
  }

}

document.body.addEventListener('o.InitAlertsComponent', e => new AlertsComponent(e.detail));

export { Alert, AlertsComponent, AlertListManager, Icon, AlertList };
