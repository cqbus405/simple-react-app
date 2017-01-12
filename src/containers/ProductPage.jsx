import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProductElement from '../components/product/ProductElement'
import { fetchProductIfNeeded, deleteProductIfNeeded } from '../actions/action-product'
import { getUserInfo } from '../utils/util-auth'
import { getProductInfo, setProductInfo } from '../utils/util-product'
import { redirectTo } from '../utils/util-general'
import pic_android from '../../public/images/pic_android.jpg'
import pic_android2 from '../../public/images/pic_android2.jpg'
import pic_dota from '../../public/images/pic_dota.jpg'
import pic_jinx from '../../public/images/pic_jinx.jpeg'
import pic_jinx2 from '../../public/images/pic_jinx2.jpeg'

class ProductPage extends Component {
  render() {
    const { product, deleteProduct } = this.props

    const imgArr = [
      pic_android,
      pic_android2,
      pic_dota,
      pic_jinx,
      pic_jinx2,
      pic_android,
      pic_android2,
      pic_dota,
      pic_jinx,
      pic_jinx2
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