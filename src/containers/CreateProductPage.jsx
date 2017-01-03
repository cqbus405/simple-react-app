import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import GeneralInfoForm from '../components/product/GeneralInfoForm'
import PicsAndVideosForm from '../components/product/PicsAndVideoForm'
import Buttons from '../components/product/Buttons'
import { addProductIfNeeded } from '../actions/action-product'


class CreateProductPage extends Component {
  render() {
    const { createProduct } = this.props

    const btnNames = {
      type: 1,
      btn1: 'Create',
      btn2: 'Cancel'
    }

    return (
      <div>
        <div className="create-product-style">
          <GeneralInfoForm />
          <PicsAndVideosForm />
        </div>
        <Buttons btnNames={btnNames} createProduct={createProduct} />
      </div>
    )
  }
}

CreateProductPage.propTypes = {
  createProduct: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    createProduct: (token, product) => {
      dispatch(addProductIfNeeded({
        token,
        product
      }))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateProductPage)