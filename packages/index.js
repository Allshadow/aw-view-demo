import awDemo from './aw-demo/index'

const components = [awDemo]

const install = function (Vue) {
  if (install.installed) return

  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  awDemo
}
