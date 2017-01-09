import React, { Component, PropTypes } from 'react'
import Indicator from '../components/common/Indicator'
import LoginForm from '../components/login/LoginForm'
import ErrorMessage from '../components/common/ErrorMessage'
import { connect } from 'react-redux'
import { doLoginIfNeeded } from '../actions/action-user'
import { getVerificationCodeIfNeeded } from '../actions/action-captcha'

class LoginPage extends Component {
  render() {
    const { getVerificationCode, verificationCode, doLogin} = this.props

    return (
      <div className="login-page__wrapper">
        <LoginForm onSubmit={doLogin} getVerificationCode={getVerificationCode} verificationCode={verificationCode} />
        {this.props.loginFeedback.status === 500 ? <ErrorMessage errorMsg={this.props.loginFeedback.msg} /> : null}
        {this.props.loginFeedback.isFetching ? <Indicator /> : null}
      </div>
    )
  }

  componentDidMount() {
    const { getVerificationCode } = this.props
    getVerificationCode()
  }
}

LoginPage.propTypes = {
  status: PropTypes.number,
  msg: PropTypes.string,
  isFetching: PropTypes.bool,
  getVerificationCode: PropTypes.func,
  verificationCode: PropTypes.string,
  doLogin: PropTypes.func
}

function mapStateToProps(state) {
  return {
    loginFeedback: state.user,
    verificationCode: state.captcha.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doLogin: (email, password, verificationCode) => dispatch(doLoginIfNeeded({
      email,
      password,
      verificationCode
    })),
    getVerificationCode: () => dispatch(getVerificationCodeIfNeeded())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)