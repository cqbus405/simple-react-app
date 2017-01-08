import React, { Component, PropTypes } from 'react'
import GeneralInfo from './GeneralInfo'
import Description from './Description'
import Specification from './Specification'
import Images from './Images'
import ic_back from '../../../public/images/ic_back.svg'
import ic_delete from '../../../public/images/ic_delete.svg'
import ic_edit2 from '../../../public/images/ic_edit2.svg'
import { getUserInfo } from '../../utils/util-auth'
import { getProductInfo } from '../../utils/util-product'

class ProductElement extends Component {
  render() {
    const { product, deleteProduct, redirectTo } = this.props

    const generalInfoObj = {
      id: product.id,
      name: product.name,
      created: product.created,
      modified: product.modified
    }

    const descriptionObj = {
      description: product.description,
      videoUrl: product.videoUrl
    }

    const specification = product.specification

    const id = getProductInfo().id
    const token = getUserInfo().token

    return (
      <div className="product-container">
        <GeneralInfo generalInfo={generalInfoObj} />
        <div className="product-btns">
          <input src={ic_back} type="image" onClick={() => redirectTo('/products')} />
          <input src={ic_edit2} type="image" onClick={() => redirectTo('/product/edit')} />
          <input src={ic_delete} type="image" onClick={() => deleteProduct(id, token)} />
        </div>
        <div className="product-inner-container">
          <Images />
          <Description description={descriptionObj} />
          <Specification specification={specification} />
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

ProductElement.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func,
  btnNames: PropTypes.object,
  redirectTo: PropTypes.func
}

export default ProductElement