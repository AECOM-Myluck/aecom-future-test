import * as React from "react"
import { graphql  } from "gatsby"
import Fade from 'react-reveal/Fade';
import Img from "gatsby-image"

const ModularContentHome = ({modules}) => (
    <div className="modular-content-home">
      {modules.map(post =>(
        <div key={post.node.id} className="modular-item" id={'section-'+post.node.id} style={{
          backgroundImage: 'url('+post.node.frontmatter.bg_image.childImageSharp.gatsbyImageData.images.fallback.src+')'
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
                          {/* <AuthorImage image={post.node.frontmatter.author.image}/> */}
                          <div className="author-image">
                              <Img fluid={post.node.frontmatter.author.featuredImage.childImageSharp.fluid} />
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

export default ModularContentHome