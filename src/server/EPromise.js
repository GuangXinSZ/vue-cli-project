/**
 * Author: liuGuangXin
 * title: 使用规则
 *  1：由于此类都属于Promise await化，使用请遵循以下规则。
 *  2：
 *     例子: methods: {
                async deleteMonth () {
                  let res = await EPromise.Message('信息')
                  if (!res) { retur }
                }
            }
    3: 如果喜欢此项目，请点颗start。谢谢！！！
 */
import { Message, MessageBox, Notification } from 'element-ui'

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

function notifyToast (title, message, type) {
  Notification({title: `${title}`, message: `${message}`, type: `${type}`})
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
  notifyToast,
  errMessage,
  isSubmitEnable,
  readFile,
  validateEleForm
}
