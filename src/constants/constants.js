export const pageConst = {
  PREV: 0,
  NEXT: 1,
  PAGE: 2
}

export const PAGE_ITEM_COUNT = 12
export const RECEIVED_AT_FORMAT = 'YYYY-MM-DD h:mm:ssa'

export const btnTypes = {
  productPage: {
    type: 0,
    leftBtnName: 'Edit',
    rightBtnName: 'Delete'
  },

  createProductPage: {
    type: 1,
    leftBtnName: 'Create',
    rightBtnName: 'Cancel'
  },

  editProductPage: {
    type: 2,
    leftBtnName: 'Done',
    rightBtnName: 'Cancel'
  }
}

export const fileUploadConfig = {
  imageUploadConfig: {
    multiple: true,
    accept: 'image/*',
    maxSize: 90 * 1024 * 1024
  },

  avatarUploadConfig: {
    multiple: false,
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024
  }
}