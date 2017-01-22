import React, { Component, PropTypes } from 'react'
import Image from './Image'

class Images extends Component {
  render() {
    const { files } = this.props

    return (
      <div className="file-upload-form-images-container">
        {files.map((file, key) => <Image image={file.preview} key={key} />)}
      </div>
    )
  }
}

Image.propTypes = {
  files: PropTypes.array
}

export default Images