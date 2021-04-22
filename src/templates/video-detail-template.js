import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => {
    return (
        <Layout mainId="video_detail_page_wrapper">
            <SEO title={data.prismicVideo.data.titulo.text} image={data.prismicVideo.data.cover.url} />
            <section className="video_wrapper">
                <div
                    id="html_wrapper"
                    dangerouslySetInnerHTML={{ __html: data.prismicVideo.data.video }}
                />
            </section>
            <h1>{data.prismicVideo.data.titulo.text}</h1>
            <section className="info_wrapper">
                {
                    data.prismicVideo.data.info_video.map((item, i) =>
                    (<div className="info_item" key={i}>
                        <p>{item.rol.text}: </p>
                        <p>{item.nombre.text}</p>
                    </div>))
                }
            </section>
            <section className="gallery_wrapper">
                {
                    data.prismicVideo.data.gallery.map((item, i) =>
                    (<div className="gallery_item" key={i}>
                        {/* <GatsbyImage
                            loading="lazy"
                            placeholder="blurred"
                            alt={'gallery image'}
                            fluid={
                                getImage(item.img.fluid)
                            }
                        /> */}
                        <img src={item.img.url} alt="" />
                    </div>))
                }
            </section>
        </Layout>
    )
}

export default ContactPage
export const query = graphql`
    query videosItem($slug: String) {
    prismicVideo(uid: {eq: $slug}) {
        uid
        data {
                    
        titulo {
            text
        }
        info_video {
            rol {
            text
            }
            nombre {
            text
            }
        }
        gallery {
            img {
            url
            fluid(maxWidth: 800) {
            ...GatsbyPrismicImageFluid
                }
            }
        }
        cover {
            url
        }
        video
        }
    }
    }
`