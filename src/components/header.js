import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

const MenuItem = ({ url, label }) => (
  <div className="menu_item">
    <Link to={url}>
      {label}
    </Link>
  </div>
)

const HeaderBlock = ({ data }) => {
  return (
    <header>
      <div className="title_wrapper">
        <Link to="/">
          <h1>Carlos Cuenca</h1>
          <h2>CINEMATOGRAPHER</h2>
        </Link>
      </div>
      <div className="menu_wrapper">
        <MenuItem url="/" label="All"></MenuItem>
        {
          data.allPrismicCategories.edges.map(item => <MenuItem url={`/category/${item.node.uid}`} label={item.node.data.name} key={item.node.data.name} ></MenuItem>)
        }
        <p>|</p>
        <MenuItem url="/contact" label="Contact"></MenuItem>
      </div>
    </header>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
            allPrismicCategories {
            edges {
              node {
                uid
                data {
                 name
                }
              }
            }
          }
        }
      `}
      render={data => <HeaderBlock data={data} />}
    />
  )
}

export default Header
