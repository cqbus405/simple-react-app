export const setToken = (token) => {
  localStorage.t = token
}

export const getToken = () => {
  if (localStorage.t) {
    return localStorage.t
  }
}

export const logout = () => {
  if (localStorage.t) {
    delete localStorage.t
  }
}

export const loggedIn = () => {
  return !!localStorage.t
}