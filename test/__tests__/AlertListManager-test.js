import expect             from 'expect';
import React              from 'react';
import AlertListManager   from '../../src/js/AlertListManager';
import { mount }          from 'enzyme';
import { jsdom }          from 'jsdom';

describe('AlertListManager', () => {
  global.window = jsdom(undefined, { url: 'about:blank' }).defaultView;
  global.document = global.window.document;
  const targetData = {
    elementId: 'test-target'
  };

  const wrapper = mount(
    <AlertListManager />,
    {targetData}
  );

  it('should render', () => {
    expect(wrapper.find('ul.alertList').length).toEqual(1);
  });
});
