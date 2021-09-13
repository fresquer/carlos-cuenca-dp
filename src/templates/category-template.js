import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoList from "../components/video_list"

const CategoryPage = ({ data, pageContext }) => {
  console.log("🚀 ~ file: category-template.js ~ line 9 ~ CategoryPage ~ pageContext", pageContext)

  const [videoListFiltered, setFilter] = React.useState([]);

  React.useEffect(() => {
    const final = data.prismicHome.data.videos_list.filter(item => pageContext.slug === item.video.document.data.category.slug)
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