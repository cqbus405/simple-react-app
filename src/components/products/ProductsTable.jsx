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
              <th>Id</th>
              <th>Title</th>
              <th>Type</th>
              <th>Created</th>
              <th>Modified</th>
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