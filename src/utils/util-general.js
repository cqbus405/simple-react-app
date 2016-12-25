import moment from 'moment'

export const getCurrentTime = (format) => {
  return moment(Date.now()).format(format)
}