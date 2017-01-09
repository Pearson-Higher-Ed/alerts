function init() {

  document.body.dispatchEvent(new CustomEvent('o.InitAlertsComponent', {
    detail: {
      elementId: 'demo-target1'
    }

  }));

}

window.onload = init;
