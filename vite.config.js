import {sveltekit} from '@sveltejs/kit/vite'
import {ViteToml} from 'vite-plugin-toml';

export default {
  clearScreen: false,
  mode: process.env.NODE_ENV || 'production',
  plugins: [
    sveltekit(),
    ViteToml({namedExports: true})
  ],
  resolve: {
    extensions: ['.js', '.svelte']
  },
  server: {
    fs: {strict: false}
  }
}
