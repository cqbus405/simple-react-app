import React, { Component } from 'react'
import { Link } from 'react-router'
import { getUserInfo } from '../utils/util-auth'
import ic_enter from '../../public/images/ic_enter.svg'

class Home extends Component {
  componentDidMount() {
    document.getElementById('body').className='home-style'
  }

  render() {
    const loggedIn = !!getUserInfo()

    let path

    if (loggedIn) {
      path = '/products'
    } else {
      path = '/login'
    }

    return (
      <div className="home-link-wrapper">
        <Link className="home-link" to={path}><img src={ic_enter} alt="ic_enter" /></Link>
      </div>
    )
  }

  componentWillUnmount() {
    document.getElementById('body').className=''
  }
}

export default Home