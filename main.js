//
// Change all references to 'MyComponent' in this file to your real component name!
//

import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOwner from './src/js/component-owner';

// i18n, set up for French out-of-the-box
import {addLocaleData, IntlProvider} from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import frJson from './translations/fr.json';
const translations = {
  'fr' : frJson
};

export default class MyComponent {

  constructor(config) {

    addLocaleData(frLocaleData);
    this.init(config);
  }

  init(config) {

    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale} messages={translations[locale]}>
        <ComponentOwner data={config} />
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }

}

//
// For events, use the Origami naming convention of pre-pending with 'o.'
//
document.body.addEventListener('o.InitMyComponent', e => new MyComponent(e.detail));
