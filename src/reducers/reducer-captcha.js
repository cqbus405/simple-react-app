import * as types from '../constants/ActionTypes'

export const captcha = (state = {
  isFetching: false,
  status: null,
  msg: null,
  data: null
}, action) => {
  switch (action.type) {
    case types.REQUEST_CAPTCHA:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_CAPTCHA_FEEDBACK:
      return {
        ...state,
        isFetching: false,
        status: action.response.status,
        msg: action.response.msg ? action.response.msg : 'Unknown error',
        data: action.response.data ? action.response.data : null,
        receivedAt: action.receivedAt
      }

    default:
      return state
  }
}