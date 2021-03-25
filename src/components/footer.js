import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="info">
            <p>Carlos Cuenca · Cinematographer | <a href="mailto:carloscuencadp@gmail.com">carloscuencadp@gmail.com</a></p>
        </div>
        <div className="rrss_wrapper">
            <a href="https://www.instagram.com/ccuencam/">
                <img src="https://carloscuencadp.com/wp-content/uploads/2020/11/002-instagram.svg" alt="insta" />
            </a>
            <a href="https://vimeo.com/carloscuencadp">
                <img src="https://carloscuencadp.com/wp-content/uploads/2020/11/001-vimeo.svg" alt="vimeo" />
            </a>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
