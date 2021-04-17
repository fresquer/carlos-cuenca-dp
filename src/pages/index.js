import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/video_list"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <VideoList data={data.allPrismicVideo.edges}></VideoList>
    </Layout>
  )
}
export default IndexPage


export const query = graphql`
query videosIndex {
  allPrismicVideo {
    edges {
      node {
        id
        data {
          titulo {
            text
          }
          cover {
            fluid(maxWidth: 800) {
            ...GatsbyPrismicImageFluid
          }
          url
          }
        }
        uid
      }
    }
  }
}
`