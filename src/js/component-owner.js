//
// In React, an owner is the component that sets the props of other components, if desired.
// See https://facebook.github.io/react/docs/multiple-components.html for composability.
//

import React, { PropTypes } from 'react';
import {intlShape, injectIntl, defineMessages} from 'react-intl';

//
// Default messages are 'en'
//
const messages = defineMessages({
  buttonText: {
    id: 'buttonText',
    description : 'this is demo button text',
    defaultMessage: 'say hello'
  },
  placeholder: {
    id: 'placeholder',
    description : 'this is a demo placeholder',
    defaultMessage: 'placeholder'
  }
});


class ComponentOwner extends React.Component {

  //
  // Modify or add prop types to validate the properties passed to this component!
  // This is defined using an ES7 class property (transpiled by Babel Stage 0)
  //
  static propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.shape({
      elementId: PropTypes.string.isRequired,
      locale: PropTypes.string
    })
  };

  constructor(props) {

    super(props);

    //
    // FOR DEMO - use state when you need to respond to user input, a server request or the passage of time
    //
    this.state = {
      text: ''
    };
  }

  //
  // Note that combining the fat arrow syntax with ES7 class properties (transpiled by Babel Stage 0), we eliminate the
  // need to do manual binding of the 'this' context in event handlers or callbacks. React binds all other contexts
  // as expected.
  //
  // FOR DEMO and should be removed:
  _change = () => {
    this.setState({text: this.props.data.greeting});
  };

  render() {

    const {formatMessage} = this.props.intl;
    //
    // FOR DEMO and should be refactored for your purposes:
    //
    const {text} = this.state;

    return (
      <div className="pe-inlineblock">
        <button className="pe-btn pe-btn--primary" onClick={this._change}>{formatMessage(messages.buttonText)}</button>
        &nbsp;
        <span className="pe-input">
          <input type="text" value={text} placeholder={formatMessage(messages.placeholder)} />
        </span>
      </div>
    )
  }

}

export default injectIntl(ComponentOwner); // Inject this.props.intl into the component context
