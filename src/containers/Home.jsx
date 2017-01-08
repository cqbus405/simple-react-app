import React, { Component } from 'react'
import { Link } from 'react-router'
import { getUserInfo } from '../utils/util-auth'
import ic_1 from '../../public/images/5.gif'
import ic_enter from '../../public/images/ic_enter.svg'

class Home extends Component {
  render() {
    const loggedIn = !!getUserInfo()

    let path

    if (loggedIn) {
      path = '/products'
    } else {
      path = '/login'
    }

    return (
      <div>
        <div className="home-img">
          <img src={ic_1} alt="ic_1" />
        </div>
        <div className="home-link-wrapper">
          <Link className="home-link" to={path}><img src={ic_enter} alt="ic_enter" /></Link>
        </div>
      </div>
    )
  }
}

export default Home