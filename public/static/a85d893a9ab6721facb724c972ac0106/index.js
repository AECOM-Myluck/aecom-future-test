import * as React from "react"
import { graphql } from "gatsby"
import Fade from 'react-reveal/Fade';
import Layout from "../components/layout"
import Seo from "../components/seo"
import ModularContentHome from "../components/modular-content-home"
import Navigation from "../components/navigation";

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Navigation modules={data.allMarkdownRemark.edges}/>
    <div className="hero-home" id="section-hero-home">
      <div className="hero-home-container">
        <div className="logo">
          <a href=""><img src="../images/logo-white.png" /></a>
        </div>
        <div className="back-to-site">
          <a href="https://aecom.com/">AECOM.COM</a>
        </div>
        
        <div className="hero-heading">
          <Fade bottom>
            <h1>The future is right up ahead.</h1>
          </Fade>
          <Fade bottom>
            <p className="op-0">
            Roads that charge our cars. Hyperloop transport for people and goods. A spaceport for commercial travel.
            </p>
            <p className="op-0">
            By connecting the best ideas and knowledge from around the world, AECOM is partnering with visionary clients to deliver infrastructure for the future.
            </p>
          </Fade>
        </div>
        <div className="hero-sub-heading">
          <Fade bottom>
            <h2 className="op-0">Imagining what’s next, together.</h2>
          </Fade>
        </div>
      </div>
    </div>
    <ModularContentHome modules={data.allMarkdownRemark.edges}/>
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
      allMarkdownRemark(
        sort: {fields: frontmatter___menu_order, order: ASC}
        filter: {frontmatter: {type: {eq: "home-page-section"}}}
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              sub_title
              description
              bg_image
              menu_order
              author {
                image
                name
                position
                testimonials
              }
            }
          }
        }
      }
    }
`

export default IndexPage
