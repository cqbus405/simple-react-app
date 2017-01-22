import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import Images from './Images'
import ic_circle_image from '../../../public/images/ic_image.svg'

class FileUploadForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      files: []
    }

    this.onFileDrop = this.onFileDrop.bind(this)
  }

  render() {
    const { fileUploadConfig } = this.props

    return (
      <div>
        {this.state.files.length > 0 
          ? <Images files={this.state.files} />
          : null
        }
        <Dropzone
          className="file-upload-form-style" 
          multiple={fileUploadConfig.multiple}
          accept={fileUploadConfig.accept}
          onDrop={this.onFileDrop}>
          <img src={ic_circle_image} alt="ic_circle_image" />
          <p>Drag & Drop</p>
        </Dropzone>
      </div>
    )
  }

  onFileDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
    this.setState({
      files: acceptedFiles
    })
  }
}

FileUploadForm.propTypes = {
  fileUploadConfig: PropTypes.object
}

export default FileUploadForm

