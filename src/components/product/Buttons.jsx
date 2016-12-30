import React, { Component, PropTypes } from 'react'
import { getProductInfo } from '../../utils/util-product'
import { getUserInfo } from '../../utils/util-auth'

class Buttons extends Component {
  render() {
    const { deleteProduct } = this.props
    const id = getProductInfo().id
    const token = getUserInfo().token

    return (  
      <form className="buttons">
        <button>Edit</button>
        <button onClick={() => deleteProduct(id, token)}>Delete</button>
      </form>
    )
  }
}

export default Buttons