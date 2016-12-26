export const logout = () => {
  if (localStorage.t) {
    delete localStorage.t
  }
}

export const loggedIn = () => {
  return !!localStorage.t
}

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