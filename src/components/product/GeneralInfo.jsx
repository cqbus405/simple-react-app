import React, { Component, PropTypes } from 'react'

class GeneralInfo extends Component {
  render() {
    const { generalInfo } = this.props

    return (
      <div className="general-info">
        <div className="title">{generalInfo.name}</div>
        <div className="id">Id: {generalInfo.id}</div>
        <div className="created">Created: {generalInfo.created}</div>
        <div className="modified">Modified: {generalInfo.modified}</div>
      </div>
    )
  }
}

GeneralInfo.propTypes = {
  generalInfo: PropTypes.object
}

export default GeneralInfo