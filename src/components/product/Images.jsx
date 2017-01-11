import React, { Component } from 'react'
import Image from './Image'
import AddImage from './AddImage'

class Images extends Component {
  render() {
    const { imgArr } = this.props

    return (
      <div>
        <div className="product-image-block-title">Pictures</div>
        <div className="product-responsive-image-block">
          {imgArr ?  imgArr.map((img, key) => <Image img={img} key={key} />) : null}
          <AddImage />
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

export default Images