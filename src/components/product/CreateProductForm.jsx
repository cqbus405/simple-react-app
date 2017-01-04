import React, { Component, PropTypes } from 'react'
import Buttons from './Buttons'
import ErrorMessage from '../common/ErrorMessage'

class CreateProductForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      specification: '',
      videoUrl: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSpecificationChange = this.handleSpecificationChange.bind(this)
    this.handleVideoUrlChange = this.handleVideoUrlChange.bind(this)
  }

  render() {
    const { status, errMsg, btnNames, createProduct, goBack } = this.props

    let product = {
      name: this.state.name,
      description: this.state.description,
      specification: this.state.specification,
      videoUrl: this.state.videoUrl
    }

    return (
      <div className="create-product-form">
        <form>
          <h3>General Information</h3>
          <input type="text" name="title" placeholder="Title" onChange={this.handleTitleChange} />
          <br />
          <textarea name="description" placeholder="Description" onChange={this.handleDescriptionChange} />
          <br />
          <textarea name="specification" placeholder="Specification" onChange={this.handleSpecificationChange} />
          <h3>Pictures and video</h3>
          <input type="text" name="video_url" placeholder="Video url" onChange={this.handleVideoUrlChange} />
        </form>
        {status === 500 ? <ErrorMessage errorMsg={errMsg} /> : null}
        <Buttons createProduct={createProduct} goBack={goBack} btnNames={btnNames} product={product} />
      </div>
    )
  }

  handleTitleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleSpecificationChange(event) {
    this.setState({
      specification: event.target.value
    })
  }

  handleVideoUrlChange(event) {
    this.setState({
      videoUrl: event.target.value
    })
  }
}

CreateProductForm.propTypes = {
  status: PropTypes.number,
  errMsg: PropTypes.string,
  btnNames: PropTypes.object,
  createProduct: PropTypes.func,
  goBack: PropTypes.func
}

export default CreateProductForm