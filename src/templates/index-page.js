import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import MainPageBlogRoll from "../components/MainPageBlogRoll";
import MainPageCarousel from "../components/MainPageCarousel";
import FreeTrialPopup from "../components/FreeTrialPopup";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  carouselItems
}) => {
  const isSSR = typeof window === "undefined"
  return (
    <div>
      <MainPageCarousel items={carouselItems} />
      <section>
        <div className="container is-fullhd mrb-container">
        { !isSSR &&
        <React.Suspense fallback={<div />}>
          { window.location.href.indexOf('open-popup=true') > -1 &&
            <FreeTrialPopup />
          }
        </React.Suspense>
      }
          <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
            Aktualności
          </h3>
          <MainPageBlogRoll />
          <div className="buttons is-centered">
            <Link className="button mrb-button mrb-button-light" to="/blog">
              Czytaj więcej
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  carouselItems: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        carouselItems={frontmatter.carouselItems}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        carouselItems {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          text
          redirectTo
        }
      }
    }
  }
`;
