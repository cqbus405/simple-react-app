import React, { Component, PropTypes } from 'react'
import Indicator from '../components/common/Indicator'
import LoginForm from '../components/login/LoginForm'
import ErrorMessage from '../components/common/ErrorMessage'
import { connect } from 'react-redux'
import { doLoginIfNeeded } from '../actions/action-user'
import { getVerificationCodeIfNeeded } from '../actions/action-captcha'
import ic_love from '../../public/images/ic_love.svg'
import bg_engineer from '../../public/images/bg_engineer.jpg'

class LoginPage extends Component {
  render() {
    const { getVerificationCode, verificationCode, doLogin} = this.props

    return (
      <div className="login-page-flex-box">
        <div className="login-page-flex-form-container">
          <div className="login-page-flex-form-title">Multithink</div>
          <LoginForm onSubmit={doLogin} getVerificationCode={getVerificationCode} verificationCode={verificationCode} />
          {this.props.loginFeedback.status === 500 ? <ErrorMessage errorMsg={this.props.loginFeedback.msg} /> : null}
          {this.props.loginFeedback.isFetching ? <Indicator /> : null}
          <div className="login-page-flex-form-footer">
            Made by Q with <img src={ic_love} alt="ic_love" /> @2017
          </div>
        </div>
        <div className="login-page-flex-image-container">
          <div className="login-page-flex-text">
            M<b className="mark-style">a</b>n<b className="mark-style">a</b>gement<br/>S<b className="mark-style">y</b>stem
          </div>
          <img src={bg_engineer} alt="bg_engineer" />
        </div>
      </div>
    )
  }

  componentDidMount() {
    document.getElementById('root').className='root'

    const { getVerificationCode } = this.props
    getVerificationCode()
  }

  componentWillUnmount() {
    document.getElementById('root').className=''
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