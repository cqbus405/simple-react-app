import * as types from '../constants/ActionTypes'

const loginFeedback = (state = {
  isFetching: false,
  status: null,
  msg: null,
  user: null
}, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_LOGIN_FEEDBACK:
      return {
        ...state,
        isFetching: false,
        user: action.feedback.data ? action.feedback.data.user : null,
        status: action.feedback.status,
        msg: action.feedback.msg ? action.feedback.msg : 'Unknown error',
        requestedAt: action.receivedAt
      }

    case types.HANDLE_LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        status: 500,
        msg: action.errMsg,
        requestedAt: action.receivedAt
      }

    default:
      return state
  }
}

export default loginFeedback