import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class ProductItem extends Component {
  render() {
    const { product } = this.props
    const url = `/products/${product.id}`

    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.created}</td>
        <td>{product.modified}</td>
        <td>
          <Link className='products-link' to={url}>Detail</Link>
        </td>
      </tr>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.object
}

export default ProductItem