import React, { Component, PropTypes } from 'react'

class ProductItem extends Component {
  render() {
    const { product } = this.props

    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.created}</td>
        <td>{product.modified}</td>
        <td><button>Edit</button></td>
      </tr>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.object
}

export default ProductItem