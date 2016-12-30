import 'whatwg-fetch'
import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import * as generalActions from './action-general'
import {
  browserHistory
} from 'react-router'
import {
  setProductInfo
} from '../utils/util-product'

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

const deleteProduct = params => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_DELETE_PRODUCT))

  const url = `${api.ENDPOINT_PRODUCT_DELETE}`
  const token = params.token

  return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify({
        id: params.id
      })
    })
    .then(response => generalActions.checkStatus(response))
    .then(response => generalActions.parseJSON(response))
    .then(feedback => {
      dispatch(generalActions.receiveResponse(types.RECEIVE_DELETE_PRODUCT_FEEDBACK, feedback))
      if (feedback.status === 200) {
        setProductInfo(null)
        browserHistory.push('/products')
      }
    })
    .catch(error => {
      dispatch(generalActions.handleError(types.HANDLE_DELETE_PRODUCT_ERROR, 'Delete product error'))
    })
}

export const deleteProductIfNeeded = params => (dispatch, getState) => {
  const state = getState()
  const fetching = state.product.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(deleteProduct(params))
  }
}