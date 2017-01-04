import React, { Component, PropTypes } from 'react'
import { getProductInfo } from '../../utils/util-product'
import { getUserInfo } from '../../utils/util-auth'

class Buttons extends Component {
  render() {
    const { deleteProduct, createProduct, goBack, btnNames, product } = this.props
    const isDetailPage = btnNames.type === 0;
    const token = getUserInfo().token

    let id
    if (isDetailPage) {
      id = getProductInfo().id
    } else {
      product.cover_picture = 'https://images.apple.com'
    }

    return (  
      <div className="buttons">
        <button onClick={isDetailPage ? null : () => createProduct(token, product)}>{btnNames.btn1}</button>
        <button onClick={isDetailPage ? () => deleteProduct(id, token) : () => goBack()}>{btnNames.btn2}</button>
      </div>
    )
  }
}

Buttons.propTypes = {
  deleteProduct: PropTypes.func,
  createProduct: PropTypes.func,
  btnNames: PropTypes.object
}

export default Buttons