import expect      from 'expect';
import expectJSX   from 'expect-jsx';
import React       from 'react';
import TestUtils   from 'react-addons-test-utils';
import AlertList   from '../../src/js/AlertList';
import { shallow } from 'enzyme';
import { jsdom }   from 'jsdom';

expect.extend(expectJSX);

describe('AlertList', () => {
  describe('Basic AlertList Test', () => {
    beforeEach(function() {
      global.window = jsdom(undefined, { url: 'about:blank' }).defaultView;
      global.document = global.window.document;
      this.wrapper = shallow(<AlertList>Test Alert</AlertList>);
    });

    it('should render the Alert', function() {
      expect(this.wrapper.node.type).toEqual('ul');
    });

  });
});
