import React, { Component, PropTypes } from 'react'
import { pageConst } from '../../constants/constants'
import { getPage } from '../../utils/util-pagination'

class PageItem extends Component {
  render() {
    const { i, handlePageBtnClick } = this.props
    const currentPage = getPage()
    const currentPageNum = JSON.parse(currentPage)

    return (
      <li><button className={i === currentPageNum ? 'active' : ''} onClick={() => handlePageBtnClick(pageConst.PAGE, null, i)}>{i}</button></li>
    )
  }
}

PageItem.propTypes = {
  i: PropTypes.number,
  handlePageBtnClick: PropTypes.func
}

export default PageItem