import React, { Component, PropTypes } from 'react'

class ProductsTable extends Component {
  render() {
    const { products } = this.props

    return (
      <div>
        <p>{JSON.stringify(products)}</p>
        <table>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CREATED</th>
            <th>MODIFIED</th>
          </tr>
          {products.map((product, i) => 
            <tr>
              <th>{product.id}</th>
              <th>{product.name}</th>
              <th>{product.created}</th>
              <th>{product.modified}</th>
            </tr>
          )}
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