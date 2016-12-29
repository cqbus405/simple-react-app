import React, { Component, PropTypes } from 'react'
import { formatText } from '../../utils/util-general'

class Specification extends Component {
  render() {
    const { specification } = this.props

    const formattedSpecification = formatText(specification)

    return (
      <div className="product-responsive">
        <div className="product-responsive-block">
          <p className="product-responsive-title">Specification</p>
          <div className="product-responsive-content" dangerouslySetInnerHTML={{__html: formattedSpecification}}></div>
        </div>
      </div>
    )
  }
}

Specification.propTypes = {
  specification: PropTypes.string
}

export default Specification