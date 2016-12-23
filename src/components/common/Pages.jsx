import React, { Component, PropTypes } from 'react'
import PageItem from './PageItem'

class Pages extends Component {
  render() {
    const { total, arr } = this.props

    return (
      <div className="pagination">
        <ul>
          <li><button>«</button></li>
          {arr ? arr.map((i, key) => <PageItem i={i} key={key} />) : null}
          <li><button>»</button></li>
        </ul>
      </div>
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