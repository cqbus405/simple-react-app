import React, { Component, PropTypes } from 'react'
import ic_close from '../../../public/images/ic_close.svg'

class Image extends Component {
  render() {
    const { image, key } = this.props

    return (
      <div className="file-upload-form-image-container">
        <img className="file-upload-form-image-close" src={ic_close} alt='ic_close' />
        <img className="file-upload-form-image-style" src={image} alt={key} />
      </div>
    )
  }
}

Image.propTypes = {
  image: PropTypes.string,
  key: PropTypes.number
}

export default Image