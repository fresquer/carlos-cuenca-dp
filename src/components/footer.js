import * as React from "react"
import PropTypes from "prop-types"

import insta from '../images/icons/instagram.svg';
import vimeo from '../images/icons/vimeo.svg';

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="info">
            <p>Carlos Cuenca · Cinematographer | <a href="mailto:carloscuencadp@gmail.com">carloscuencadp@gmail.com</a></p>
        </div>
        <div className="rrss_wrapper">
            <a href="https://www.instagram.com/ccuencam/">
                <img src={insta} alt="insta" />
            </a>
            <a href="https://vimeo.com/carloscuencadp">
                <img src={vimeo} alt="vimeo" />
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
