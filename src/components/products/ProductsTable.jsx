import React, { Component, PropTypes } from 'react'

class ProductsTable extends Component {
  render() {
    return (
      <div>
        <p>{this.props.userInfo.token}</p>
      </div>
    )
  }
}

ProductsTable.propTpyes = {
  userInfo: PropTypes.object.isRequired
}

export default ProductsTable