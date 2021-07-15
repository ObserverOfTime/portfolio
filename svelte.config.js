import adapter from '@sveltejs/adapter-static';
import {ViteToml} from 'vite-plugin-toml';

export default {
  compilerOptions: {
    css: false,
    dev: process.env.NODE_ENV === 'development'
  },
  kit: {
    adapter: adapter({
      pages: 'build/portfolio', assets: 'build/portfolio'
    }),
    amp: false,
    appDir: 'app',
    files: {
      assets: 'static',
      lib: 'src/components',
      routes: 'src/routes',
      serviceWorker: 'src/service-worker.js',
      template: 'src/template.html'
    },
    hydrate: true,
    paths: {
      assets: '',
      base: '/portfolio'
    },
    prerender: {
      crawl: false,
      enabled: true,
      force: true,
      pages: ['*']
    },
    router: false,
    target: '#svelte',
    trailingSlash: 'always',
    vite: {
      // base: '/portfolio/',
      clearScreen: false,
      mode: process.env.NODE_ENV || 'production',
      plugins: [
        ViteToml({useBigInt: false, namedExports: true})
      ],
      resolve: {
        extensions: ['.mjs', '.js', '.cjs', '.svelte', '.json']
      }
    }
  }
};
