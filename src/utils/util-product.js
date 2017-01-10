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