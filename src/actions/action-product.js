import 'whatwg-fetch'
import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import * as generalActions from './action-general'

const fetchProduct = params => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_PRODUCT))

  const url = `${api.ENDPOINT_PRODUCT}/${params.id}`
  const token = params.token

  return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    .then(response => generalActions.checkStatus(response))
    .then(response => generalActions.parseJSON(response))
    .then(feedback => {
      dispatch(generalActions.receiveResponse(types.RECEIVE_PRODUCT, feedback))
    })
    .catch(error => {
      dispatch(generalActions.handleError(types.HANDLE_FETCH_PRODUCT_ERROR, 'Fetch product error'))
    })
}

export const fetchProductIfNeeded = params => (dispatch, getState) => {
  const state = getState()
  const fetching = state.product.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(fetchProduct(params))
  }
}