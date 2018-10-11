/**
 * 过滤器
 */
import moment from 'moment'

function capitalize (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function formatTime (timeStamp, format) {
  if (!timeStamp) return '未知'

  let t = moment(timeStamp)
  return t.isValid() ? t.format(format) : '未知'
}

function formatCoordinate (coordinateStr) {
  try {
    let coordinate = JSON.parse(coordinateStr)
    return coordinate.longitude.toFixed(6) + ', ' + coordinate.latitude.toFixed(6)
  } catch (error) {
    return '未知'
  }
}

export default {
  capitalize,
  formatTime,
  formatCoordinate
}
