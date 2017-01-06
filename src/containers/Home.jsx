import React, { Component } from 'react'
import { Link } from 'react-router'
import { getUserInfo } from '../utils/util-auth'
import img_fish from '../../public/images/bg.png'

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
      <div className="home-img">
        <img src={img_fish} alt="fish" />
        <div className="home-link-wrapper">
          <Link className="home-link" to={path}>ENTER</Link>
        </div>
      </div>
    )
  }
}

export default Home