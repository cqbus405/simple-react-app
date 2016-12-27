import React, { PropTypes, Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <p>{this.props.msg}</p>
      </div>
    )
  }
}

Message.propTypes = {
  msg: PropTypes.string.isRequired
}