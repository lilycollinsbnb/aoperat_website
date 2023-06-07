import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import useSiteMetadata from "../components/SiteMetadata";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  image,
  imagePosition = "top left",
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content mrb-blog-container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            {image?.url ? (
              <img
                src={image}
                objectFit={"cover"}
                objectPosition={imagePosition}
                style={{
                  gridArea: "1/1",
                  // You can set a maximum height for the image, if you wish.
                  width:"100%",
                  maxHeight:"400px"
                }}
                className="mrb-blog-thumb"
                // You can optionally force an aspect ratio for the generated image
                aspectratio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                formats={["auto", "webp", "avif"]}
              />
            ) : (
              <GatsbyImage
                image={getImage(image)}
                objectPosition={imagePosition}
                objectFit={"cover"}
                style={{
                  gridArea: "1/1",
                  width: "100%",
                  maxHeight: "400px"
                  // You can set a maximum height for the image, if you wish.
                }}
                // You can optionally force an aspect ratio for the generated image
                aspectratio={3 / 1}
                layout="fullWidth"
                // This is a presentational image, so the alt should be an empty string
                alt=""
                formats={["auto", "webp", "avif"]}
              />
            )}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light is-color-primary-green">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tagi</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, siteUrl } = useSiteMetadata()
  console.log(post.frontmatter.featuredimage)
  const ogImage = `${siteUrl}${post.frontmatter.featuredimage?.childImageSharp?.gatsbyImageData?.images.fallback.src}`
  console.log(ogImage)
  return (
    <Layout >
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        helmet={
          <Helmet >
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              property="og:title"
              content={`${title} - ${post.frontmatter.title}`}
            />
            <meta
              property="og:description"
              content={`${post.frontmatter.description}`}
            />
            {
              ogImage && <meta property="og:image" content={ogImage} />
            }
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200, height: 630 )
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
