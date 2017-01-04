import React, { PropTypes, Component } from 'react'

export default class ErrorMessage extends Component {
  render() {
    return (
      <div className="login-error__msg">
        <p>{this.props.errorMsg}</p>
      </div>
    )
  }
}

ErrorMessage.propTypes = {
  errorMsg: PropTypes.string.isRequired
}