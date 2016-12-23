import React, { Component, PropTypes } from 'react'
import PageItem from './PageItem'

class Pages extends Component {
  render() {
    const { total, arr } = this.props

    return (
      <ul>
        <li><a href="#">«</a></li>
        {arr ? arr.map(i => <PageItem i={i} />) : null}
        <li><a href="#">»</a></li>
      </ul>
    )
  }
}

Pages.propTypes = {
  total: PropTypes.number,
  arr: PropTypes.arrayOf(
    PropTypes.number
  )
}

export default Pages