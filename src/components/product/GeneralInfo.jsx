import React, { Component, PropTypes } from 'react'
import img_android from '../../../public/images/android-n.jpg'

class GeneralInfo extends Component {
  render() {
    return (
      <div className="general-info">
        <img src={img_android} alt="img_android" />
        <div className="inner-container">
          <div className="title">Title</div>
          <div className="id">Id: 32</div>
          <div className="created">Created: 2012-08-17 00:00:00am</div>
          <div className="modified">Modified: 2012-09-10 01:11:12am</div>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
}

export default GeneralInfo