import React, { Component, PropTypes } from 'react'
import Images from './Images'
import VideoUrl from './VideoUrl'

class Media extends Component {
  render() {
    const { mediaObj } = this.props

    return (
      <div className="product-responsive">
        <div className="product-responsive-block">
          <Images imgArr={mediaObj.imgArr} />
          <VideoUrl videoUrl={mediaObj.videoUrl} />
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  mediaObj: PropTypes.object,
  imgArr: PropTypes.array
}

export default Media