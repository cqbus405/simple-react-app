import React, { Component, PropTypes } from 'react'

class VideoUrl extends Component {
  render() {
    const { videoUrl } = this.props

    return (
      <div className="product-item-container">
        <p className="product-responsive-title">Video Url</p>
        <p className="product-responsive-link">{videoUrl}</p>
      </div>
    )
  }
}

VideoUrl.propTypes = {
  videoUrl: PropTypes.string
}

export default VideoUrl