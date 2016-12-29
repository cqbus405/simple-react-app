import React, { Component, PropTypes } from 'react'
import GeneralInfo from './GeneralInfo'
import Description from './Description'
import Specification from './Specification'
import Buttons from './Buttons'
import Images from './Images'

class ProductElement extends Component {
  render() {
    const { product } = this.props

    const generalInfoObj = {
      id: product.id,
      name: product.name,
      created: product.created,
      modified: product.modified
    }
    const descriptionObj = {
      description: product.description,
      videoUrl: product.videoUrl
    }

    const specification = product.specification

    return (
      <div className="product-container">
        <GeneralInfo generalInfo={generalInfoObj} />
        <div className="product-inner-container">
          <Images />
          <Description description={descriptionObj} />
          <Specification specification={specification} />
          <div className="clearfix"></div>
        </div>
        <Buttons /> 
      </div>
    )
  }
}

ProductElement.propTypes = {
  product: PropTypes.object
}

export default ProductElement