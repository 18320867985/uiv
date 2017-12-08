import {TYPES} from './constants'
import {removeFromDom} from '@src/utils/domUtils'
import {isFunction, isExist, isString, isPromiseSupported} from '@src/utils/objectUtils'
import MessageBox from './MessageBox.vue'
import Vue from 'vue'

let instance

const destroyModal = () => {
  if (instance) {
    // console.log('destroyModal')
    removeFromDom(instance.$el)
    instance.$destroy()
    instance = null
  }
}

// handel cancel or ok for confirm & prompt
const shallResolve = (type, msg) => {
  if (type === TYPES.CONFIRM) {
    // is confirm
    return msg === 'ok'
  } else {
    // is prompt
    return isExist(msg) && isString(msg.value)
  }
}

const init = function (type, options, cb, resolve = null, reject = null) {
  destroyModal()
  const i18n = this.$i18n
  instance = new Vue({
    extends: MessageBox,
    i18n,
    propsData: {
      type,
      ...options,
      cb (msg) {
        destroyModal()
        if (isFunction(cb)) {
          if (type === TYPES.CONFIRM) {
            shallResolve(type, msg) ? cb(null, msg) : cb(msg)
          } else if (type === TYPES.PROMPT) {
            shallResolve(type, msg) ? cb(null, msg.value) : cb(msg)
          } else {
            cb(msg)
          }
        } else if (resolve && reject) {
          if (type === TYPES.CONFIRM) {
            shallResolve(type, msg) ? resolve(msg) : reject(msg)
          } else if (type === TYPES.PROMPT) {
            shallResolve(type, msg) ? resolve(msg.value) : reject(msg)
          } else {
            resolve(msg)
          }
        }
      }
    }
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.show = true
}

const initModal = function (type, options = {}, cb) {
  if (isPromiseSupported()) {
    return new Promise((resolve, reject) => {
      init.apply(this, [type, options, cb, resolve, reject])
    })
  } else {
    init.apply(this, [type, options, cb])
  }
}

const alert = function (options, cb) {
  return initModal.apply(this, [TYPES.ALERT, options, cb])
}

const confirm = function (options, cb) {
  return initModal.apply(this, [TYPES.CONFIRM, options, cb])
}

const prompt = function (options, cb) {
  return initModal.apply(this, [TYPES.PROMPT, options, cb])
}

export default {alert, confirm, prompt}
