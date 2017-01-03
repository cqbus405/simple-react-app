import React, { Component, PropTypes } from 'react'
import { getProductInfo } from '../../utils/util-product'
import { getUserInfo } from '../../utils/util-auth'

class Buttons extends Component {
  render() {
    const { deleteProduct, createProduct, btnNames } = this.props
    const isDetailPage = btnNames.type === 0;
    const token = getUserInfo().token
    const product = null;

    let id
    if (isDetailPage) {
      id = getProductInfo().id
    }

    return (  
      <div className="buttons">
        <button onClick={isDetailPage ? null : null}>{btnNames.btn1}</button>
        <button onClick={isDetailPage ? () => deleteProduct(id, token) : () => createProduct(token, product)}>{btnNames.btn2}</button>
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