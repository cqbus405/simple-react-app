import React, { Component, PropTypes } from 'react'
import Buttons from './Buttons'
import ErrorMessage from '../common/ErrorMessage'
import FileUploadForm from '../common/FileUploadForm'
import { fileUploadConfig as conf } from '../../constants/constants'

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
    const { status, errMsg, btnNames, createProduct, goBack, editProduct, product, addFile, files, removeFile } = this.props

    let editedProduct = {
      name: this.state.name,
      description: this.state.description,
      specification: this.state.specification,
      video_url: this.state.videoUrl
    }

    let title
    let description
    let specification
    let videoUrl

    if (product) {
      editedProduct.id = product.id
      title = product.name
      description = product.description
      specification = product.specification
      videoUrl = product.videoUrl
    }

    const imageUploadConfig = conf.imageUploadConfig
    
    return (
      <div className="create-product-form">
        <form>
          <div className="create-product-form-title">General Information</div>
          <input type="text" name="title" placeholder="Title" onChange={this.handleTitleChange} defaultValue={title ? title : ''} />
          <br />
          <textarea name="description" placeholder="Description" onChange={this.handleDescriptionChange} defaultValue={description ? description : ''} />
          <br />
          <textarea name="specification" placeholder="Specification" onChange={this.handleSpecificationChange} defaultValue={specification ? specification : ''} />
          <div className="create-product-form-title">Pictures and video</div>
          <FileUploadForm fileUploadConfig={imageUploadConfig} addFile={addFile} files={files} removeFile={removeFile} />
          <input type="text" name="video_url" placeholder="Video url" onChange={this.handleVideoUrlChange} defaultValue={videoUrl ? videoUrl : ''} />
        </form>
        {status === 500 ? <ErrorMessage errorMsg={errMsg} /> : null}
        <Buttons createProduct={createProduct} goBack={goBack} btnNames={btnNames} product={editedProduct} editProduct={editProduct} />
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
  goBack: PropTypes.func,
  editProduct: PropTypes.func,
  product: PropTypes.object,
  addFile: PropTypes.func,
  files: PropTypes.array,
  removeFile: PropTypes.func
}

export default CreateProductForm