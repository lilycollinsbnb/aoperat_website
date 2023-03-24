import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import TrainingParticipationForm from "../components/TrainingParticipationForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// eslint-disable-next-line
export const TrainingOfferTemplate = ({
  content,
  contentComponent,
  image,
  imagePosition = "top left",
  title,
  helmet,
}) => {
  const OfferContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content mrb-training-container">
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
                className="mrb-training-thumb"
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
            <OfferContent content={content} />
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light is-color-primary-green">
              Zostaw swoje dane kontaktowe jeśli chcesz uzyskać informacje o najbliższym szkoleniu
            </h1>
            <TrainingParticipationForm title={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

TrainingOfferTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const TrainingOffer = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY}>
        <TrainingOfferTemplate
          content={post.html}
          contentComponent={HTMLContent}
          image={post.frontmatter.image}
          helmet={
            <Helmet titleTemplate="%s | Szkolenie">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          title={post.frontmatter.title}
        />
      </GoogleReCaptchaProvider>
    </Layout>
  );
};

TrainingOffer.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default TrainingOffer;

export const pageQuery = graphql`
  query TrainingOfferByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
