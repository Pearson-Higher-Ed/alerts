import ReactDOM         from 'react-dom';
import AlertList        from './src/js/AlertList';
import { IntlProvider } from 'react-intl';

import './src/scss/component-specific.scss';

export default class AlertsComponent {

  constructor(config) {

    this.init(config);

  }

  init(config) {

    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale}>
          <AlertList data={config} />
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }

}

document.body.addEventListener('o.InitAlertsComponent', e => new AlertsComponent(e.detail));
