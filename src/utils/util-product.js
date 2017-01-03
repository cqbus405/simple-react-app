export const setProductInfo = productInfo => {
  const productInfoStr = JSON.stringify(productInfo)
  sessionStorage.p = productInfoStr
}

export const getProductInfo = () => {
  const productInfoStr = sessionStorage.p

  if (productInfoStr) {
    const productInfoObj = JSON.parse(productInfoStr)
    return productInfoObj
  }
}

export const setState = (key, value) => {
  const stateStr = JSON.stringify(value)
  sessionStorage[key] = stateStr
}

export const getState = key => {
  const stateStr = sessionStorage[key]

  if (stateStr) {
    const stateObj = JSON.parse(stateStr)
    return stateObj
  }
}