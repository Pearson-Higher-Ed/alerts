//
// Change any reference to 'MyClassName' to your real class name!
//

import React, { PropTypes } from 'react';
import {intlShape, injectIntl, defineMessages} from 'react-intl';
//
// Default messages are en-US
//
const messages = defineMessages({
  placeholder: {
    id: 'placeholder',
    description : 'this is a stub message',
    defaultMessage: 'Hello world'
  }
});


class MyClassName extends React.Component {

  //
  // Add additional prop types to validate the properties passed to this component!
  // This is defined using an ES7 class property (transpiled by Babel Stage 0)
  //
  static propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.shape({
      elementId: PropTypes.string.isRequired,
      greeter: PropTypes.string.isRequired,
      locale: PropTypes.string
    })
  };

  constructor(props) {

    super(props);

    //
    // The following state is a demo, and try not to use state if not necessary for your component
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
  // The following event handler is just a demo and should be removed:
  _change = e => {
    this.setState({text: e.target.value});
  };

  render() {

    const {formatMessage} = this.props.intl;
    const {text} = this.state;

    return (
      <div>
        {this.props.data.greeter} says "{formatMessage(messages.placeholder)}"

        <div>
          Your response? <input type="text" value={text} onInput={this._change} />
        </div>
      </div>
    )
  }

}

export default injectIntl(MyClassName); // Inject this.props.intl into the component context
