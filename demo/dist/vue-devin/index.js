
import box from './transition-box/box'
import ck from './function-cookie/es6/cookie'

// import eventbus from './eventbus'

var main = {
  install (Vue) {
    if (this.installed) {
      return
    }
    this.installed = true
    Vue.component('transition-box', box)
    Vue.prototype.$devin = {
        'Ck':ck
    }
  }

}

export default main
