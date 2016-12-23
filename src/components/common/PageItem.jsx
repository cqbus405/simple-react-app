import React, { Component, PropTypes } from 'react'

class PageItem extends Component {
  render() {
    const { i } = this.props

    return (
      <li>{i}</li>
    )
  }
}

PageItem.propTypes = {
  i: PropTypes.i
}

export default PageItem