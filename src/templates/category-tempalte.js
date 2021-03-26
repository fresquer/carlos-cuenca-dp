import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/video_list"

const CategoryPage = ({ data }) => {
    console.log("🚀 ~ file: index.js ~ line 8 ~ CategoryPage ~ data", data)
    return (
        <Layout>
            <SEO title="Category" />
            <VideoList data={data.prismicHome.data.videos_list}></VideoList>
        </Layout>
    )
}
export default CategoryPage


export const query = graphql`
query videos {
  prismicHome {
    data {
      videos_list {
        video {
          document {
            ... on PrismicVideo {
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
    }
  }
}
`