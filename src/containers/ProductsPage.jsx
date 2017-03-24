import React, { Component, PropTypes } from 'react'
import ProductsTable from '../components/products/ProductsTable'
import { connect } from 'react-redux'
import { fetchProductsIfNeeded } from '../actions/action-products'
import { doLogoutIfNeeded } from '../actions/action-user'
import { getUserInfo } from '../utils/util-auth'
import { getCurrentPage } from '../utils/util-pagination'
import Pages from '../components/common/Pages'
import Message from '../components/common/Message'
import Header from '../components/common/Header'
import Indicator2 from '../components/common/Indicator2'
import { PAGE_ITEM_COUNT } from '../constants/constants'

class ProductsPage extends Component {
  componentDidMount() {
    const { handlePageBtnClick, pages } = this.props
    const currentPage = getCurrentPage(null, pages, null)

    handlePageBtnClick(null, pages, currentPage)
  }

  render() {
    const { pages, products, handlePageBtnClick, handleLogoutBtnClick, fetching } = this.props
    let arr = []
    for(let i = 1; i <= pages; ++i) {
      arr.push(i)
    }

    return (
      <div>
        <Header handleLogoutBtnClick={handleLogoutBtnClick} />
        <ProductsTable products={products} />
        {fetching 
          ? <Indicator2 /> 
          : (pages !== 0 
            ? <Pages pages={pages} arr={arr} handlePageBtnClick={handlePageBtnClick} /> 
            : <Message msg='No item' />)
        }
      </div>
    )
  }
}

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ),
  pages: PropTypes.number,
  handlePageBtnClick: PropTypes.func,
  fetching: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    products: state.products.data ? state.products.data.documents : null,
    pages: state.products.data ? state.products.data.pages : 0,
    fetching: state.products.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlePageBtnClick: (action, pages, page) => {
      let currentPage = getCurrentPage(action, pages, page)
      let currentPageInt = parseInt(currentPage, 10)

      if (currentPageInt !== 0) {
        const userInfo = getUserInfo()
        const token = userInfo.token

        dispatch(fetchProductsIfNeeded({
          page: currentPageInt,
          count: PAGE_ITEM_COUNT,
          token: token
        }))
      }
    },
    handleLogoutBtnClick: () => {
      dispatch(doLogoutIfNeeded())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage)