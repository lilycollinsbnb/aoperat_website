import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { BlogRollTemplate } from './BlogRoll'

MainPageBlogRoll.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
}

export default function MainPageBlogRoll () {
    return (
      <StaticQuery
        query={graphql`
          query MainPageBlogRollQuery {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
              limit: 6
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