import React, { Component, PropTypes } from 'react'
import PageItem from './PageItem'
import { pageConst } from '../../constants/constants'

class Pages extends Component {
  render() {
    const { arr, pages, handlePageBtnClick } = this.props

    return (
      <div className="pagination">
        <ul>
          <li><button onClick={() => handlePageBtnClick(pageConst.PREV, pages, null)}>«</button></li>
          {arr ? arr.map((i, key) => <PageItem i={i} key={key} handlePageBtnClick={handlePageBtnClick} />) : null}
          <li><button onClick={() => handlePageBtnClick(pageConst.NEXT, pages, null)}>»</button></li>
        </ul>
      </div>
    )
  }
}

Pages.propTypes = {
  pages: PropTypes.number,
  arr: PropTypes.arrayOf(
    PropTypes.number
  ),
  handlePageBtnClick: PropTypes.func
}

export default Pages