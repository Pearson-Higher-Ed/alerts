import React, { PropTypes, Component } from 'react';
import { intlShape, injectIntl }       from 'react-intl';
// import {messages}                   from './defaultMessages';
import Modal                           from 'react-modal'



class ComponentOwner extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.shape({
      elementId: PropTypes.string.isRequired,
      locale: PropTypes.string
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen      : false,
      customStyles :{
        overlay : {
          backgroundColor   : 'rgba(0, 0, 0, 0.7)'
        },
        content : {
          top          : '50%',
          left         : '50%',
          right        : 'auto',
          bottom       : 'auto',
          marginRight  : '-50%',
          transform    : 'translate(-50%, -50%)',
          borderRadius : '0px',
          padding      : '0px'

        }
      }}

    this.openModal      = _openModal.bind(this)
    this.closeModal     = _closeModal.bind(this)

  }


  render() {

    // const {formatMessage} = this.props.intl

    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.state.customStyles} >

          <div className="modalHeader">
            <i className="pe-icon--times close-dropdown pointer close" tabIndex="0" onClick={this.closeModal}></i>
            <h2 className="heading">Basic Title</h2>
          </div>

          <div className="modalContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lorem tellus. Proin a lacus ipsum.
              Cras scelerisque massa augue, ut efficitur eros dignissim in. Vivamus massa ex, dictum sit amet est
              at, facilisis venenatis risus. Nullam ipsum diam, ullamcorper ac aliquet sed, sagittis vitae nisi.
              Curabitur molestie, nisi quis pellentesque interdum, dui sapien finibus justo, vel tempus dolor tortor
              eu leo. Quisque molestie mi tempus augue consequat porttitor. Proin eget odio sed mi facilisis elementum
              quis ac elit.
             </p>
          </div>

          <span className="modalFooter">
            <button onClick={console.log('save')} className="modalSave pe-btn pe-btn--primary">Save</button>
            <button onClick={this.closeModal} className="modalCancel pe-btn">Cancel</button>
          </span>

        </Modal>
      </div>
    )

  }

}

export default injectIntl(ComponentOwner)



function _openModal() { this.setState({modalIsOpen: true}) }

function _closeModal() { this.setState({modalIsOpen: false}) }
