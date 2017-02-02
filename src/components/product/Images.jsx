import React, { Component, PropTypes } from 'react'
import Image from './Image'

class Images extends Component {
  render() {
    const { imgArr } = this.props

    return (
      <div className="product-list-item">
        <p className="product-responsive-title">Pictures</p>
        <div className="product-inner-image-container">
          {imgArr ? imgArr.map((img, key) => <Image img={img.preview} key={key} />) : null}
        </div>
      </div>
    )
  }
}

Images.propTypes = {
  imgArr: PropTypes.array
}

export default Images