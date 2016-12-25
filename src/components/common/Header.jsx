import React, { Component, PropTypes } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header-style">
        <ul>
          <li>John Chan</li>
          <li className="button-container">
            <div> 
              <button>Create</button>
              <button>Logout</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header