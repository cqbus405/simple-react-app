import React, { Component, PropTypes } from 'react'

export default class LoginItem extends Component {
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
        <input type="text" placeholder="Email" name="email" onChange={this.handleEmailChange} />
        <input type="password" placeholder="Password" name="password" onChange={this.handlePasswordChange} />
        <input type="submit" value="Login" />
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
    alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`)
  }
}