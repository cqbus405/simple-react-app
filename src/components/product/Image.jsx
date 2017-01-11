import React, { Component, PropTypes } from 'react'

class Image extends Component {
  render() {
    const { img } = this.props

    return (
      <div className="product-responsive">
        <div>
          <a>
            <img src={img} alt="img" />
          </a>
        </div>
      </div>
    )
  }
}

Image.propTypes = {
  imgArr: PropTypes.array
}

export default Image