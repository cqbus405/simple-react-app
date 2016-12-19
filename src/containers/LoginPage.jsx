import React, { Component, PropTypes } from 'react'
import Indicator from '../components/Indicator'
import LoginForm from '../components/LoginForm'
import Message from '../components/Message'
import { connect } from 'react-redux'
import img_gun from '../../public/images/gun.jpg'

class LoginPage extends Component {
  render() {
    return (
      <div>
        <img src={img_gun} alt="gun" />
        {this.props.data.status === 500 ? <Message errorMsg={this.props.data.msg} /> : null}
        <LoginForm />
        {this.props.data.isFetching ? <Indicator /> : null}
      </div>
    )
  }
}

LoginPage.propTypes = {
  status: PropTypes.number.isRequired,
  msg: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    data: state.loginFeedback
  }
}

export default connect(
  mapStateToProps
)(LoginPage)