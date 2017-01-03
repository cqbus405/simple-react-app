import React, { Component, PropTypes } from 'react'
import { getState, setState } from '../../utils/util-product'

class PicsAndVideoForm extends Component {
  constructor(props) {
    super(props)

    this.handleVideoUrlChange = this.handleVideoUrlChange.bind(this)
  }

  render() {
    return (
      <div className="form-pics-and-video">
        <h3>Pictures and video</h3>
        <form>
          <input type="text" name="video_url" placeholder="Video url" onChange={this.handleVideoUrlChange} />
        </form>
      </div>
    )
  }

  handleVideoUrlChange(event) {
    const videoUrl = event.target.value
    const state = getState('cp')
    if (state) {
      state[videoUrl] = videoUrl
    } else {
      setState('cp', {
        videoUrl
      })
    }
  }
}

export default PicsAndVideoForm