/////////////////////////////////////  REMOVE  /////////////////////////////////////

CONTRIBUTORS: DELETE THIS SECTION FROM README AFTER COMPLETING THE STEPS

**Assumption**: You understand how to use Git and have the git CLI correctly installed in your development environment.

1. Follow these [directions](https://help.github.com/articles/caching-your-github-password-in-git/#platform-all) to remove 
the need to manually authenticate to GitHub on every network request. This enables the use of any automated npm scripts.

2. Create your new repository in GitHub (open source - default) or, if necessary, Pearson BitBucket (private source). In
order to be able to create a GitHub repo, send a request to pearson-design-accelerator@pearson.com to be invited to 
github.com/Pearson-Higher-Ed.

3. Perform these steps in your development environment:


    git clone https://github.com/Pearson-Higher-Ed/component-archetype.git [name_of_your_new_component]
    
    cd [name_of_your_new_component]
    
    git remote set-url origin [url_of_new_component_repository]
    
    git remote -v
    
    
Once you've verified that the remote origin now looks correct for your repo, do the initial push:

    git push -u origin master

//////////////////////////////////// ^ REMOVE ^ ////////////////////////////////////

# New Component Name

## Summary

This is an executive summary of why my component exists and what it does.

## External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component.

This component targets the styling in the Pearson Elements SDK.

## Usage for Consuming Application

See the demo directory for example usage.
     
### Bundle (Simplest)

**NOTE: If you choose to use the native CustomEvent for eventing, you must 
[polyfill](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for Internet Explorer!**

The transpiled, minified bundle will be available in /node_modules in the component /build directory.

### or Build

There are use cases where you might need to roll the component into your application's build process.

CommonJS example:

    COMMONJS EXAMPLE GOES HERE
        
Example webpack configuration (requires correct configuration and installation of loader dependencies):

    EXAMPLE GOES HERE
        
### Component Configuration

Example:

    {
        elementId: 'dom-node',
        locale: 'fr-CA'
    }
   
### Eventing

<table>
    <tr>
        <th>Event</th><th>detail</th>
    </tr
    <tr>
        <td></td><td></td>
    </tr>
</table>

## Contributing

### Overview

This component is constructed using [React](https://facebook.github.io/react/) written in ES6 (ES2015) and styled with 
SCSS, all transpiled by [Babel](http://babeljs.io/).

The project is also set up for unit testing with code coverage, i18n with 
[React Intl](https://github.com/yahoo/react-intl/wiki), and hot reloading.

### Continuous Integration

To hook up your project to Origami continuous integration, a one-time manual process is currently required. Please send 
the request to pearson-design-accelerator@pearson.com.

### Development Toolchain

**Note: Bower is disallowed in Origami v2**

- [Node.js](http://nodejs.org) v4+
- [Ruby](https://www.ruby-lang.org/en/) for SCSS (Macs typically ship with Ruby by default)
- [webpack](https://webpack.github.io/)
    - Babel 6 transpiles ES6 and JSX
    - Bundle javascript, styles and icon
    - ESLint configured with .eslintrc

Recommendation: If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) 
to manage them.

#### Can I see the project working before I change anything?

In your local repo:

    npm install
    npm run dev

Navigate to **localhost:8081/demo** - the bundle is served in memory, which is why you may not see the file in /build.

#### Hot Reload

Hot module replacement is activated in the webpack dev server; saved changes to src are automatically reloaded in the 
browser.

#### Build

Build the bundle manually at any time.

    npm run build

#### Test

The project is wired to unit test with the [Jest framework](https://facebook.github.io/jest/) and 
[Enzyme](http://airbnb.io/enzyme/), a JavaScript testing utility for React that makes it easier to assert, manipulate, 
and traverse your component's output.

Linting will run automatically prior to executing the test suite.

    npm test    

#### Code Coverage

On GitHub, there is integration with the code coverage service [Coveralls](https://coveralls.io/github/Pearson-Higher-Ed).
To see the coverage results locally, execute:

    npm run test-cov
    
Shoot for 100% code coverage.

#### Governance

Determine if your component passes a series of checks for Origami v2 compliance.

    npm run verify

#### Translations

It is expected that applications will pass in translated text for dynamic content.

For text inherent to the component (e.g. button text or input placeholder), add JSON translations for each supported 
locale to the translations folder. 

Retain the `locale` configuration parameter.

#### Publish to Pearson Public Registry

Do not manually version or tag your project. Instead, when you are ready to publish an update to npm, manually invoke the
release script in the master branch. It handles all of that and invokes CI publishing to npm on behalf of the pearson-ux
 npm account. 
 
Additionally, there is no need to manually maintain a change log - if you follow the 
[commitizen](https://commitizen.github.io/cz-cli/) conventions for commit messages, a change log will automatically be 
generated correctly during the release process.

    npm run release
    