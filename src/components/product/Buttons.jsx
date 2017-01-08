import React, { Component, PropTypes } from 'react'
import { getUserInfo } from '../../utils/util-auth'

class Buttons extends Component {
  render() {
    const { createProduct, goBack, btnNames, product, editProduct } = this.props
    const token = getUserInfo().token

    let leftBtnFunc
    let rightBtnFunc

    const btnType = btnNames.type;

    switch (btnType) {
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
  createProduct: PropTypes.func,
  btnNames: PropTypes.object,
  editProduct: PropTypes.func,
}

export default Buttons