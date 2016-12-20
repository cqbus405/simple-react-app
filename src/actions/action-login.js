import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import 'whatwg-fetch'

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

const login = loginInfo => dispatch => {
  dispatch(requestLogin(loginInfo))

  console.log('email: ' + loginInfo.email + ', pwd: ' + loginInfo.password)

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
    .then(data => dispatch(receiveLoginFeedback(data)))
    .catch(error => {
      console.log('request failed', error)
    })
}

export const doLoginIfNeeded = loginInfo => (dispatch, getState) => {
  if (shouldLogin(getState())) {
    return dispatch(login(loginInfo))
  }
}