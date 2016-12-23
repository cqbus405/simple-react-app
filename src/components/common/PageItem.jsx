import React, { Component, PropTypes } from 'react'

class PageItem extends Component {
  render() {
    const { i } = this.props

    return (
      <li><button className={i === 1 ? 'active' : ''}>{i}</button></li>
    )
  }
}

PageItem.propTypes = {
  i: PropTypes.number
}

export default PageItem