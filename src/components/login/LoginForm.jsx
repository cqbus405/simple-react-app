import React, { Component, PropTypes } from 'react'
import ic_gun from '../../../public/images/gun.jpg'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      verificationCode: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleCaptchaChange = this.handleCaptchaChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="login-form__input" type="text" placeholder="Email" name="email" onChange={this.handleEmailChange} />
        <br />
        <input className="login-form__input" type="password" placeholder="Password" name="password" onChange={this.handlePasswordChange} />
        <div className="login-form__captcha">
          <input className="login-captcha-input" type="text" placeholder="Verification Code" name="captcha" onChange={this.handleCaptchaChange} />
          <img src={ic_gun} alt="captcha" />
        </div>
        <br />
        <br />
        <input className="login-form__submit" type="submit" value="Login" />
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
    this.props.onSubmit(this.state.email, this.state.password, this.state.verificationCode)
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}