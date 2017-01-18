import React, { Component } from 'react'
import { Link } from 'react-router'
import { getUserInfo } from '../utils/util-auth'
import ic_enter from '../../public/images/ic_enter.svg'
// import ic_tomato from '../../public/images/ic_tomato.svg'
import ic_love from '../../public/images/ic_love.svg'

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
      <div>
        <div className="home-link-title">
          M<b className="mark">a</b>n<b className="mark">a</b>gement S<b className="mark">y</b>stem
        </div>
        <div className="home-link-year">
          Made by Q with <img src={ic_love} alt="ic_love" /> @2017
        </div>
        <div className="home-link-wrapper">
          <Link className="home-link" to={path}><img src={ic_enter} alt="ic_enter" /></Link>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    document.getElementById('body').className=''
  }
}

export default Home