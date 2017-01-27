import expect      from 'expect';
import expectJSX   from 'expect-jsx';
import React       from 'react';
import TestUtils   from 'react-addons-test-utils';
import AlertList   from '../../src/js/AlertList';
import { jsdom }   from 'jsdom';
import { IntlProvider } from 'react-intl';
import { mountWithIntl } from '../utils/intl-enzyme-test-helper.js';

expect.extend(expectJSX);

describe('AlertList', () => {
  describe('Basic AlertList Test', () => {

    global.window = jsdom(undefined, { url: 'about:blank' }).defaultView;
    global.document = global.window.document;
    const intlProvider = new IntlProvider({locale: 'en'}, {});
    const { intl } = intlProvider.getChildContext();
    const targetData = {
      elementId: 'test-target'

    }
    const wrapper = mountWithIntl(
      <AlertList.WrappedComponent data={targetData} intl={intl} />,
      {targetData}
    );

    it('has correct intl', () => {
      expect(wrapper.node.props.intl.locale).toEqual('en');
    });

    it('does something', () => {
      console.log(wrapper.node, 'NOOOOOOOOOOOOOOOODDDDEEEEEEEE');
      console.log(wrapper.nodes, 'FINDDDDDDDDDDDDDDDD');
    })

  });
});
