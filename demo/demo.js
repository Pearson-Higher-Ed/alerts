'use strict';

import MyComponent from '../main'; // for direct API usage

function init() {

  // Demo eventing API
  document.body.dispatchEvent(new CustomEvent('o.InitMyComponent', {
    detail: {
      elementId: 'demo-target1',
      greeting: 'Hello world!'
    }
  }));

  // Demo direct API
  new MyComponent({
    elementId: 'demo-target2',
    greeting: 'Bonjour le monde!',
    locale: 'fr-CA'
  });

}

window.onload = init;
