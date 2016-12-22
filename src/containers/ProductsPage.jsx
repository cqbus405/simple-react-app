import React, { Component, PropTypes } from 'react'
import ProductsTable from '../components/products/ProductsTable'
import { connect } from 'react-redux'
import { fetchProductsIfNeeded } from '../actions/action-products'
import { getToken } from '../utils/util-auth'

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
    return (
      <div>
        <ProductsTable products={this.props.products} />
      </div>
    )
  }
}

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  )
}

const mapStateToProps = state => {
  return {
    products: state.productsInfo.products
  }
}

export default connect(
  mapStateToProps
)(ProductsPage)