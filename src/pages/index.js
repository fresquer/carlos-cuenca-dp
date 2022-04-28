import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/video_list"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Carlos Cuenca Cinematographer" />
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
              uid
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
            }
          }
        }
      }
    }
  }
}
`