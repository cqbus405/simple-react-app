import React, { Component, PropTypes } from 'react'
import ProductElement from '../components/product/ProductElement'
import { fetchProductIfNeeded } from '../actions/action-product'
import { getUserInfo } from '../utils/util-auth'
import { getProductInfo, setProductInfo } from '../utils/util-product'
import { connect } from 'react-redux'

class ProductPage extends Component {
  componentDidMount() {
    const { fetchProduct, params } = this.props
    let id = params.productId
    if (id) {
      setProductInfo({
        id
      })
    } else {
      id = getProductInfo().id
    }
    const token = getUserInfo().token
    fetchProduct(id, token)
  }

  render() {
    const { product } = this.props

    return (
      <div>
        {product ? <ProductElement product={product} /> : null}
      </div>
    )
  }
}

ProductPage.propTypes = {
  product: PropTypes.object
}

const mapStateToProps = state => {
  return {
    product: state.product.data
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: (id, token) => {
      dispatch(fetchProductIfNeeded({
        id,
        token
      }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage)