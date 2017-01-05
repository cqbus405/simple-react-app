import moment from 'moment'
import {
  browserHistory
} from 'react-router'

export const getCurrentTime = format => {
  return moment(Date.now()).format(format)
}

export const formatText = text => {
  const formattedStr = text.replace(/\n/g, '<br />')
  return formattedStr
}

export const goBack = () => {
  browserHistory.goBack()
}

export const redirectTo = url => {
  browserHistory.push(url)
}