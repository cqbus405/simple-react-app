import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import 'whatwg-fetch'
import * as generalActions from './action-general'

const getVerificationCode = () => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_CAPTCHA))

  return fetch(api.ENDPOINT_CAPTCHA, {
      method: 'GET'
    })
    .then(response => generalActions.checkStatus(response))
    .then(response => generalActions.parseJSON(response))
    .then(feedback => {
      dispatch(generalActions.receiveResponse(types.RECEIVE_CAPTCHA_FEEDBACK, feedback))
    })
    .catch(error => {
      console.log(error)
    })
}

export const getVerificationCodeIfNeeded = () => (dispatch, getState) => {
  const state = getState()
  const fetching = state.captcha.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(getVerificationCode())
  }
}