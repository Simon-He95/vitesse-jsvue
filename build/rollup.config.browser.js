import { terser } from 'rollup-plugin-terser'
import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    file: 'dist/index.min.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      vue: 'Vue',
    },
  },
})

config.plugins.push(terser())

export default config
