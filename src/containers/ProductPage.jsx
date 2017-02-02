import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProductElement from '../components/product/ProductElement'
import { fetchProductIfNeeded, deleteProductIfNeeded } from '../actions/action-product'
import { getUserInfo } from '../utils/util-auth'
import { getProductInfo, setProductInfo } from '../utils/util-product'
import { redirectTo } from '../utils/util-general'
import { getFile } from '../utils/util-file'

class ProductPage extends Component {
  render() {
    const { product, deleteProduct } = this.props

    const imgArr = getFile()

    return (
      <div id="product">
        {product ? <ProductElement product={product} deleteProduct={deleteProduct} redirectTo={redirectTo} imgArr={imgArr} /> : null}
      </div>
    )
  }

  componentDidMount() {
    document.getElementById('root').className='root'

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

  componentWillUnmount() {
    document.getElementById('root').className=''
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