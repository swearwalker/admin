require('dotenv').config()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  server: {
    port: process.env.PORT,
    host: process.env.BASE_URL,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'admin-next',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: '#ff5555',
    height: '.125rem',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/style.scss', 'vuesax/dist/vuesax.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax',
    '@/plugins/vue-lazyload',
    '@/plugins/v-click-outside',
    '@/plugins/vue-formulate',
    '@/plugins/sw-ui',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/date-fns',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    'nuxt-i18n',
    '@nuxtjs/svg-sprite',
    'nuxt-webfontloader',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-En',
        file: 'en.js',
        name: 'En',
      },
      // TODO: example uk, ru translations
      // {
      //   code: 'uk',
      //   iso: 'uk-UA',
      //   file: 'en.js',
      //   name: 'Uk',
      // },
      // {
      //   code: 'ru',
      //   iso: 'ru-RU',
      //   file: 'en.js',
      //   name: 'Ru',
      // },
    ],
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'lang/',
    baseUrl: process.env.BASE_URL + process.env.PORT,
    seo: true,
    defaultLocale: 'en',
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: '',
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get' },
        },
      },
    },
  },

  webfontloader: {
    google: {
      families: ['Lato:400,700'],
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  svgSprite: {
    input: '~/static/icons',
    output: '~/static/sprite',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (!isClient) {
        return config
      }
      config.devtool = 'source-map'
      if (isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  router: {
    middleware: ['auth'],
  },
}
