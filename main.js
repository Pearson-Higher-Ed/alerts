// bundled component styling
import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOwner from './src/js/component-owner';

// i18n, set up for French out of the box
import {addLocaleData, IntlProvider} from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import frJson from './translations/fr.json';
const translations = {
  'fr-CA' : frJson
};
addLocaleData(frLocaleData);


export default function initInstance(config) {

  const locale = config.locale ? config.locale : 'en';

  ReactDOM.render(
    <IntlProvider locale={locale} messages={translations[locale]}>
      <ComponentOwner data={config} />
    </IntlProvider>,
    document.getElementById(config.elementId)
  );
}

export function removeInstance(elementId) {
  ReactDOM.unmountComponentAtNode(document.getElementById(elementId))
}

// Event Listeners for evented interface
//
// Change any reference to 'MyComponent' to your real component name!
//
document.body.addEventListener('o.InitMyComponent', e => initInstance(e.detail));
document.body.addEventListener('o.UnmountMyComponent', e => removeInstance(e.detail));
