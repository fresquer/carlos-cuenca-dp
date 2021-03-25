import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoListItem from "../components/video-list-item"
const item = [1, 2, 3, 4, 5, 6]
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="video_list_wrapper">
      {
        item.map((item, i) => <VideoListItem data={item} key={i}></VideoListItem>)
      }
    </section>
  </Layout>
)

export default IndexPage
