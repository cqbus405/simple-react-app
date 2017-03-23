import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import ic_edit from '../../../public/images/ic_edit.svg'

class ProductItem extends Component {
  render() {
    const { product } = this.props
    const url = `/products/product/${product.id}`

    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td></td>
        <td>{product.created}</td>
        <td>{product.modified}</td>
        <td>
          <Link className='products-link' to={url}><img src={ic_edit} alt="ic_edit" /></Link>
        </td>
      </tr>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.object
}

export default ProductItem