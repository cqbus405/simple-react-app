import React, { Component, PropTypes } from 'react'
import ic_close from '../../../public/images/ic_close.svg'

class Image extends Component {
  constructor(props) {
    super(props)

    this._removeFile = this._removeFile.bind(this)
  }

  render() {
    const { image } = this.props

    return (
      <div className="file-upload-form-image-container">
        <img className="file-upload-form-image-close" src={ic_close} alt='ic_close' onClick={this._removeFile} />
        <img className="file-upload-form-image-style" src={image} alt="img" />
      </div>
    )
  }

  _removeFile() {
    const { removeFile, index, files } = this.props
    let filesToStore = files
    filesToStore.splice(index, 1)
    removeFile(filesToStore)
  }
}

Image.propTypes = {
  image: PropTypes.string,
  removeFile: PropTypes.func,
  index: PropTypes.number,
  files: PropTypes.array
}

export default Image