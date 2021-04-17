import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { useWindowSize } from "../utils/windowHook"

import closeimg from '../images/icons/cancel.svg'
import useScrollBlock from "../utils/useScrollBlock"

const MenuItem = ({ url, label, allowScroll }) => {
  return (
    <div className="menu_item">
      <Link to={url} onClick={() => allowScroll()}>
        {label}
      </Link>
    </div>
  )
}

const MenuResponsive = ({ data, close, allowScroll }) => (
  <div className="menu_responsive_wrapper">
    <MenuItem url="/" label="All" allowScroll={allowScroll}></MenuItem>
    {
      data.allPrismicCategories.edges.map(item => <MenuItem url={`/category/${item.node.uid}`} label={item.node.data.name} key={item.node.data.name} allowScroll={allowScroll}></MenuItem>)
    }
    <p>________</p>
    <MenuItem url="/contact" label="Contact" allowScroll={allowScroll}></MenuItem>
    <div className="close_wrapper" onClick={() => close()}>
      <img src={closeimg} alt="Close icon" allowScroll={() => allowScroll()} />
    </div>
  </div>
)

const HeaderBlock = ({ data }) => {
  const [stateMenuRes, setStateMenuRes] = React.useState(false)
  const [isResponsive, setIsResponsive] = React.useState(false)
  const [blockScroll, allowScroll] = useScrollBlock();

  const windowWitdh = useWindowSize()

  React.useEffect(() => {
    handleWindowWidthChange(windowWitdh.width);
  })

  const handleWindowWidthChange = size => {
    size < 600 ?
      setIsResponsive(true) : setIsResponsive(false);
  }

  const handleOpenMenuResponsive = (state) => {
    if (state) {
      setStateMenuRes(state)
      blockScroll();
    } else {
      setStateMenuRes(state)
      allowScroll();
    }
  }

  return (
    <header>
      <div className="title_wrapper">
        <Link to="/">
          <h1>Carlos Cuenca</h1>
          <h2>CINEMATOGRAPHER</h2>
        </Link>
      </div>
      {
        !isResponsive ? <div className="menu_wrapper">
          <MenuItem url="/" label="All"></MenuItem>
          {
            data.allPrismicCategories.edges.map(item => <MenuItem url={`/category/${item.node.uid}`} label={item.node.data.name} key={item.node.data.name} ></MenuItem>)
          }
          <p>|</p>

          <MenuItem url="/contact" label="Contact"></MenuItem>
        </div> : stateMenuRes ? <MenuResponsive data={data} close={() => handleOpenMenuResponsive(false)} allowScroll={() => allowScroll()}></MenuResponsive>
          : (<p className="menu_button" onClick={() => handleOpenMenuResponsive(true)}>menu</p>)
      }
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
