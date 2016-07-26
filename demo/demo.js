import MyComponent from '../main'; // to demo direct API usage

// When available on npm, consumer usage would be similar to:
// import MyComponent from '@pearson-components/[component-name]'

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
    locale: 'fr'
  });

}

window.onload = init;
