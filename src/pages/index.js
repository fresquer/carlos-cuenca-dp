import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/video_list"
const item = [1, 2, 3, 4, 5, 6]

const IndexPage = ({ data }) => {
  console.log("🚀 ~ file: index.js ~ line 8 ~ IndexPage ~ data", data)
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
            url
          }
        }
        uid
      }
    }
  }
}
`