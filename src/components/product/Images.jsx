import React, { Component, PropTypes } from 'react'
import Image from './Image'

class Images extends Component {
  render() {
    return (
      <div className="product-responsive">
        <div className="product-responsive-image-block">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

export default Images