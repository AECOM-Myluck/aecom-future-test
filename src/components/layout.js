/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, 
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons'

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div>
        <main>{children}</main>
        <footer>
          <div className="footer-container">
            <div className="copyright">
              <p>© 2019 AECOM. ALL RIGHTS RESERVED.</p>
            </div>
            <ul className="social-links">
              <li><a href="https://facebook.com/aecomtechnologycorporation/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="https://www.instagram.com/aecom/"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="https://www.linkedin.com/company/aecom_15656"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://twitter.com/aecom"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.youtube.com/user/AECOMTechnologyCorp"><FontAwesomeIcon icon={faYoutubeSquare} /></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
