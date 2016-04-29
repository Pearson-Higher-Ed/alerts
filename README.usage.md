# Usage

You must have [Node v4+](https://nodejs.org) installed in your development toolchain.

Install from npm and save in your package.json:

    npm install @pearson-components/[component-name] --save

## External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component.

This component targets the styling in the Pearson Elements SDK.

If you require the use of polyfills to support browsers like Internet Explorer (e.g. CustomEvent), please use 
[Polyfill.io](https://cdn.polyfill.io/v2/docs/examples) to construct your polyfill requests for specific features.

## How to Consume in an Application

See the /demo directory for example usage.
     
### Bundle (Simplest)

The transpiled, minified bundle will be available in /node_modules in the component /build directory.

Eventing example:

```js
[EXAMPLE GOES HERE]
```

### or Build

There are use cases where you might need to roll the component into your application's build process.

CommonJS example:

```js
[EXAMPLE GOES HERE]
```

Example webpack configuration (requires correct configuration and installation of loader dependencies):

```js
[EXAMPLE GOES HERE]
```
    
### Component Configuration

    [CONFIG EXAMPLE GOES HERE]

### Eventing

<table>
    <tr>
        <th>Event</th><th>detail</th>
    </tr
    <tr>
        <td></td><td></td>
    </tr>
</table>
