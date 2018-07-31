const { injectBabelPlugin } = require('react-app-rewired')
const rewireCssModules = require('react-app-rewire-css-modules')

module.exports = function override(config, env) {
  // 引入 ant-design 配置
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config)

  // 引入 css-modules sass 配置
  config = rewireCssModules(config, env)
  return config
}
