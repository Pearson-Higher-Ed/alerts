'use strict';

function init() {

  // Data in detail objects could come from a service endpoint

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

  document.body.dispatchEvent(new CustomEvent('o.InitMyComponent', {
    detail: {
      elementId: 'demo-target3',
      greeting: 'Bonjour le monde!',
      locale: 'fr-CA'
    }
  }));

  // Remove after some delay
  setTimeout(function() {
    document.body.dispatchEvent(new CustomEvent('o.UnmountMyComponent', {
      detail: 'demo-target3'
    }))
  }, 2000);

}

window.onload = init;
