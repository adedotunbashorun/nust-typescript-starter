require('dotenv').config();
import webpack from 'webpack';
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'coinbase-frontend',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/main.css',
        '~/assets/scss/main.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/axios',
        '~/plugins/vuelidate',
        '~/plugins/app-filters'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/toast',
        'nuxt-socket-io',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/auth',
        '@nuxtjs/moment', ['vue-currency-filter/nuxt', {
            symbol: '₦',
            thousandsSeparator: ',',
            fractionCount: 2,
            fractionSeparator: '.',
            symbolPosition: 'front',
            symbolSpacing: false
        }],
        [
            '@nuxtjs/component-cache',
            {
                max: 10000,
                maxAge: 1000 * 60 * 60
            }
        ]
    ],
    toast: {
        position: 'top-right',
        register: [ // Register custom toasts
            {
                name: 'error',
                message: 'Oops...Something went wrong',
                options: {
                    type: 'error'
                }
            }
        ]
    },
    axios: {
        baseURL: process.env.API_BASE_URL,
    },
    io: {
        // module options
        sockets: [{
            name: 'main',
            url: 'http://localhost:8180',
        }]
    },
    auth: {
        redirect: {
            callback: '/',
            logout: '/',
            login: '/',
        },
        strategies: {
            local: {
                scheme: 'refresh',
                endpoints: {
                    login: { url: 'auth/login', method: 'post', propertyName: 'accessToken' },
                    refresh: { url: 'auth/token', method: 'post', propertyName: 'refreshToken' },
                    user: { url: 'auth/me', method: 'get', propertyName: 'user' },
                    logout: false
                },
                tokenRequired: true,
                tokenType: 'Bearer',
                globalToken: true,
                tokenName: 'Authorization'
            }
        },
        watchLoggedIn: true,
        localStorage: {
            prefix: 'auth.'
        },
        cookie: {
            prefix: 'auth.', // Default token prefix used in building a key for token storage in the browser's localStorage.
            options: {
                path: '/', // Path where the cookie is visible. Default is '/'.
                expires: 5 // Can be used to specify cookie lifetime in Number of days or specific Date. Default is session only.
                    // domain: '', // Domain (and by extension subdomain/s) where the cookie is visible. Default is domain and all subdomains.
                    // secure - false, // Sets whether the cookie requires a secure protocol (https). Default is false, should be set to true if possible.
            }
        },
        resetOnError: true
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: ["vuelidate/lib/validators"],
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                '_': 'lodash'
            }),
        ],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(xlsx|pdf)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            });
            config.resolve.alias["vue"] = "vue/dist/vue.common";
        }
    }
}
