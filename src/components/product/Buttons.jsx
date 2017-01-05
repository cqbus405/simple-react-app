import React, { Component, PropTypes } from 'react'
import { getProductInfo } from '../../utils/util-product'
import { getUserInfo } from '../../utils/util-auth'

class Buttons extends Component {
  render() {
    const { deleteProduct, createProduct, goBack, btnNames, product, editProduct, redirectTo } = this.props
    const token = getUserInfo().token

    let leftBtnFunc
    let rightBtnFunc

    const btnType = btnNames.type;

    switch (btnType) {
      case 0:
        const id = getProductInfo().id
        leftBtnFunc = () => redirectTo('/product/edit')
        rightBtnFunc = () => deleteProduct(id, token)
        break

      case 1:
        product.cover_picture = 'https://images.apple.com'
        leftBtnFunc = () => createProduct(token, product)
        rightBtnFunc = () => goBack()
        break

      case 2:
        product.cover_picture = 'https://images.apple.com'
        leftBtnFunc = () => editProduct(token, product)
        rightBtnFunc = () => goBack()
        break

      default:
        break
    }

    return (  
      <div className="buttons">
        <button onClick={leftBtnFunc}>{btnNames.leftBtnName}</button>
        <button onClick={rightBtnFunc}>{btnNames.rightBtnName}</button>
      </div>
    )
  }
}

Buttons.propTypes = {
  deleteProduct: PropTypes.func,
  createProduct: PropTypes.func,
  btnNames: PropTypes.object,
  editProduct: PropTypes.func,
  redirectTo: PropTypes.func
}

export default Buttons