import React, { Component } from 'react'
import ic_add from '../../../public/images/ic_add.svg'

class AddImage extends Component {
  render() {
    return (
      <div className="product-responsive">
        <div className="product-add-btn">
          <a>
            <img src={ic_add} alt="ic_add" />
          </a>
        </div>
      </div>
    )
  }
}

export default AddImage