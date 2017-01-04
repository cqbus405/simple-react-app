import React, { Component, PropTypes } from 'react'
import { getState, setState } from '../../utils/util-product'

class PicsAndVideoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoUrl: ''
    }

    this.handleVideoUrlChange = this.handleVideoUrlChange.bind(this)
  }

  render() {
    return (
      <div className="form-pics-and-video">
        <form>
        </form>
      </div>
    )
  }

  handleVideoUrlChange(event) {
    this.setState({
      videoUrl: event.target.value
    })
  }
}

export default PicsAndVideoForm