import React, { Component, PropTypes } from 'react'
import { getUserInfo } from '../../utils/util-auth'
import { Link } from 'react-router'
import ic_quit from '../../../public/images/ic_logout.svg'
import ic_create from '../../../public/images/ic_create.svg'
import pic_jinx from '../../../public/images/pic_jinx.jpeg'

class Header extends Component {
  render() {
    const { handleLogoutBtnClick } = this.props
    const name = getUserInfo().name
    const url = '/product/create'

    return (
      <ul className="header-style">
        <li>
          <img className="header-avatar" src={pic_jinx} alt="pic_jinx" />
        </li>
        <li>
          <div className="header-name">Hello, {name}</div>
        </li>
        <li style={{float: "right"}}>
          <div className="header-action-container">
            <Link className="header-create-btn" to={url}>
              <img src={ic_create} alt="ic_create" />
            </Link>  
            <input className="header-logout-btn" onClick={handleLogoutBtnClick} type="image" src={ic_quit} />
          </div>
        </li>
      </ul>
    )
  }
}

Header.propsTypes = {
  handleLogoutBtnClick: PropTypes.func
}

export default Header