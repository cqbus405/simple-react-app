import 'whatwg-fetch'
import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import * as generalActions from './action-general'
import {
  setProductInfo
} from '../utils/util-product'
import {
  redirectTo
} from '../utils/util-general'

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
      if (feedback.status === 200) {
        setProductInfo(feedback.data)
      }
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
        redirectTo('/products')
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

const addProduct = params => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_ADD_PRODUCT))

  const url = `${api.ENDPOINT_PRODUCT_ADD}`
  const token = params.token

  return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify({
        product: params.product
      })
    })
    .then(response => generalActions.checkStatus(response))
    .then(response => generalActions.parseJSON(response))
    .then(feedback => {
      dispatch(generalActions.receiveResponse(types.RECEIVE_ADD_PRODUCT_FEEDBACK, feedback))
      if (feedback.status === 200) {
        redirectTo('/products')
      }
    })
    .catch(error => {
      dispatch(generalActions.handleError(types.HANDLE_ADD_PRODUCT_ERROR, 'Add product error'))
    })
}

export const addProductIfNeeded = params => (dispatch, getState) => {
  const state = getState()
  const fetching = state.product.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(addProduct(params))
  }
}

const editProduct = params => dispatch => {
  dispatch(generalActions.sendRequest(types.REQUEST_EDIT_PRODUCT))

  const url = `${api.ENDPOINT_PRODUCT_EDIT}`
  const token = params.token

  return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify({
        product: params.product
      })
    })
    .then(response => generalActions.checkStatus(response))
    .then(response => generalActions.parseJSON(response))
    .then(feedback => {
      dispatch(generalActions.receiveResponse(types.RECEIVE_EDIT_PRODUCT_FEEDBACK, feedback))
      if (feedback.status === 200) {
        redirectTo(`/products/product/${params.product.id}`)
      }
    })
    .catch(error => {
      dispatch(generalActions.handleError(types.HANDLE_EDIT_PRODUCT_ERROR, 'Edit product error'))
    })
}

export const editProductIfNeeded = params => (dispatch, getState) => {
  const state = getState()
  const fetching = state.product.isFetching

  if (generalActions.fetching(fetching)) {
    return dispatch(editProduct(params))
  }
}