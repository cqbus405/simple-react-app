import React, { Component, PropTypes } from 'react'
import Indicator from '../components/common/Indicator'
import LoginForm from '../components/login/LoginForm'
import ErrorMessage from '../components/common/ErrorMessage'
import { connect } from 'react-redux'
import jinx from '../../public/images/jinx.jpeg'
import { doLoginIfNeeded } from '../actions/action-user'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this._login = this._login.bind(this)
  }

  render() {
    return (
      <div className="login-page__wrapper">
        <LoginForm onSubmit={this._login} />
        {this.props.loginFeedback.status === 500 ? <ErrorMessage errorMsg={this.props.loginFeedback.msg} /> : null}
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
    loginFeedback: state.user
  }
}

export default connect(
  mapStateToProps
)(LoginPage)