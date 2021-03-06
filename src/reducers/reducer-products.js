import * as types from '../constants/ActionTypes'

export const products = (state = {
  isFetching: false,
  status: null,
  msg: null,
  data: null
}, action) => {
  switch (action.type) {
    case types.REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        status: action.response.status,
        msg: action.response.msg ? action.response.msg : 'Unknown error',
        data: action.response.data ? action.response.data : null,
        receivedAt: action.receivedAt
      }

    case types.HANDLE_FETCH_PRODUCTS_ERROR:
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