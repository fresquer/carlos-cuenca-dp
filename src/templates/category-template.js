import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/video_list"

const CategoryPage = ({ data, pageContext }) => {
  const [videoListFiltered, setFilter] = React.useState([]);
  React.useEffect(() => {
    const final = data.prismicHome.data.videos_list
      .filter(item => item.video.document)
      .filter(item2 => pageContext.slug === item2.video.document.data?.category?.slug)
    setFilter(final);
  }, [])

  return (
    <Layout>
      <SEO title="Category" />
      <VideoList data={videoListFiltered}></VideoList>
    </Layout>
  )
}
export default CategoryPage


export const query = graphql`

query FilteredListCat {
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