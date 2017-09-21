import expect             from 'expect';
import expectJSX          from 'expect-jsx';
import React              from 'react';
import Alert              from '../../src/js/Alert';
import Icon               from '../../src/js/Icon';
import { shallow }        from 'enzyme';
import { jsdom }          from 'jsdom';
import { createRenderer } from 'react-addons-test-utils';

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

    it('should click close button', () => {

      let hasClicked     = false;
      let renderer       = createRenderer();

      const index        = 1;
      const closeIndex   = 1;
      const alertType    = 'Success';
      const alertTitle   = 'Title';
      const alertMessage = 'hi';
      const handleClose  = () => hasClicked = true;

      renderer.render(<Alert
        index        = {index}
        closeIndex   = {closeIndex}
        key          = {index}
        alertTitle   = {alertTitle}
        alertType    = {alertType}
        alertMessage = {alertMessage}
        handleClose  = {handleClose}
      />);

      let actualElement = renderer.getRenderOutput();
      let actualElementClicked = actualElement.props.children[0].props.onClick();

      expect(hasClicked).toBe(true)

    });

    // jest.fn() doesn't work?
    let clicked = false;
    const handleClose = () => {
      clicked = true;
    };

    it('handles clicks', () => {
      const wrapper = shallow(<Alert handleClose={handleClose}>Test</Alert>);
      wrapper.find('button').simulate('click');
      expect(clicked).toEqual(true);
    });

  });
});
