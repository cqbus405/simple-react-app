import moment from 'moment'

export const getCurrentTime = format => {
  return moment(Date.now()).format(format)
}

export const formatText = text => {
  const formattedStr = text.replace(/\n/g, '<br />')
  return formattedStr
}