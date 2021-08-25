import * as React from "react"
import { Link } from "react-scroll"
const SideNavigation = ({modules}) => (
    <div className="navigation">
      <ul>
      <li className="nav-item">
          <div className="nav-title">The Future</div>
          <Link activeClass="active" to="section-hero-home" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="nav-bullet"></div>
          </Link>
      </li>
      {modules.map(post => (
        <li className="nav-item">
          <div className="nav-title">{post.node.frontmatter.title}</div>
          <Link activeClass="active" to={'section-'+post.node.id} spy={true} smooth={true} offset={0} duration={1000}>
          <div className="nav-bullet"></div>
          </Link>
        </li>
      ))}
      </ul>
    </div>
)

export default SideNavigation