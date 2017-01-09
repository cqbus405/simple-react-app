import React, { Component, PropTypes } from 'react'

class VerificationItem extends Component {
  render() {
    const { verificationCode, getVerificationCode, onChange } = this.props

    return (
      <div className="login-form__captcha">
        <input className="login-captcha-input" type="text" placeholder="Verification Code" name="captcha" onChange={onChange} />
        <div onClick={getVerificationCode} className="login-verification-code" dangerouslySetInnerHTML={{__html: verificationCode}} />
      </div>
    )
  }
}

VerificationItem.propTypes = {
  verificationCode: PropTypes.string,
  getVerificationCode: PropTypes.func,
  onChange: PropTypes.func
}

export default VerificationItem