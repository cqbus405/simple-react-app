import React, { PropTypes, Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div>
        <p className="login-error__msg">{this.props.errorMsg}</p>
      </div>
    )
  }
}

Message.propTypes = {
  errorMsg: PropTypes.string.isRequired
}