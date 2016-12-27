import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import 'whatwg-fetch'
import {
  browserHistory
} from 'react-router'
import {
  setUserInfo,
  getUserInfo
} from '../utils/util-auth'
import * as generalActions from './action-general'

const login = loginInfo => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_LOGIN))

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
        browserHistory.push('/products') //登录成功后页面转跳
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
        browserHistory.push('/login')
      }
    })
    .catch(error => {
      dispatch(generalActions.handleError(types.HANDLE_LOGOUT_ERROR, 'Logout error'))
      console.log(error)
    })
}

export const doLogoutIfNeeded = () => (dispatch, getState) => {
  const state = getState()
  const fetching = state.user.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(logout())
  }
}