import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import fetch from 'whatwg-fetch'

const requestLogin = loginInfo => {
  return {
    type: types.REQUEST_LOGIN,
    loginInfo
  }
}

const receiveLoginFeedback = feedback => {
  return {
    type: types.RECEIVE_LOGIN_FEEDBACK,
    feedback
    receivedAt: Date.now()
  }
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

export const doLogin = loginInfo => {
  return dispatch => {
    dispatch(requestLogin(loginInfo))
    return fetch(api.ENDPOINT_USER_LOGIN)
      .then(checkStatus(response))
      .then(parseJSON(response))
      .then(dispatch(receiveLoginFeedback(result)))
  }
}