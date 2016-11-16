import React from 'react';
import ReactDOM from 'react-dom';
import AlertsComponent from './src/js/component-owner';

export default class MyComponent {

  constructor(config) {

    this.init(config);
  }

  init(config) {

    ReactDOM.render(
      <AlertsComponent data={config} />,
      document.getElementById(config.elementId)
    );
  }

}

document.body.addEventListener('o.InitAlertsComponent', e => new MyComponent(e.detail));
