import React, { Component, PropTypes } from 'react'
import ProductsTable from '../components/products/ProductsTable'
import { connect } from 'react-redux'
import { fetchProductsIfNeeded } from '../actions/action-products'
import { getToken } from '../utils/util-auth'
import Pages from '../components/common/Pages'
import Message from '../components/common/Message'

class ProductsPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const token = getToken()
    dispatch(fetchProductsIfNeeded({
      page: 1,
      count: 10,
      token: token
    }))
  }

  render() {
    const { total, products } = this.props
    let arr = []
    for(let i = 1; i <= total; ++i) {
      arr[i - 1] = i
    }

    console.log('===> arr: ' + arr)

    return (
      <div>
        <ProductsTable products={products} />
        {this.props.total !== 0 ? <Pages total={total} arr={arr} /> : <Message msg='No item' />}
      </div>
    )
  }
}

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ),
  total: PropTypes.number
}

const mapStateToProps = state => {
  return {
    products: state.productInfo ? state.productsInfo.data.products : null,
    total: state.productInfo ? state.productsInfo.data.total : 0
  }
}

export default connect(
  mapStateToProps
)(ProductsPage)