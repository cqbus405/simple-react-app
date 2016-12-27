import * as types from '../constants/ActionTypes'

const user = (state = {
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
        user: action.response.data ? action.response.data.user : null,
        status: action.response.status,
        msg: action.response.msg ? action.response.msg : 'Unknown error',
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

    case types.REQUEST_LOGOUT:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_LOGOUT_FEEDBACK:
      return {
        ...state,
        isFetching: false,
        user: null,
        status: action.response.status,
        msg: action.response.msg ? action.response.msg : 'Unknown error',
        requestedAt: action.receivedAt
      }

    case types.HANDLE_LOGOUT_ERROR:
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

export default user