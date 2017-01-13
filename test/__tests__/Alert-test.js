import expect             from 'expect';
import expectJSX          from 'expect-jsx';
import React              from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Alert              from '../../src/js/Alert';
import Icon               from '../../src/js/icon';
import { shallow }        from 'enzyme';
import { jsdom }          from 'jsdom';

expect.extend(expectJSX);

describe('Alert', () => {
  describe('Basic Alert Test', () => {
    beforeEach(function() {
      global.window = jsdom(undefined, { url: 'about:blank' }).defaultView;
      global.document = global.window.document;
      this.wrapper = shallow(<Alert>Test Alert</Alert>);
    });

    it('should render the Alert', function() {
      expect(this.wrapper.node.type).toEqual('li');
    });

    it('should render Alert', () => {

    const index = 1;
    const closeIndex = 1;
    const alertType = 'success';
    const alertMessage = 'hi';
    const handleClose = () => {};
    const hasClicked = false;

    let renderer = createRenderer();

    renderer.render(<Alert
      index        = {index}
      closeIndex   = {closeIndex}
      key          = {index}
      alertType    = {alertType}
      alertMessage = {alertMessage}
      handleClose  = {handleClose}
    />);

    let actualElement = renderer.getRenderOutput();
    let actualElementClicked = renderer.getRenderOutput().props.onClick();

    // expect(actualElement).toEqualJSX(
    //   <li
    //     className = {(index !== closeIndex) ? `pe-alert` : `pe-alert pe-alert close-title-animation`}
    //     id        = {`alert-${alertType}-${index}`}
    //     role      = "alert">
    //     <strong className={`pe-label ${alertType}-title`}>{alertType}</strong>
    //     <button className="close-title" onClick={handleClose} aria-label="Close alert">
    //       <Icon name="remove-lg-18" />
    //     </button><br/>
    //     <span className="pe-copy">{alertMessage}</span>
    //
    //   </li>
    // );


  });

  });
});
