// 获取url
function showWindHref (href) {
  let args = href.split('?')
  if (args[0] === href) {
    return ''
  }

  let arr = args[1].split('&')
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let arg = arr[i].split('=')
    obj[arg[0]] = arg[1]
  }

  return obj
}

// 去重
function removeRepeat (arr) {
  let obj = []

  for (let i = 0; i< arr.length; i++) {
    if (obj.indexOf(arr[i]) < 0) {
      obj.push(arr[i])
    }
  }

  return obj
}

function filterRepeat (arr) {
}

// 去除左右空格
function trim (str) {
  if (str && typeof str === 'string') {
    return str.replace(/(^\s*)|(\s*)$/g, '')
  }
}

//  邮箱验证
function checkEmail (email) {
  let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/
  let res = reg.test(email)
  return res
}

// 性别
function checkSex (sex) {
  if (sex === 0) {
    return '男'
  } else if (sex === 1) {
    return '女'
  }
}
 
export default {
  showWindHref,
  removeRepeat,
  trim,
  checkEmail,
  checkSex
}
