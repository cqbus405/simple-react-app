import 'whatwg-fetch'
import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import * as generalActions from './action-general'

const fetchProducts = params => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_PRODUCTS))

  const page = params.page
  const count = params.count
  const token = params.token
  const url = `${api.ENDPOINT_DOCUMENT_LIST}?page_item_count=${count}&page_number=${page}`

  return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    .then(response => generalActions.checkStatus(response))
    .then(response => generalActions.parseJSON(response))
    .then(feedback => {
      dispatch(generalActions.receiveResponse(types.RECEIVE_PRODUCTS, feedback))
    })
    .catch(error => {
      dispatch(generalActions.handleError(types.HANDLE_FETCH_PRODUCTS_ERROR, 'Fetch products error'))
      console.log(error)
    })
}

export const fetchProductsIfNeeded = params => (dispatch, getState) => {
  const state = getState()
  const fetching = state.products.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(fetchProducts(params))
  }
}