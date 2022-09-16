import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class CareerOfferListTemplate extends React.Component {
  render() {
    function listItem (name, redirectTo) {

      return (
          <li style={liStyle}>
              <Link to={redirectTo}>
                  {name}
              </Link>
          </li>
      )
    }
    const liStyle = {
      fontSize: "20px"
    }
    const { data } = this.props
    const { edges: careers } = data.allMarkdownRemark
    return (
      <ul style={{listStyleType: "disc"}}>
        {careers.map(({ node: career }) => listItem(career.frontmatter.title, career.fields.slug))}
      </ul>
    )
  }
}

CareerOfferList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function CareerOfferList() {
  return (
    <StaticQuery
      query={graphql`
        query CareerOfferListQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "career-offer" }, title: {ne: "dummy" } }}
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  }
                }
              }
            }
          }
      `}
      render={(data, count) => <CareerOfferListTemplate data={data} count={count} />}
    />
  );
}