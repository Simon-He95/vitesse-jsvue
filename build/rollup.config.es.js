import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [...base.external, 'mitt', 'vue-observe-visibility', 'vue-resize'],
})

export default config
