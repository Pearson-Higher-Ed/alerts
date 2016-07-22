import ModalImageEditor from '../main'


function init() {

  // // Eventing API
  // document.body.dispatchEvent(new CustomEvent('o.InitModalImageEditor', {
  //   detail: {
  //     elementId: 'demo-target1',
  //     greeting: 'Hello world!!'
  //   }
  // }));

  // Demo direct API
  new ModalImageEditor({ elementId: 'demo-target1' })

}

window.onload = init
