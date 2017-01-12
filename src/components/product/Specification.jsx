import React, { Component, PropTypes } from 'react'
import { formatText } from '../../utils/util-general'

class Specification extends Component {
  render() {
    const { specification } = this.props

    const formattedSpecification = formatText(specification)

    return (
      <div className="product-item-container">
        <p className="product-responsive-title">Specification</p>
        <p className="product-responsive-content" dangerouslySetInnerHTML={{__html: formattedSpecification}}></p>
      </div>
    )
  }
}

Specification.propTypes = {
  specification: PropTypes.string
}

export default Specification