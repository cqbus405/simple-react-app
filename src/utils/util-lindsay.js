import {
  getCurrentTime
} from './util-general'

let params
let requestParam
let receiveParam
let fetchParam

export const fetchIfNeeded = (fetching, cb) => (getState, dispatch) => {
  if (shouldFetch(fetching)) {
    return dispatch(fetch(cb))
  }
}

const shouldFetch = fetching => {
  if (fetching) {
    return false
  }

  return true
}

const fetch = cb => dispatch => {
  dispatch(request(requestParam.action, requestParam.param))

  return fetch(fetchParam.url, {
      method: fetchParam.method,
      headers: {
        Authorization: `bearer ${fetchParam.token}`
      },
      body: JSON.stringify(fetchParam.body)
    })
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(feedback => {
      dispatch(receive(receiveParam.action, feedback))
      const status = feedback.status
      cb(null, status)
    })
    .catch(error => {
      dispatch(handleError())
      console.log(error)
    })
}

const request = (type, param) => {
  return {
    type
    feedback: param
  }
}

const receive = (type, feedback) => {
  return {
    type,
    feedback,
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

const handleError = (type, errMsg) => {
  return {
    type,
    errMsg,
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

    fetchParam.url = url
  }

  if (!method) {
    console.log('Invalid method.')
  }
  fetchParam.method = method

  if (!token) {
    console.log('Invalid url')
  }
  fetchParam.token = token

  if (!body) {
    console.log('Invalid url')
  }
  fetchParam.body = body

  params.fetchParam = fetchParam
}

export setRequestParam = (action, param) => {
  requestParam = {
    action,
    param
  }

  params.requestParam = requestParam
}

export setReceiveParam = (action, param) => {
  receiveParam = {
    action,
    param
  }

  params.receiveParam = receiveParam
}