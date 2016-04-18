/* global jest describe it expect */

jest.dontMock('../src/js/component-owner.js');

import React, { PropTypes } from 'react';
import ComponentOwner from '../src/js/component-owner';
import {IntlProvider} from 'react-intl';
import {shallow} from 'enzyme';

describe('Component Owner Suite', function() {

  const messages = {
    'en-US' : {
      'placeholder': ''
    }
  };
  const locale = 'en-US';
  const intlProvider = new IntlProvider({locale: locale, messages : messages[locale]}, {});
  const {intl} = intlProvider.getChildContext();

  const targetData = {
  };

  const wrapper = shallow(
        <ComponentOwner.WrappedComponent
            data={targetData}
            intl={intl}
        />
  );

  it('creates the component instance', function () {
    expect(wrapper).toBeDefined();
  });

});
