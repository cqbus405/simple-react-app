import React, { Component, PropTypes } from 'react'
import ProductsTable from '../components/products/ProductsTable'
import { connect } from 'react-redux'

class ProductsPage extends Component {
  render() {
    return (
      <div>
        <ProductsTable userInfo={this.props.userInfo} />
      </div>
    )
  }
}

ProductsPage.propTypes = {
  userInfo: PropTypes.object
}

const mapStateToProps = state => {
  return {
    userInfo: state.loginFeedback.user
  }
}

export default connect(
  mapStateToProps
)(ProductsPage)