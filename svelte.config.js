import adapter from '@sveltejs/adapter-static';
import {execSync} from 'node:child_process';

export default {
  compilerOptions: {
    css: false,
    dev: process.env.NODE_ENV === 'development'
  },
  kit: {
    appDir: 'app',
    adapter: adapter({
      pages: 'build/portfolio',
      assets: 'build/portfolio'
    }),
    files: {
      assets: 'static',
      lib: 'src/components',
      routes: 'src/routes',
      serviceWorker: 'src/service-worker.js',
      appTemplate: 'src/template.html'
    },
    paths: {
      base: '/portfolio',
      relative: false
    },
    prerender: {
      crawl: false,
      entries: ['*']
    },
    csp: {
      mode: 'hash',
      directives: {
        'script-src': ['self'],
        'style-src': ['self', 'unsafe-inline']
      }
    },
    output: {
      preloadStrategy: 'preload-mjs'
    },
    serviceWorker: {
      files: file => !(/\.nojekyll/).test(file)
    },
    version: {
      name: execSync('git rev-parse HEAD').toString().trim()
    }
  }
};
