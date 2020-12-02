export default {
  devtools: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'msw-module-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  vue: {
    config: {
      devtools: true,
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '~/modules/msw',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    baseURL: 'https://jsonplaceholder.typicode.com', // Used as fallback if no runtime config is provided
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  proxy: {
    '/api': {
      target: 'https://jsonplaceholder.typicode.com',
      pathRewrite: { '^/api/': '' },
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: '/api/',
    },
  },
}
