import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import 'whatwg-fetch'
import {
  setUserInfo,
  getUserInfo
} from '../utils/util-auth'
import * as generalActions from './action-general'
import {
  redirectTo
} from '../utils/util-general'
import {
  getVerificationCodeIfNeeded
} from './action-captcha'

const login = loginInfo => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_LOGIN))

  return fetch(api.ENDPOINT_USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginInfo.email,
        password: loginInfo.password,
        verification_code: loginInfo.verificationCode
      })
    })
    .then(response => generalActions.checkStatus(response))
    .then(response => generalActions.parseJSON(response))
    .then(feedback => {
      dispatch(generalActions.receiveResponse(types.RECEIVE_LOGIN_FEEDBACK, feedback))
      if (feedback.status === 200) {
        const token = feedback.data.user.token
        const name = feedback.data.user.name
        const userInfo = {
          token: token,
          name: name
        }
        setUserInfo(userInfo)
        redirectTo('/products')
      }
    })
    .catch(error => {
      dispatch(generalActions.handleError(types.HANDLE_LOGIN_ERROR, 'Login error'))
      console.log(error)
    })
}

export const doLoginIfNeeded = loginInfo => (dispatch, getState) => {
  const state = getState()
  const fetching = state.user.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(login(loginInfo))
  }
}

const logout = () => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_LOGOUT))

  const token = getUserInfo().token

  return fetch(api.ENDPOINT_USER_LOGOUT, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
    .then(response => generalActions.checkStatus(response))
    .then(response => generalActions.parseJSON(response))
    .then(feedback => {
      dispatch(generalActions.receiveResponse(types.RECEIVE_LOGOUT_FEEDBACK, feedback))
      if (feedback.status === 200) {
        setUserInfo(null)
        redirectTo('/')
      }
    })
    .catch(error => {
      dispatch(generalActions.handleError(types.HANDLE_LOGOUT_ERROR, 'Logout error'))
    })
}

export const doLogoutIfNeeded = () => (dispatch, getState) => {
  const state = getState()
  const fetching = state.user.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(logout())
  }
}