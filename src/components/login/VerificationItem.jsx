import React, { Component, PropTypes } from 'react'

class VerificationItem extends Component {
  render() {
    const { verificationCode, getVerificationCode, onChange } = this.props

    return (
      <ul className="verification-item-container">
        <li><input type="text" placeholder="Verification Code" name="captcha" onChange={onChange} /></li>
        <li><span onClick={getVerificationCode} dangerouslySetInnerHTML={{__html: verificationCode}}></span></li>
      </ul>
    )
  }
}

VerificationItem.propTypes = {
  verificationCode: PropTypes.string,
  getVerificationCode: PropTypes.func,
  onChange: PropTypes.func,
}

export default VerificationItem