/* global describe it expect */

import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import {IntlProvider} from 'react-intl';
import {createRenderer} from 'react-addons-test-utils';
import ComponentOwner from '../src/js/component-owner';

expect.extend(expectJSX);

describe('Component Owner Suite', () => {
  let renderer;
  let intlProvider;

  beforeEach(() => {
    renderer = createRenderer();
    intlProvider = new IntlProvider({locale: 'en'}, {});
  });

  it('initially renders the component owner', () => {

    const {intl} = intlProvider.getChildContext();
    const targetData = {
      elementId: 'test-target',
      greeting: 'Hello world!'
    };

    renderer.render(
      <ComponentOwner.WrappedComponent
        data={targetData}
        intl={intl} />
      , {intl}
    );

    expect(renderer.getRenderOutput()).toEqualJSX(
      <div className="pe-inlineblock"><button className="pe-btn pe-btn--primary" onClick={function noRefCheck() {}}>say hello</button>
        &nbsp;
        <span className="pe-input"><input type="text" value="" placeholder="placeholder" /></span>
      </div>
    );

  });
});
