import React, { Component } from 'react'
import img_android from '../../../public/images/gun2.jpg'

class Image extends Component {
  render() {
    return (
      <div className="product-responsive">
        <div className="product-responsive-image-block">
          <a>
            <img src={img_android} alt="android-n" width="600" height="400" />
          </a>
        </div>
      </div>
    )
  }
}

export default Image