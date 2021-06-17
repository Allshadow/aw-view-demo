import awDemo from './src'

awDemo.install = function (Vue) {
  Vue.component(awDemo.name, awDemo)
}

export default awDemo
