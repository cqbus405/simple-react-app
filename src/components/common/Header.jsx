import React, { Component, PropTypes } from 'react'
import { getUserInfo } from '../../utils/util-auth'
import { Link } from 'react-router'
import ic_quit from '../../../public/images/ic_logout.svg'
import ic_create from '../../../public/images/ic_create.svg'

class Header extends Component {
  render() {
    const { handleLogoutBtnClick } = this.props
    const name = getUserInfo().name
    const url = '/product/create'

    return (
      <div className="header-style">
        <h2>Hello, {name}</h2>
        <div> 
          <div className="header-inner-container">
            <Link className="header-create-btn" to={url}><img src={ic_create} alt="ic_create" /></Link>
            <input onClick={handleLogoutBtnClick} type="image" src={ic_quit} />
          </div>
        </div>
      </div>
    )
  }
}

Header.propsTypes = {
  handleLogoutBtnClick: PropTypes.func
}

export default Header