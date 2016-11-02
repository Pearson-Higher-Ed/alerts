import AlertsComponent from '../main';

function init() {

  document.body.dispatchEvent(new CustomEvent('o.InitAlertsComponent', {
    detail: {
      elementId: 'demo-target1'
    }
  }));

  new AlertsComponent({
    elementId: 'demo-target2'
  });

}

window.onload = init;
