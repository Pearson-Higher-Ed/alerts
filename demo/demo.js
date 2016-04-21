'use strict';

import initInstance, {removeInstance} from '../main'; // for direct API usage

function init() {

  // Demo both the use of eventing and direct API

  document.body.dispatchEvent(new CustomEvent('o.InitMyComponent', {
    detail: {
      elementId: 'demo-target1',
      greeting: 'Hello world!'
    }
  }));

  document.body.dispatchEvent(new CustomEvent('o.InitMyComponent', {
    detail: {
      elementId: 'demo-target2',
      greeting: 'Bonjour le monde!',
      locale: 'fr-CA'
    }
  }));

  initInstance({
    elementId: 'demo-target3',
    greeting: 'Bonjour le monde!',
    locale: 'fr-CA'
  });

  // Remove after some delay
  setTimeout(function() {
    removeInstance('demo-target3');
  }, 3000);

}

window.onload = init;
