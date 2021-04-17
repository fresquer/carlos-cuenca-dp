import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/video_list"

const CategoryPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Category" />
      <VideoList data={data.allPrismicVideo.edges}></VideoList>
    </Layout>
  )
}
export default CategoryPage


export const query = graphql`
query videosIteme($slug: String) {
  allPrismicVideo(filter: {data: {category: {uid: {eq: $slug}}}}) {
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