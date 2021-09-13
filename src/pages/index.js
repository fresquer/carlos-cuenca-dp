import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/video_list"

const IndexPage = ({ data }) => {
  console.log("🚀 ~ file: index.js ~ line 9 ~ IndexPage ~ data", data)
  return (
    <Layout>
      <SEO title="Home" />
      <VideoList data={data.prismicHome.data.videos_list}></VideoList>
    </Layout>
  )
}
export default IndexPage


export const query = graphql`
query FilteredList {
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
                category {
                  slug
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