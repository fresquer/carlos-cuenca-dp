/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { preloadFontList } from "../utils/preloadFontList"

function SEO({ description, lang, meta, title, image }) {
  const { site, prismicHome } = useStaticQuery(
    graphql`
      {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
        prismicHome {
          data {
            videos_list {
              video {
                document {
                  ... on PrismicVideo {
                    id
                    uid
                    data {
                      cover {
                        url
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
  )

  const converImage = prismicHome.data.videos_list[0].video.document.data.cover.url;

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: image ? image : converImage,
        },
        {
          property: `twitter:image`,
          content: image ? image : converImage,
        },
        {
          property: `og:image:width`,
          content: `800`,
        },
        {
          property: `og:image:height`,
          content: `500`,
        },

        {
          property: `og:image:alt`,
          content: `Zubi Labs Img`,
        },
      ].concat(meta)}

    >
      {
        preloadFontList.map((item, i) => <link rel="prefetch" href={item.path} crossorigin="anonymous" as="fetch" key={i}></link>)
      }
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}



export default SEO
