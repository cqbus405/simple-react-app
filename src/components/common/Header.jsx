import React, { Component, PropTypes } from 'react'
import { getUserInfo } from '../../utils/util-auth'

class Header extends Component {
  render() {
    const { handleLogoutBtnClick } = this.props

    const name = getUserInfo().name

    return (
      <div className="header-style">
        <ul>
          <li>Hello, {name}</li>
          <li className="button-container">
            <div> 
              <button>Create</button>
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