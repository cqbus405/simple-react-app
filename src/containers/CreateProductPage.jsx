import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import CreateProductForm from '../components/product/CreateProductForm'
import { addProductIfNeeded } from '../actions/action-product'

class CreateProductPage extends Component {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
  }

  render() {
    const { createProduct, errMsg, status } = this.props

    const btnNames = {
      type: 1,
      btn1: 'Create',
      btn2: 'Cancel'
    }

    return (
      <div>
        <CreateProductForm status={status} errMsg={errMsg} btnNames={btnNames} createProduct={createProduct} goBack={this.goBack} />
      </div>
    )
  }

  goBack() {
    browserHistory.goBack()
  }
}

CreateProductPage.propTypes = {
  createProduct: PropTypes.func,
  errMsg: PropTypes.string
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