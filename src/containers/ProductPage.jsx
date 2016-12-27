import React, { Component, PropTypes } from 'react'
import GeneralInfo from '../components/product/GeneralInfo'
import Description from '../components/product/Description'
import Specification from '../components/product/Specification'
import Buttons from '../components/product/Buttons'

class ProductPage extends Component {
  render() {
    // return (
    //   <div>
    //     <GeneralInfo />
    //     <div className="container">
    //       <Description />
    //       <Specification />
    //       <Buttons />
    //     </div>
    //   </div>
    // )
    return (
      <div className="container">
        <GeneralInfo />
        <Description />
        <Specification />
        <Buttons />
      </div>
    )
  }
}

export default ProductPage