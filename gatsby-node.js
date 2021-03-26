/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query videos {
        allPrismicVideo {
          nodes {
            uid
          }
        }
        allPrismicCategories {
          edges {
            node {
              uid
            }
          }
        }
      }
  `)

  result.data.allPrismicVideo.nodes.forEach((res) => {
    console.log("🚀 ~ file: gatsby-node.js ~ line 22 ~ result.data.allPrismicVideo.nodes.forEach ~ node", res)
    createPage({
      path: `video/${res.uid}`,
      component: path.resolve(`./src/templates/video-detail-template.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: res.uid,
      },
    })
  })

  result.data.allPrismicCategories.edges.forEach((res) => {
    console.log("🚀 ~ file: gatsby-node.js ~ line 22 ~ result.data.allPrismicVideo.nodes.forEach ~ node", res)
    createPage({
      path: `category/${res.node.uid}`,
      component: path.resolve(`./src/templates/video-detail-template.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: res.node.uid,
      },
    })
  })

}