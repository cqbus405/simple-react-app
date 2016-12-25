import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import 'whatwg-fetch'
import {
  browserHistory
} from 'react-router'
import {
  setToken
} from '../utils/util-auth'

const requestLogin = () => {
  return {
    type: types.REQUEST_LOGIN
  }
}

const receiveLoginFeedback = feedback => {
  return {
    type: types.RECEIVE_LOGIN_FEEDBACK,
    feedback,
    receivedAt: Date.now()
  }
}

const shouldLogin = (state) => {
  const loginFeedback = state.loginFeedback
  if (loginFeedback.isFetching) {
    return false
  }
  return true
}

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const parseJSON = response => response.json()

const handleError = () => {
  return {
    type: types.HANDLE_LOGIN_ERROR,
    errMsg: 'Login error',
    receivedAt: Date.now()
  }
}

const login = loginInfo => dispatch => {
  dispatch(requestLogin())

  return fetch(api.ENDPOINT_USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginInfo.email,
        password: loginInfo.password
      })
    })
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(feedback => {
      dispatch(receiveLoginFeedback(feedback))
      if (feedback.status === 200) {
        let token = feedback.data.user.token
        setToken(token)
        browserHistory.push('/products') //登录成功后页面转跳
      }
    })
    .catch(error => {
      dispatch(handleError())
      console.log(error)
    })
}

export const doLoginIfNeeded = loginInfo => (dispatch, getState) => {
  if (shouldLogin(getState())) {
    return dispatch(login(loginInfo))
  }
}