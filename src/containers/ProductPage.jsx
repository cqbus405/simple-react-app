import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProductElement from '../components/product/ProductElement'
import { fetchProductIfNeeded, deleteProductIfNeeded } from '../actions/action-product'
import { getUserInfo } from '../utils/util-auth'
import { getProductInfo, setProductInfo } from '../utils/util-product'
import { redirectTo } from '../utils/util-general'

class ProductPage extends Component {
  render() {
    const { product, deleteProduct } = this.props

    const imgArr = [
      'pic_android.jpg',
      'pic_android2.jpg',
      'pic_dota.jpg',
      'pic_jinx.jpeg',
      'pic_jinx2.jpeg'
    ]

    return (
      <div>
        {product ? <ProductElement product={product} deleteProduct={deleteProduct} redirectTo={redirectTo} imgArr={imgArr} /> : null}
      </div>
    )
  }

  componentDidMount() {
    const { fetchProduct, params } = this.props
    let id = params.id
    if (!id) {
      id = getProductInfo().id
    } else {
      setProductInfo({
        id
      })
    }
    const token = getUserInfo().token
    fetchProduct(id, token)
  }
}

ProductPage.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func,
  fetchProduct: PropTypes.func
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
    },
    deleteProduct: (id, token) => {
      dispatch(deleteProductIfNeeded({
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