import React, { Component, PropTypes } from 'react'
import ProductItem from './ProductItem';

class ProductsTable extends Component {
  render() {
    const { products } = this.props

    return (
      <div className="products-table">
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>TYPE</th>
              <th>CREATED</th>
              <th>STATUS</th>
              <th></th>
            </tr>
            {products ? products.map((product, id) => <ProductItem key={id} product={product} />) : null}
          </tbody>
        </table>
      </div>
    )
  }
}

ProductsTable.propTpyes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  )
}

export default ProductsTable