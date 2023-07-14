const linkResolver = require('./src/utils/linkResolver')

module.exports = {
  siteMetadata: {
    title: `Carlos Cuenca Cinematographer`,
    description: `Carlos Cuenca - Cinematographer`,
    author: `@fresquer`,
    siteUrl: "http://carloscuencadp.com"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carlos Cuenca DP`,
        short_name: `CarlosCuencaDP`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'carlos-cuenca-dp',
        // accessToken: 'example-access-token',
        fetchLinks: [],
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => { },
        schemas: {
          video: require('./custom_types/video.json'),
          home: require('./custom_types/home.json'),
          categories: require('./custom_types/categories.json'),
        },
        lang: '*',
        prismicToolbar: true,
        shouldDownloadImage: ({ node, key, value }) => { },
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
