import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="title_wrapper">
      <Link to="/">
        <h1>Carlos Cuenca</h1>
        <h2>CINEMATOGRAPHER</h2>
      </Link>
    </div>
    <div className="menu_wrapper">
      <p>hello</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
