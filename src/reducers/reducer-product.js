import * as types from '../constants/ActionTypes'

export const product = (state = {
  isFetching: false,
  status: null,
  msg: null,
  data: null
}, action) => {
  switch (action.type) {
    case types.REQUEST_PRODUCT:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_PRODUCT:
      return {
        ...state,
        isFetching: false,
        status: action.response.status,
        msg: action.response.msg ? action.response.msg : 'Unknown error',
        data: action.response.data ? action.response.data : null,
        receivedAt: action.receivedAt
      }

    case types.HANDLE_FETCH_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        status: 500,
        msg: action.errMsg,
        receivedAt: action.receivedAt
      }

    case types.REQUEST_DELETE_PRODUCT:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_DELETE_PRODUCT_FEEDBACK:
      return {
        ...state,
        isFetching: false,
        status: action.response.status,
        msg: action.response.msg ? action.response.msg : 'Unknown error',
        data: null,
        receivedAt: action.receivedAt
      }

    case types.HANDLE_DELETE_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        status: 500,
        msg: action.errMsg,
        receivedAt: action.receivedAt
      }

    case types.REQUEST_ADD_PRODUCT:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_ADD_PRODUCT_FEEDBACK:
      return {
        ...state,
        isFetching: false,
        status: action.response.status,
        msg: action.response.msg ? action.response.msg : 'Unknown error',
        data: action.response.data ? action.response.data : null,
        receivedAt: action.receivedAt
      }

    case types.HANDLE_ADD_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        status: 500,
        msg: action.errMsg,
        receivedAt: action.receivedAt
      }

    case types.REQUEST_EDIT_PRODUCT:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_EDIT_PRODUCT_FEEDBACK:
      return {
        ...state,
        isFetching: false,
        status: action.response.status,
        msg: action.response.msg ? action.response.msg : 'Unknown error',
        receivedAt: action.receivedAt
      }

    case types.HANDLE_EDIT_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        status: 500,
        msg: action.errMsg,
        receivedAt: action.receivedAt
      }

    default:
      return state
  }
}