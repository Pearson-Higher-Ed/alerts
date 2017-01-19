import ReactDOM         from 'react-dom';
import AlertList        from './src/js/AlertList';

import './src/scss/component-specific.scss';

export default class AlertsComponent {

  constructor(config) {

    this.init(config);

  }

  init(config) {

    ReactDOM.render(
      <AlertList />,
      document.getElementById(config.elementId)
    );
  }

}

document.body.addEventListener('o.InitAlertsComponent', e => new AlertsComponent(e.detail));
