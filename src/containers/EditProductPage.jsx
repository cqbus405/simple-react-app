import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { goBack } from '../utils/util-general'
import CreateProductForm from '../components/product/CreateProductForm'
import Header from '../components/common/Header'
import { editProductIfNeeded } from '../actions/action-product'
import { btnTypes } from '../constants/constants'
import { getProductInfo } from '../utils/util-product'

class EditProductPage extends Component {
  render() {
    const { errMsg, status, editProduct } = this.props
    const btnType = btnTypes.editProductPage

    const product = getProductInfo()

    return (
      <div>
        <Header />
        <CreateProductForm status={status} errMsg={errMsg} btnNames={btnType} goBack={goBack} editProduct={editProduct} product={product} />
      </div>
    )
  }
}

EditProductPage.propTypes = {
  errMsg: PropTypes.string,
  editProduct: PropTypes.func,
  status: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    errMsg: state.product.msg,
    status: state.product.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editProduct: (token, product) => {
      dispatch(editProductIfNeeded({
        token,
        product
      }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductPage)