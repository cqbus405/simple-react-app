import React, { Component, PropTypes } from 'react'
import Header from '../common/Header'
import GeneralInfo from './GeneralInfo'
import Description from './Description'
import Specification from './Specification'
import VideoUrl from './VideoUrl'
import Images from './Images'
import ic_back from '../../../public/images/ic_back.svg'
import ic_delete from '../../../public/images/ic_delete.svg'
import ic_edit2 from '../../../public/images/ic_edit2.svg'
import { getUserInfo } from '../../utils/util-auth'
import { getProductInfo } from '../../utils/util-product'

class ProductElement extends Component {
  render() {
    const { product, deleteProduct, redirectTo, imgArr } = this.props

    const generalInfoObj = {
      id: product.id,
      name: product.name,
      created: product.created,
      modified: product.modified
    }

    const videoUrl = product.videoUrl

    const description = product.description

    const specification = product.specification

    const id = getProductInfo().id
    const token = getUserInfo().token

    return (
      <div className="product-container">
        <Header />
        <div className="product-btns">
          <input src={ic_back} type="image" onClick={() => redirectTo('/products')} />
          <input src={ic_edit2} type="image" onClick={() => redirectTo('/product/edit')} />
          <input src={ic_delete} type="image" onClick={() => deleteProduct(id, token)} />
        </div>
        <div className="product-inner-container">
          <div className="product-inner-container2">
            <div className="product-inner-container3">
              <div className="product-inner-container4">
                  <div className="product-inner-container5">
                    <div className="product-item-container"><GeneralInfo generalInfo={generalInfoObj} /></div>
                    <div className="product-item-container"><Images imgArr={imgArr} /></div>
                    <div className="product-item-container"><VideoUrl videoUrl={videoUrl} /></div>
                    <div className="product-item-container"><Description description={description} /></div>
                    <div className="product-item-container"><Specification specification={specification} /></div>
                    <div className="product-item-container"><div className="product-item-container-add-btn">Add new tag...</div></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProductElement.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func,
  redirectTo: PropTypes.func,
  imgArr: PropTypes.array
}

export default ProductElement