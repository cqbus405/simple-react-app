import {
  getCurrentTime
} from './util-general'

let params
let requestParam
let receiveParam
let fetchParam

export const fetchIfNeeded = (types, params) => {

}

const shouldFetch = (fetching) => {
  if (fetching) {
    return false
  }

  return true
}

const fetch = params => dispatch => {
  dispatch(request(params.requestType, params.requestParam))

  return fetch()
}

const request = (type, param) => {
  return {
    action: type,
    feedback: param
  }
}

const receive = (type, param) => {
  return {
    action: type,
    feedback: param,
    receivedAt: getCurrentTime('YYYY-DD-MM hh:mm:ss a')
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

const handleError = (type, param) => {
  return {
    type: types,
    errMsg: param,
    receivedAt: getCurrentTime('YYYY-DD-MM hh:mm:ss a')
  }
}

export setFetchParam = (url, method, token, body, paramArr) => {
  fetchParam = {
    url: null,
    method: null,
    token: null,
    body: null
  }

  if (!url) {
    console.log('Invalid url')
  }

  if (paramArr && paramArr.length !== 0) {
    const length = paramsArr.length
    let finalParam = ''
    url += '/?'

    paramArr.forEach((element, index, array) => {
      if (length - 1 !== index) {
        finalParam = finalParam + element + '$'
      } else {
        finalParam += element
      }
    })

    url += finalParam

    params.url = url
  }

  if (!method) {
    console.log('Invalid method.')
  }
  params.method = method

  if (!token) {
    console.log('Invalid url')
  }
  params.token = token

  if (!body) {
    console.log('Invalid url')
  }
  params.body = body

  return params
}

export setRequestParam = (action, param) => {
  requestParam = {
    action,
    param
  }
}

export setReceiveParam = (action, param) => {
  receiveParam = {
    action,
    param
  }
}