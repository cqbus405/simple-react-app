import React, { Component, PropTypes } from 'react'
import { formatText } from '../../utils/util-general'

class Description extends Component {
  render() {
    const { description } = this.props

    const formattedDescription = formatText(description)

    return (
      <div className="product-responsive">
        <div className="product-responsive-block">
          <p className="product-responsive-title">Description</p>
          <p className="product-responsive-content" dangerouslySetInnerHTML={{__html: formattedDescription}}></p>
        </div>
      </div>
    )
  }
}

Description.propTypes = {
  description: PropTypes.string
}

export default Description