import expect      from 'expect';
import React       from 'react';
import AlertList   from '../../src/js/AlertList';
import { mount }   from 'enzyme';
import { jsdom }   from 'jsdom';


describe('AlertList', () => {
  describe('Basic AlertList Test', () => {
    global.window = jsdom(undefined, { url: 'about:blank' }).defaultView;
    global.document = global.window.document;
    const targetData = {
      elementId: 'test-target'
    };

    const alertList = [{
      id: 'activateSuccess',
      alertType: 'Success',
      alertMessage: 'Successfully activated student'
    }];

    const wrapper = mount(
      <AlertList alertList={alertList} />,
      {targetData}
    );

    it('has an alert', () => {
      expect(wrapper.find('li').length).toEqual(1);
    });

  });
});
