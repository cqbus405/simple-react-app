import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import Images from './Images'
import ic_circle_image from '../../../public/images/ic_image.svg'
import { setFile } from '../../utils/util-file'

class FileUploadForm extends Component {
  constructor(props) {
    super(props)

    this.onFileDrop = this.onFileDrop.bind(this)
  }

  render() {
    const { fileUploadConfig, files, removeFile } = this.props

    return (
      <div>
        {files && files.length > 0 
          ? <Images files={files} removeFile={removeFile} />
          : null
        }
        <Dropzone
          className="file-upload-form-style" 
          multiple={fileUploadConfig.multiple}
          accept={fileUploadConfig.accept}
          onDrop={this.onFileDrop}>
          <img src={ic_circle_image} alt="img" />
          <p>Drag & Drop</p>
        </Dropzone>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  onFileDrop(acceptedFiles, rejectedFiles) {
    const { addFile, files } = this.props

    let filesToAdd = files.concat(acceptedFiles)
    const arrLength = filesToAdd.length

    if (arrLength > 9) {
      filesToAdd.splice(9, arrLength - 9)
    }

    addFile(filesToAdd) // store to redux
    setFile(filesToAdd) // store to client
  }
}

FileUploadForm.propTypes = {
  fileUploadConfig: PropTypes.object,
  addFile: PropTypes.func,
  files: PropTypes.array,
  removeFile: PropTypes.func
}

export default FileUploadForm