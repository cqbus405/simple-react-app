import React, { Component, PropTypes } from 'react'

class PicsAndVideoForm extends Component {
  render() {
    return (
      <div className="form-pics-and-video">
        <h3>Pictures and video</h3>
        <form>
          <input type="text" name="video_url" placeholder="Video url" />
        </form>
      </div>
    )
  }
}

export default PicsAndVideoForm