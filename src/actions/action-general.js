import {
  getCurrentTime
} from '../utils/util-general'
import * as constants from '../constants/constants'

export const fetching = fetching => {
  if (fetching) {
    return false
  }
  return true
}

export const sendRequest = (type, param) => {
  return {
    type,
    param
  }
}

export const receiveResponse = (type, response) => {
  return {
    type,
    response,
    receivedAt: getCurrentTime(constants.RECEIVED_AT_FORMAT)
  }
}

export const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export const parseJSON = response => response.json()

export const handleError = (type, errMsg) => {
  return {
    type,
    errMsg,
    receivedAt: getCurrentTime(constants.RECEIVED_AT_FORMAT)
  }
}