import expect             from 'expect';
import React              from 'react';
import Alert              from '../../src/js/Alert';
import { shallow }        from 'enzyme';
import { jsdom }          from 'jsdom';

describe('Alert', () => {
  describe('Basic Alert Test', () => {
    beforeEach(function() {
      global.window = jsdom(undefined, { url: 'about:blank' }).defaultView;
      global.document = global.window.document;
      this.wrapper = shallow(<Alert>Test Alert</Alert>);
    });

    it('should render the Alert', function() {
      expect(this.wrapper.getElement().type).toEqual('li');
    });

    it('should click close button', () => {
      let hasClicked = false;
      const handleClose = () => hasClicked = true;

      const wrapper = shallow(
        <Alert
          index={1}
          closeIndex={1}
          key={1}
          alertTitle='Title'
          alertType='Success'
          alertMessage='hi'
          handleClose={handleClose}
        />
      );

      wrapper.find('button').simulate('click');
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
