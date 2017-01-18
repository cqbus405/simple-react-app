import { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'

class FileUploadForm extends Component {
  constructor(props) {
    super(props)

    this.onFileDrop = this.onFileDrop.bind(this)
  }

  render() {
    const { fileUploadConfig } = this.props

    return (
      <Dropzone 
        multiple = {fileUploadConfig.multiple}
        accept = {fileUploadConfig.accept}
        onDrop = {this.onFileDrop}>
        <p>Try dropping some files here, or click to select files to upload.</p>
      </Dropzone>
    )
  }

  const onFileDrop = (acceptedFiles, rejectedFiles) => {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
  }
}

FileUploadForm.propTypes = {
  fileUploadConfig: PropTypes.object
}

export default FileUploadForm

