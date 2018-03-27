
import box from './box'

// import eventbus from './eventbus'

var main = {
  install (Vue) {
    if (this.installed) {
      return
    }
    this.installed = true
    Vue.component('transition-box', box)
  }

}

export default main
