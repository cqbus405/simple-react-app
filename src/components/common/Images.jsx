import React, { Component, PropTypes } from 'react'
import Image from './Image'

class Images extends Component {
  render() {
    const { files, removeFile } = this.props

    return (
      <div className="file-upload-form-images-container">
        {files.map((file, index, array) => {
          return <Image image={file.preview} key={index} index={index} removeFile={removeFile} files={files} />
        })}
      </div>
    )
  }
}

Image.propTypes = {
  files: PropTypes.array,
  removeFile: PropTypes.func
}

export default Images