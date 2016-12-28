import React, { Component, PropTypes } from 'react'
import img_android from '../../../public/images/gun2.jpg'

class GeneralInfo extends Component {
  render() {
    return (
      <div className="general-info">
        <div className="title">Title</div>
        <div className="id">Id: 32</div>
        <div className="created">Created: 2012-08-17 00:00:00am</div>
        <div className="modified">Modified: 2012-09-10 01:11:12am</div>
      </div>
    )
  }
}

export default GeneralInfo