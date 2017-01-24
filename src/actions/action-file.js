import {
  REQUEST_ADD_FILE,
  REQUEST_REMOVE_FILE,
  HANDLE_ADD_FILE_ERROR
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

export const handleAddFileError = msg => {
  return {
    type: HANDLE_ADD_FILE_ERROR,
    msg
  }
}