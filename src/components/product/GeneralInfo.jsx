import React, { Component, PropTypes } from 'react'

class GeneralInfo extends Component {
  render() {
    const { generalInfo } = this.props

    return (
      <div className="product-item-container">
        <p className="product-responsive-title">General</p>
        <div className="product-responsive-content">
          <div><b>Title</b>: {generalInfo.name}</div>
          <div><b>Id</b>: {generalInfo.id}</div>
          <div><b>Created</b>: {generalInfo.created}</div>
          <div><b>Modified</b>: {generalInfo.modified}</div>
        </div>
      </div>
    )
  }
}

GeneralInfo.propTypes = {
  generalInfo: PropTypes.object
}

export default GeneralInfo