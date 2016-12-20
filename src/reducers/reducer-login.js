import * as types from '../constants/ActionTypes'

let loginFeedback = (state = {
  isFetching: false,
  status: '',
  msg: '',
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
        msg: action.feedback.msg ? action.feedback.msg : 'Unknow error',
        requestedAt: action.receivedAt
      }

    default:
      return state
  }
}

export default loginFeedback