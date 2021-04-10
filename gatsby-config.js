const linkResolver = require('./src/utils/linkResolver')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        linkResolver: () => linkResolver,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
