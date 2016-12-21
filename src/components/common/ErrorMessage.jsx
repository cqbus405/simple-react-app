import React, { PropTypes, Component } from 'react'

export default class ErrorMessage extends Component {
  render() {
    return (
      <div>
        <p className="login-error__msg">{this.props.errorMsg}</p>
      </div>
    )
  }
}

ErrorMessage.propTypes = {
  errorMsg: PropTypes.string.isRequired
}