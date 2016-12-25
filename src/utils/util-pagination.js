import {
  pageConst
} from '../constants/constants'

const setPage = currentPage => {
  sessionStorage.currentPage = currentPage
}

export const getPage = () => {
  let currentPage = sessionStorage.currentPage
  if (!currentPage) {
    currentPage = 1
  }
  return currentPage
}

export const getCurrentPage = (action, pages, page) => {
  let currentPage = getPage()

  switch (action) {
    case pageConst.PREV:
      if (currentPage == 1) {
        currentPage = 0
      } else if (currentPage > 1) {
        --currentPage
        setPage(currentPage)
      }
      break

    case pageConst.NEXT:
      if (currentPage == pages) {
        currentPage = 0
      } else if (currentPage < pages) {
        ++currentPage
        setPage(currentPage)
      }
      break

    case pageConst.PAGE:
      if (currentPage == page) {
        currentPage = 0
      } else {
        currentPage = page
        setPage(currentPage)
      }
      break

    default:
      break
  }

  return currentPage
}