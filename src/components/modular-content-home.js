import * as React from "react"
import { graphql  } from "gatsby"
import Fade from 'react-reveal/Fade';

const ModularContentHome = ({modules}) => (
    <div className="modular-content-home">
      {modules.map(post =>(
        <div key={post.node.id} className="modular-item" id={'section-'+post.node.id} style={{
          backgroundImage: 'url(../images/'+post.node.frontmatter.bg_image+')'
        }}>
            <div className="gradient"></div>
              <div className="modular-absolute-container">
                <div className="modular-item-container">
                  <Fade bottom>
                      <div className="slogan">
                          <div className="slogan-wrapper">
                          <h3>{post.node.frontmatter.sub_title}</h3>
                          <h2>{post.node.frontmatter.title}</h2>
                          <p className="description">{post.node.frontmatter.description}</p>
                          </div>
                      </div>
                    </Fade>
                    <Fade bottom>
                      <div className="author-details">
                          <div className="author-container">
                          <div className="author-image">
                              <img src={'../images/'+post.node.frontmatter.author.image} />
                          </div>
                          <div className="author-testimonial">
                              <p>{post.node.frontmatter.author.testimonials}</p>
                              <p className="author-name">{post.node.frontmatter.author.name}</p>
                              <p className="author-title">{post.node.frontmatter.author.position}</p>
                          </div>
                          </div>
                      </div>
                    </Fade>
                  </div>
              </div>
            </div>
      ))}
    </div>
)

export const pageQuery = graphql`
    query {
      allMarkdownRemark(
        sort: {fields: frontmatter___menu_order, order: ASC}
        filter: {frontmatter: {type: {eq: "home-page-section"}}}
      ) {
        edges {
          node {
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

export default ModularContentHome