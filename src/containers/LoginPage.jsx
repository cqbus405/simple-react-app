import React, { Component, PropTypes } from 'react'
import Indicator from '../components/Indicator'
import LoginForm from '../components/LoginForm'
import Message from '../components/Message'
import { connect } from 'react-redux'
import img_gun from '../../public/images/gun.jpg'
import { doLoginIfNeeded } from '../actions/action-login'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this._login = this._login.bind(this)
  }

  render() {
    return (
      <div className="login-page__wrapper">
        <img className="login-page__img" src={img_gun} alt="gun" />
        {this.props.loginFeedback.status === 500 ? <Message errorMsg={this.props.loginFeedback.msg} /> : null}
        <LoginForm onSubmit={this._login} />
        {this.props.loginFeedback.isFetching ? <Indicator /> : null}
      </div>
    )
  }

  _login(email, password) {
    this.props.dispatch(doLoginIfNeeded({
      email,
      password
    }))
  }
}

LoginPage.propTypes = {
  status: PropTypes.number,
  msg: PropTypes.string,
  isFetching: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    loginFeedback: state.loginFeedback
  }
}

export default connect(
  mapStateToProps
)(LoginPage)