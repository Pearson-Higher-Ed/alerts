// import TextModal from '../main'; // to demo direct API usage

function init() {

  // Demo eventing API
  document.body.dispatchEvent(new CustomEvent('o.InitTextModal', {
    detail: {
      elementId: 'app'
    }
  }));

  // Demo direct API
  // new TextModal({
  //   elementId: 'app'
  // });

}



window.onload = init;
