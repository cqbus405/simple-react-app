import React, { Component, PropTypes } from 'react'
import { getUserInfo } from '../../utils/util-auth'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    const { handleLogoutBtnClick } = this.props
    const name = getUserInfo().name
    const url = '/products/create'

    return (
      <div className="header-style">
        <ul>
          <li>Hello, {name}</li>
          <li className="button-container">
            <div> 
              <Link className="header-create-btn" to={url}>Create</Link>
              <button onClick={handleLogoutBtnClick}>Logout</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

Header.propsTypes = {
  handleLogoutBtnClick: PropTypes.func
}

export default Header