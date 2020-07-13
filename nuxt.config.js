/**
 * NOTE:
 *   - 以下のパスをサイトマップXMLに出力する
 *   - generateしたとき以下のパスの静的ファイルを作成する
 */
const path = [
  '/',
  '/about',
  '/arigato',
  '/articles/1',
  '/articles/2',
  '/articles/3',
  '/articles/4',
  '/articles/5',
  '/articles/6',
  '/articles/7',
  '/articles/8',
  '/articles/9',
  '/articles/10',
  '/articles/11',
  '/articles/12',
  '/articles/13',
  '/articles/14',
  '/articles/15',
  '/articles/16',
  '/articles/17',
  '/articles/list/1',
  '/articles/list/2',
  '/articles/tag/1',
  '/articles/tag/2',
  '/articles/tag/3',
  '/articles/tag/4',
  '/articles/tag/5',
  '/articles/tag/6',
  '/articles/tag/7',
  '/articles/tag/8',
  '/articles/tag/9',
  '/articles/tag/10',
  '/articles/tag/11',
  '/articles/tag/12',
  '/articles/tag/13',
  '/articles/tag/14',
  '/articles/tag/15',
  '/articles/tag/16',
  '/articles/tag/17',
  '/articles/tag/18',
  '/articles/tag/19',
  '/articles/tag/20',
  '/articles/tag/21',
  '/articles/tag/22',
  '/articles/tag/23',
  '/articles/tag/24',
]

// 定数
const frontUrl = 'https://www.yurikago-blog.com'
const githubUrl = 'https://github.com/krabben27/yurikago'
const maxArticleCountInList = 10
const articleAuthor = 'Hiroki Kawaguchi'
const articleOrganization = 'Yurikago Blog'
const siteOwner = 'Hiroki Kawaguchi'
const disqusShortname = 'yurikago-blog'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    titleTemplate: '%s | Yurikago Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap' },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css',
        integrity: 'sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I',
        crossorigin: 'anonymous',
      }
    ],
    script: [
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js',
        integrity: 'sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/',
        crossorigin: 'anonymous',
        body: true
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0366d6' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/disqus.js',
    '~/plugins/schema/breadcrumb.js',
    '~/plugins/schema/article.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  googleAnalytics: {
    id: 'UA-155216702-1'
  },
  sitemap: {
    hostname: frontUrl,
    routes: path
  },
  // NOTE: クライアントサイドで使用できる環境変数を定義する
  env: {
    FRONT_URL: frontUrl,
    GITHUB_URL: githubUrl,
    MAX_ARTICLE_COUNT_IN_LIST: maxArticleCountInList,
    ARTICLE_AUTHOR: articleAuthor,
    ARTICLE_ORGANIZATION: articleOrganization,
    SITE_OWNER: siteOwner,
    DISQUS_SHORTNAME: disqusShortname
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // mdファイルはraw-loaderで読み込む
      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/,
      })
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    // 動的なパラメーターを用いたルートを生成
    routes: path,
    // エラー発生時に 200.html ではなく 404.html を表示する
    fallback: true
  }
}
