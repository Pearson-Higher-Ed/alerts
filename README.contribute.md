# Contributing

## Overview

This component is constructed using [React](https://facebook.github.io/react/) written in ECMAScript 6 (ES2015) and 
styled with SCSS, all transpiled by [Babel](http://babeljs.io/).

The project features unit testing, i18n with [React Intl](https://github.com/yahoo/react-intl/wiki), and hot reloading.

## Polyfill Service

If you require the use of polyfills to support browsers like Internet Explorer, use 
[Polyfill.io](https://cdn.polyfill.io/v2/docs/examples) to construct your polyfill requests for specific features.

## Continuous Integration

To hook up your project to Origami continuous integration, a one-time manual process is currently required. 

Please send the request to do this to pearson-design-accelerator@pearson.com.

### GitHub

GitHub repositories will integrate with [Travis CI](https://travis-ci.org/Pearson-Higher-Ed/), which will publish to the
 **public** scope in Pearson's npm organization.

### BitBucket

BitBucket repositories will integrate with [Solano CI](https://ci.solanolabs.com), which will publish to the **private**
scope in Pearson's npm organization.

## Development Toolchain

**Note: Bower is disallowed in Origami v2**

- [Node.js](http://nodejs.org) v4+
- [Ruby](https://www.ruby-lang.org/en/) for SCSS (Macs typically ship with Ruby by default)
- [webpack](https://webpack.github.io/)
    - Bundles javascript, styles and icon
    - Babel 6 transpiles ES6 and JSX
    - [ESLint](http://eslint.org/) configured with .eslintrc

Recommendation: If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) 
to manage them.

### Quick Start

See the project working before changing anything!

In your local repo:

    npm install
    npm run dev

Navigate to **localhost:8081/demo** - the bundle is served in memory, which is why you may not see the file in /build.

**Hot module replacement** is activated in the webpack dev server; saved changes to src are automatically reloaded in the 
browser.

### Build

Build the bundle manually at any time.

    npm run build

### Test

The project is wired to unit test with the popular [Mocha](https://mochajs.org/) framework and  
[expect](https://github.com/mjackson/expect) assertion library.

It is also enabled for the following options:

- [shallow rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) with React's test utilities

- Rendering a component into a detached DOM node in the document, using [jsdom](http://jaketrent.com/post/testing-react-with-jsdom/)

Linting will run automatically prior to executing the test suite.


    npm test    

### Spec Compliance

Determine if your component passes a series of checks for Origami v2 compliance.

    npm run verify

### Translations for Internationalization

It is expected that applications will pass in translated text for dynamic content.

For text inherent to the component (e.g. button text or input placeholder), add JSON translations for each supported 
locale to the translations folder. 

Retain the `locale` configuration parameter.

### Publish to Pearson npm Registry

**For public packages only**, add the following npm script to the package.json:

    "postpublish": "npm access public && echo 'Package scope set to public!'"

Do not manually version or tag your project. Instead, when you are ready to publish an update to npm, manually invoke the
release script in the master branch. It handles all of that and invokes CI publishing to npm on behalf of the pearson-ux
 account.

Additionally, there is no need to manually maintain a change log - if you follow the 
[commitizen](https://commitizen.github.io/cz-cli/) conventions for commit messages, a change log will automatically be 
generated correctly during the release process.

    npm run release
