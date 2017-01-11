import React, { Component, PropTypes } from 'react'

class VideoUrl extends Component {
  render() {
    const { videoUrl } = this.props

    return (
      <div>
        <p className="product-responsive-title">Video Url</p>
        <a className="product-responsive-link" href={videoUrl}>{videoUrl}</a>
      </div>
    )
  }
}

VideoUrl.propTypes = {
  videoUrl: PropTypes.string
}

export default VideoUrl