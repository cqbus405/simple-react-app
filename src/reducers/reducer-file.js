import {
  REQUEST_ADD_FILE,
  REQUEST_REMOVE_FILE,
  HANDLE_ADD_FILE_ERROR,
  HANDLE_REMOVE_FILE_ERROR
} from '../constants/ActionTypes'

export const file = (state = {
  msg: '',
  files: []
}, action) => {
  switch (action.type) {
    case REQUEST_ADD_FILE:
      return {
        ...state,
        msg: 'add files successfully',
        files: action.files
      }

    case REQUEST_REMOVE_FILE:
      return {
        ...state,
        msg: 'remove files successfully',
        files: action.files
      }

    case HANDLE_ADD_FILE_ERROR:
      return {
        ...state,
        msg: action.msg
      }

    case HANDLE_REMOVE_FILE_ERROR:
      return {
        ...state,
        msg: 'remove files failed'
      }

    default:
      return state
  }
}