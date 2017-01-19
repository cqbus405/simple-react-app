import React, { Component, PropTypes } from 'react'

class VideoUrl extends Component {
  render() {
    const { videoUrl } = this.props

    return (
      <div className="product-item-container">
        <p className="product-responsive-title">VIDEO URL</p>
        <p className="product-responsive-link"><a href={videoUrl}>{videoUrl}</a></p>
      </div>
    )
  }
}

VideoUrl.propTypes = {
  videoUrl: PropTypes.string
}

export default VideoUrl