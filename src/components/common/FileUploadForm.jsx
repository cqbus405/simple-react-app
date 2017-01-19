import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'

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
          ? <div>
                {this.state.files.map((file, key) => <img src={file.preview} alt={key} key={key} />)}
            </div>
          : null
        }
        <Dropzone
          className="file-upload-form-style" 
          multiple={fileUploadConfig.multiple}
          accept={fileUploadConfig.accept}
          onDrop={this.onFileDrop}>
          <p>Drop files here or click to upload.</p>
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

