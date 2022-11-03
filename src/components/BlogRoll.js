import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline is-variable is-8 mrb-columns-wrapper">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-full-mobile is-half-tablet is-one-third-desktop" key={post.id}>
              <Link to={post.fields.slug} >
                <article
                  className="blog-list-item tile is-child"
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            width:
                              post.frontmatter.featuredimage.childImageSharp
                                .gatsbyImageData.width,
                            height:
                              post.frontmatter.featuredimage.childImageSharp
                                .gatsbyImageData.height,
                          }}
                        />
                      </div>
                    ) : null}
                    <h3 className="has-text-weight-semibold is-size-5-mobile is-size-4-tablet is-size-4-widescreen is-color-secondary-dark mt-3">{post.frontmatter.title}</h3>
                    <p className="post-meta mt-3">
                      <span className="subtitle is-size-6-mobile is-size-5-widescreen is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p className="is-color-secondary-dark">
                    {post.frontmatter.description.substring(0,400)}
                    <br />
                    <br />
                    <span className="has-text-weight-semibold button mrb-button mrb-button-link" to={post.fields.slug}>
                      czytaj dalej
                    </span>
                  </p>
                </article>
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function BlogRoll () {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "DD-MM-YYYY")
                  description
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 400
                        height: 400
                        quality: 100
                        transformOptions: {fit: COVER}
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
