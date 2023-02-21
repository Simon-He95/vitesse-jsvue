import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vitesse',
    file: 'dist/index.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
