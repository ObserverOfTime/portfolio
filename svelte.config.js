import adapter from '@sveltejs/adapter-static';

export default {
  compilerOptions: {
    css: false,
    dev: process.env.NODE_ENV === 'development'
  },
  kit: {
    adapter: adapter({
      pages: 'build/portfolio', assets: 'build/portfolio'
    }),
    files: {
      assets: 'static',
      lib: 'src/components',
      routes: 'src/routes',
      serviceWorker: 'src/service-worker.js',
      appTemplate: 'src/template.html'
    },
    paths: {
      assets: '',
      base: '/portfolio'
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
    serviceWorker: {
      register: true
    }
  }
};
