// 暴露组件
import config from './config'
import './style/index.css' // 全局样式

import Counter from './components/Counter.vue'

export { Counter }

function registerComponents(app, prefix) {
  app.component(`${prefix}Counter`, Counter)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install(app, options) {
    const finalOptions = Object.assign(
      {},
      {
        installComponents: true,
        componentsPrefix: '',
      },
      options,
    )

    for (const key in finalOptions) {
      if (typeof finalOptions[key] !== 'undefined')
        config[key] = finalOptions[key]
    }

    if (finalOptions.installComponents)
      registerComponents(app, finalOptions.componentsPrefix)
  },
}

export default plugin
