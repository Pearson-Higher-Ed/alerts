import React from 'react';
import ReactDOM from 'react-dom';
import AlertsComponent from './src/js/component-owner';
import { IntlProvider } from 'react-intl';

export default class MyComponent {

  constructor(config) {

    this.init(config);
  }

  init(config) {

    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale}>
        <div>
          <AlertsComponent data={config} alertType="Error" alertMessage="Error test message" />
          <AlertsComponent data={config} alertType="Success" alertMessage="Success test message" />
        </div>
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }

}

document.body.addEventListener('o.InitAlertsComponent', e => new MyComponent(e.detail));
