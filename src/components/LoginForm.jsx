import React, { Component, PropTypes } from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="login-form__input" type="text" placeholder="Email" name="email" onChange={this.handleEmailChange} />
        <br />
        <input className="login-form__input" type="password" placeholder="Password" name="password" onChange={this.handlePasswordChange} />
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

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password)
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}