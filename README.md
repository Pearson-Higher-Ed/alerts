# REMOVE THIS SECTION ONCE COMPLETE

**Assumption**: You understand how to use Git and have the git CLI correctly installed in your development environment.

1. Follow these [directions](https://help.github.com/articles/caching-your-github-password-in-git/#platform-all) to remove 
the need to manually authenticate to GitHub on every network request. This enables the use of any automated npm scripts.

2. Create your new repository in GitHub (open source - default) or, if needed, Pearson BitBucket (private source).

3. Perform these steps in your terminal:


    git clone https://github.com/Pearson-Higher-Ed/component-archetype.git <name_of_your_new_component>
    
    cd <name_of_your_new_component>
    
    git remote set-url origin <url_of_new_component_repository>
    
    git remote -v
    
    
Once you've verified that the remote origin now looks correct for your repo, do the initial push:

    git push -u origin master


/////////////////////////////////// ^ REMOVE ^ ///////////////////////////////////

# New Component Name

## Summary

This is an executive summary of why my component exists and what it does.

## External Dependencies

**React and ReactDOM (v0.14 or v15) are external dependencies required to use this component.**

Other dependencies:

- <ANY OTHER DEPENDENCIES LISTED HERE>

## Usage for Consuming Application

Do as described in this section from the consuming application:
     
    > npm i --save <new component> react@latest react-dom@latest

### Bundle (Simplest)

The transpiled, minified bundle will be available in /node_modules/es6-react-component/build.

    EXAMPLE INITIALIZATION GOES HERE

### or Build

There are use cases where building the component into your application is necessary.

Example javascript using CommonJS:

    EXAMPLE GOES HERE
    
Example webpack configuration (requires installation of correct dependencies, loaders, and config).

    EXAMPLE GOES HERE
        
### Configuration

    EXAMPLE GOES HERE
   
### Eventing

<table>
    <tr>
        <th>CustomEvent</th><th>detail</th>
    </tr>
</table>


## Contributing

### Overview

This component is constructed using React written in ES6 (and some ES7) and styled with SCSS, all transpiled by Babel.

The project is also set up for unit testing with code coverage, i18n with React Intl, and hot reloading.

### Continuous Integration

To hook up your project to Origami continuous integration, a one-time manual process is currently required. Please send 
the request to the Pearson Design Accelerator team (pearson-design-accelerator@pearson.com).

### Development Toolchain

- [Node.js](http://nodejs.org) v4+
- [Ruby](https://www.ruby-lang.org/en/) (Macs typically ship with Ruby by default)
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

Now open a browser tab to **localhost:8081/demo**, and the bundle is served in memory.

#### Hot Reload

Hot module replacement is activated in the webpack dev server; changes to js/scss are automatically reloaded in the browser.

#### Build

Build the bundle manually at any time.

    npm run build

#### Test

The project is wired to unit test with the Jest framework and Enzyme, a JavaScript testing utility for React that makes 
it easier to assert, manipulate, and traverse your component's output. Shoot for 100% code coverage.

Note this will automatically run linting prior to executing the test suite.

    npm test    

#### Translations

For text inherent to the component, add translations to JSON files for each locale to /translations. Ensure the 
component's configuration accepts a locale parameter.

#### Publish to Pearson Public Registry

There is no need to manually tag your project. The release script will handle that and CI publishing to npm for you.

When ready for publishing, execute from your master branch:

    npm run release
    