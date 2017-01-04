import React, { Component, PropTypes } from 'react'
import { formatText } from '../../utils/util-general'

class Description extends Component {
  render() {
    const { description } = this.props
    const descriptionStr = description.description
    const videoUrl = description.videoUrl

    const formattedDescription = formatText(descriptionStr)

    return (
      <div className="product-responsive">
        <div className="product-responsive-block">
          <div>
            <p className="product-responsive-title">Description</p>
            <p className="product-responsive-content" dangerouslySetInnerHTML={{__html: formattedDescription}}></p>
          </div>
          <div>
            <p className="product-responsive-title">Video Url</p>
            <p><a className="product-responsive-link" href={videoUrl}>{videoUrl}</a></p>
          </div>
        </div>
      </div>
    )
  }
}

Description.propTypes = {
  description: PropTypes.object
}

export default Description