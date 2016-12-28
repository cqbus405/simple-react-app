import React, { Component, PropTypes } from 'react'
import GeneralInfo from '../components/product/GeneralInfo'
import Description from '../components/product/Description'
import Specification from '../components/product/Specification'
import Buttons from '../components/product/Buttons'

class ProductPage extends Component {
  render() {
    return (
      <div className="product-container">
        <GeneralInfo />
        <div className="inner-container">
          <Specification />
          <Description />
        </div>
        <Buttons />
      </div>
    )
  }
}

export default ProductPage