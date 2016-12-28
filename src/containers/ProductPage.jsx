import React, { Component, PropTypes } from 'react'
import GeneralInfo from '../components/product/GeneralInfo'
import Description from '../components/product/Description'
import Specification from '../components/product/Specification'
import Buttons from '../components/product/Buttons'
import Images from '../components/product/Images'

class ProductPage extends Component {
  render() {
    return (
      <div className="product-container">
        <GeneralInfo />
        <div className="product-inner-container">
          <Images />
          <Description />
          <Specification />
          <div className="clearfix"></div>
        </div>
        <Buttons />
      </div>
    )
  }
}

export default ProductPage