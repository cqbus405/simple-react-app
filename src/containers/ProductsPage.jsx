import React, { Component, PropTypes } from 'react'
import ProductsTable from '../components/products/ProductsTable'
import { connect } from 'react-redux'
import { fetchProductsIfNeeded } from '../actions/action-products'
import { getToken } from '../utils/util-auth'
import { getCurrentPage } from '../utils/util-pagination'
import Pages from '../components/common/Pages'
import Message from '../components/common/Message'
import Header from '../components/common/Header'
import { PAGE_ITEM_COUNT } from '../constants/constants'

class ProductsPage extends Component {
  componentDidMount() {
    const { handlePageBtnClick, pages } = this.props
    const currentPage = getCurrentPage(null, pages, null)

    handlePageBtnClick(null, pages, currentPage)
  }

  render() {
    const { pages, products, handlePageBtnClick } = this.props
    let arr = []
    for(let i = 1; i <= pages; ++i) {
      arr.push(i)
    }

    return (
      <div>
        <Header />
        <ProductsTable products={products} />
        {pages !== 0 ? <Pages pages={pages} arr={arr} handlePageBtnClick={handlePageBtnClick} /> : <Message msg='No item' />}
      </div>
    )
  }
}

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ),
  pages: PropTypes.number,
  handlePageBtnClick: PropTypes.func
}

const mapStateToProps = state => {
  return {
    products: state.productsInfo.data ? state.productsInfo.data.products : null,
    pages: state.productsInfo.data ? state.productsInfo.data.pages : 0
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlePageBtnClick: (action, pages, page) => {
      let currentPage = getCurrentPage(action, pages, page)

      if (currentPage != 0) {
        dispatch(fetchProductsIfNeeded({
          page: currentPage,
          count: PAGE_ITEM_COUNT,
          token: getToken()
        }))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage)

