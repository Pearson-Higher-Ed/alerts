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
      fileLoaderAccept : 'image/*',
      customStyles :{
        overlay : {
          backgroundColor : 'black',
          opacity         : 1
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
    // this.afterOpenModal = _afterOpenModal.bind(this)
    this.openfileDialog = _openfileDialog.bind(this)

  }


  render() {

    // const {formatMessage} = this.props.intl

    return (
      <div>
        <input type="file" id="fileLoader" />
        <button onClick={this.openfileDialog}>Open File</button>
        <br />
        <br />
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.state.customStyles} >

          <header className="modalHeader">
            <h1 ref="subtitle" className="heading">Edit Photo</h1>
            <i className="pe-icon--times close-dropdown pointer close" tabIndex="0" onClick={this.closeModal}></i>
          </header>
          <h2>Nice Photo! Now use the photo editing tool to add that final touch.</h2>
          <br />
          <span>
            <button onClick={console.log('submit')} className="modalSubmit pe-btn pe-btn--primary">Save</button>
            <button onClick={this.closeModal} className="modalCancel pe-btn">Cancel</button>
          </span>
        </Modal>
      </div>
    )

  }

}

export default injectIntl(ComponentOwner)




// _afterOpenModal() { this.refs.subtitle.style.color = '#f00' }

function _openModal() { this.setState({modalIsOpen: true}) }

function _closeModal() { this.setState({modalIsOpen: false}) }

function _openfileDialog() {
  const fileLoader  = document.getElementById('fileLoader')
  fileLoader.accept = this.state.fileLoaderAccept
  fileLoader.click()
}
