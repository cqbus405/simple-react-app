import React, { Component, PropTypes } from 'react'
import VerificationItem from './VerificationItem'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      captcha: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleCaptchaChange = this.handleCaptchaChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    const { verificationCode, getVerificationCode } = this.props

    return (
      <form className="login-form-wrapper">
        <input className="login-form__input" type="text" placeholder="Email" name="email" onChange={this.handleEmailChange} />
        <br />
        <input className="login-form__input" type="password" placeholder="Password" name="password" onChange={this.handlePasswordChange} />
        {verificationCode ? <VerificationItem verificationCode={verificationCode} getVerificationCode={getVerificationCode} onChange={this.handleCaptchaChange} /> : null}
        <br />
        <br />
        <input className="login-form__submit" type="submit" value="Login" onClick={this.handleSubmit} />
      </form>
    )
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleCaptchaChange(event) {
    this.setState({
      captcha: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password, this.state.captcha)
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  verificationCode: PropTypes.string,
  getVerificationCode: PropTypes.func,
  doLogin: PropTypes.func
}