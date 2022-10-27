import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ImageRightSection from "../components/ImageRightSection";

// eslint-disable-next-line
export const ProductPageTemplate = ({ pageTitle, subheading, contentSectionTitle, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <ImageRightSection 
      TitleTag={"h1"} 
      title={pageTitle} 
      subheading={subheading} 
      />
      <div className="container">
        <h2 className="has-text-weight-semibold has-text-centered is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
          {contentSectionTitle}
        </h2>
        <div className="columns is-multiline is-variable is-8 mrb-columns-wrapper">
          <div className="column is-flex mt-5">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

ProductPageTemplate.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  contentSectionTitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProductPageTemplate
        contentComponent={HTMLContent}
        pageTitle={post.frontmatter.pageTitle}
        subheading={post.frontmatter.subheading}
        contentSectionTitle={post.frontmatter.contentSectionTitle}
        content={post.html}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageTitle
        subheading
        contentSectionTitle
      }
    }
  }
`;
