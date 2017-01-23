import {
  REQUEST_ADD_FILE,
  REQUEST_REMOVE_FILE,
} from '../constants/ActionTypes'

export const addFile = files => {
  return {
    type: REQUEST_ADD_FILE,
    files
  }
}

export const removeFile = files => {
  return {
    type: REQUEST_REMOVE_FILE,
    files
  }
}