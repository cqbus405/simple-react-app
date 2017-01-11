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
          Made By <mark>Q</mark> With <img src={ic_love} alt="ic_love" />
        </div>
        <div className="home-link-year">
          2017
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