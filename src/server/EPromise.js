import { Message, MessageBox } from 'element-ui'

function messageBox (propmt) {
  return new Promise((resolve, reject) => {
    MessageBox.confirm(`${propmt}`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      resolve(true)
    }).catch(() => {
      reject(new Error(false))
    })
  })
}

function isSubmitEnable (form) {
  return new Promise((resolve, reject) => {
    form.validate((valid) => {
      if (valid) {
        resolve(true)
      } else {
        reject(new Error(false))
      }
    })
  })
}

function showToast (msg, icons) {
  Message({message: `${msg}`, type: `${icons}`})
}

function closeToast (enable, msg, icons) {
  Message({showClose: `${enable}`, message: `${msg}`, type: `${icons}`})
}

function errMessage (msg) {
  Message.error(`${msg}`)
}

function readFile (files) {
  return new Promise((resolve, reject) => {
    if (files.length) {
      var file = files[0]
      var reader = new window.FileReader()

      reader.onload = function () {
        resolve(reader.result)
      }
      reader.readAsText(file)
    }
  })
}

function validateEleForm (form) {
  return new Promise((resolve, reject) => {
    form.validate(valid => {
      if (!valid) {
        reject(new Error(false))
      }
      resolve()
    })
  })
}

export default {
  messageBox,
  showToast,
  closeToast,
  errMessage,
  isSubmitEnable,
  readFile,
  validateEleForm
}
