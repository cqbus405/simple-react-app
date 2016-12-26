import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import * as constants from '../constants/constants'
import 'whatwg-fetch'
import {
  browserHistory
} from 'react-router'
import {
  setUserInfo,
  getUserInfo
} from '../utils/util-auth'
import {
  getCurrentTime
} from '../utils/util-general'

const request = (type, param) => {
  return {
    type,
    param
  }
}

const receive = (type, feedback) => {
  return {
    type,
    feedback,
    receivedAt: getCurrentTime(constants.RECEIVED_AT_FORMAT)
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

const handleError = (type, errMsg) => {
  return {
    type,
    errMsg,
    receivedAt: getCurrentTime(constants.RECEIVED_AT_FORMAT)
  }
}

const fetching = state => {
  const user = state.user
  if (user.isFetching) {
    return false
  }
  return true
}

const login = loginInfo => dispatch => {
  dispatch(request(types.REQUEST_LOGIN))

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
      dispatch(receive(types.RECEIVE_LOGIN_FEEDBACK, feedback))
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
      dispatch(handleError(types.HANDLE_LOGIN_ERROR, 'Login error'))
      console.log(error)
    })
}

const logout = () => dispatch => {
  dispatch(request(types.REQUEST_LOGOUT))

  const token = getUserInfo().token

  return fetch(api.ENDPOINT_USER_LOGOUT, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(feedback => {
      dispatch(receive(types.RECEIVE_LOGOUT_FEEDBACK, feedback))
      if (feedback.status === 200) {
        setUserInfo(null)
        browserHistory.push('/login')
      }
    })
    .catch(error => {
      dispatch(handleError(types.HANDLE_LOGOUT_ERROR, 'Logout error'))
      console.log(error)
    })
}

export const doLoginIfNeeded = loginInfo => (dispatch, getState) => {
  if (fetching(getState())) {
    return dispatch(login(loginInfo))
  }
}

export const doLogoutIfNeeded = () => (dispatch, getState) => {
  if (fetching(getState())) {
    return dispatch(logout())
  }
}