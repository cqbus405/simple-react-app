import React, { Component, PropTypes } from 'react'
import PageItem from './PageItem'
import { pageConst } from '../../constants/constants'
import ic_left_arrow from '../../../public/images/ic_left_arrow_16.svg'
import ic_right_arrow from '../../../public/images/ic_right_arrow_16.svg'

class Pages extends Component {
  render() {
    const { arr, pages, handlePageBtnClick } = this.props

    return (
      <div className="pagination">
        <ul>
          <li><button onClick={() => handlePageBtnClick(pageConst.PREV, pages, null)}><img src={ic_left_arrow} alt="left arrow" /></button></li>
          {arr ? arr.map((i, key) => <PageItem i={i} key={key} handlePageBtnClick={handlePageBtnClick} />) : null}
          <li><button onClick={() => handlePageBtnClick(pageConst.NEXT, pages, null)}><img src={ic_right_arrow} alt="right arrow" /></button></li>
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