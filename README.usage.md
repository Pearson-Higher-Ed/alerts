# [Component Name] Usage

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

    [COMMONJS EXAMPLE GOES HERE]
        
Example webpack configuration (requires correct configuration and installation of loader dependencies):

    [EXAMPLE GOES HERE]
        
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
