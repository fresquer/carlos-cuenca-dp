import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import carlos from '../images/carlos-photo.jpeg'
import insta from '../images/icons/instagram.svg'
import vimeo from '../images/icons/vimeo.svg'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <div className="contact_wrapper">
            <div className="img_wrapper">
                <StaticImage
                    src="../images/carlos-photo.jpeg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    placeholder="blurred"
                    alt="Carlos on camera"
                />
            </div>
            <div className="info_wrapper">
                <p>
                    <a href="mailto:carloscuencadp@gmail.com">carloscuencadp@gmail.com</a>
                </p>
                <p>
                    <a href="tel:+34675724980">(+34) 675 724 980</a>
                </p>
                <div className="social">
                    <a href="https://vimeo.com/carloscuencadp" target="_blank">
                        <img src={vimeo} alt="" />
                    </a>
                    <a href="https://www.instagram.com/ccuencam/" target="_blank">
                        <img src={insta} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
