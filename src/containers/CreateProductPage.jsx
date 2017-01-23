import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CreateProductForm from '../components/product/CreateProductForm'
import Header from '../components/common/Header'
import { addProductIfNeeded } from '../actions/action-product'
import { goBack } from '../utils/util-general'
import { btnTypes } from '../constants/constants'

class CreateProductPage extends Component {
  render() {
    const { createProduct, errMsg, status } = this.props
    const btnType = btnTypes.createProductPage

    return (
      <div>
        <Header />
        <CreateProductForm status={status} errMsg={errMsg} btnNames={btnType} createProduct={createProduct} goBack={goBack} />
      </div>
    )
  }
}

CreateProductPage.propTypes = {
  createProduct: PropTypes.func,
  errMsg: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    errMsg: state.product.msg,
    status: state.product.status
  }
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
  mapStateToProps,
  mapDispatchToProps
)(CreateProductPage)