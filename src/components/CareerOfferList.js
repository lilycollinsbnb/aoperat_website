import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

class CareerOfferListTemplate extends React.Component {
  render() {
    function listItem (name, redirectTo, image) {

      return (
          <li style={liStyle}>
              <Link to={redirectTo}>
                {image?.url ? (
                   <img
                       src={image}
                       objectFit={"cover"}
                       objectPosition={imagePosition}
                       style={{
                       gridArea: "1/1",
                       // You can set a maximum height for the image, if you wish.
                       height: "260px",
                       width: "260px",
                       }}
                       // You can optionally force an aspect ratio for the generated image
                       // This is a presentational image, so the alt should be an empty string
                       alt=""
                       formats={["auto", "webp", "avif"]}
                   />
                   ) : (
                   <GatsbyImage
                       image={getImage(image)}
                       objectFit={"cover"}
                       objectPosition={imagePosition}
                       style={{
                       // You can set a maximum height for the image, if you wish.
                       height: "260px",
                       width: "260px"
                       }}
                       // You can optionally force an aspect ratio for the generated image
                       // This is a presentational image, so the alt should be an empty string
                       alt=""
                       formats={["auto", "webp", "avif"]}
                   />
                )}
                {name}
              </Link>
          </li>
      )
    }
    const imagePosition = "top left"
    const liStyle = {
      fontSize: "20px"
    }
    const { data } = this.props
    const { edges: careers } = data.allMarkdownRemark
    return (
      <ul className="mrb-carrer-list">
        {careers.map(({ node: career }) => listItem(career.frontmatter.title, career.fields.slug, career.frontmatter.featuredimage))}
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
                  title,
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 260
                        height: 260
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
      render={(data, count) => <CareerOfferListTemplate data={data} count={count} />}
    />
  );
}