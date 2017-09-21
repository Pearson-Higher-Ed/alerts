import expect             from 'expect';
import expectJSX          from 'expect-jsx';
import React              from 'react';
import AlertListManager   from '../../src/js/AlertListManager';
import { mount }          from 'enzyme';
import { jsdom }          from 'jsdom';

expect.extend(expectJSX);

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
    expect(wrapper.find('.alertList').type()).toEqual('ul');
  });
});
