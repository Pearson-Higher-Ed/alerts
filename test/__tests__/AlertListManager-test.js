import expect             from 'expect';
import expectJSX          from 'expect-jsx';
import React              from 'react';
import AlertListManager   from '../../src/js/AlertListManager';
import { mountWithIntl } from '../utils/intl-enzyme-test-helper.js';
import { jsdom }          from 'jsdom';
import { IntlProvider } from 'react-intl';

expect.extend(expectJSX);

describe('AlertListManager', () => {
  global.window = jsdom(undefined, { url: 'about:blank' }).defaultView;
  global.document = global.window.document;
  const intlProvider = new IntlProvider({locale: 'en'}, {});
  const { intl } = intlProvider.getChildContext();
  const targetData = {
    elementId: 'test-target'
  };

  const wrapper = mountWithIntl(
    <AlertListManager.WrappedComponent
      intl={intl}

    />,
    {targetData}
  );

  it('should render', () => {
    expect(wrapper.find('.alertList').type()).toEqual('ul');
  });
});
