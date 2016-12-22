import * as types from '../constants/ActionTypes'
import * as api from '../constants/API'
import 'whatwg-fetch'

const requestProducts = () => {
  return {
    type: types.REQUEST_PRODUCTS
  }
}

const receiveProducts = feedback => {
  return {
    type: types.RECEIVE_PRODUCTS,
    feedback,
    receivedAt: Date.now()
  }
}

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const parseJSON = response => response.json()

const handleError = () => {
  return {
    type: types.HANDLE_FETCH_PRODUCTS_ERROR,
    errMsg: 'Fetch products error',
    receivedAt: Date.now()
  }
}

const shouldFetchProducts = state => {
  const isFetching = state.productsInfo.isFetching
  if (isFetching) {
    return false
  }

  return true
}

const fetchProducts = params => dispatch => {
  dispatch(requestProducts())

  const page = params.page
  const count = params.count
  const token = params.token
  let url = `${api.ENDPOINT_PRODUCT_LIST}?page_item_count=${count}&page_number=${page}`

  return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(feedback => {
      dispatch(receiveProducts(feedback))
    })
    .catch(error => {
      dispatch(handleError())
      console.log(error)
    })
}

export const fetchProductsIfNeeded = params => (dispatch, getState) => {
  if (shouldFetchProducts(getState())) {
    return dispatch(fetchProducts(params))
  }
}