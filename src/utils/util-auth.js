export const setUserInfo = userInfo => {
  const userInfoStr = JSON.stringify(userInfo)
  localStorage.u = userInfoStr
}

export const getUserInfo = () => {
  const userInfoStr = localStorage.u

  if (userInfoStr) {
    const userInfoObj = JSON.parse(userInfoStr)
    return userInfoObj
  }
}

export const checkAuth = (nextState, replace) => {
  if (!!getUserInfo()) {
    replace('/')
  }
}