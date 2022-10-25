import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ImageRightSection from "../components/ImageRightSection";

// eslint-disable-next-line
export const ProductPageTemplate = ({ title, subheading, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <ImageRightSection 
      TitleTag={"h1"} 
      title={title} 
      subheading={subheading} 
      />
      <div className="container">
        <PageContent className="content" content={content} />
      </div>
    </div>
    
    
  );
};

ProductPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProductPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
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
        title
        subheading
      }
    }
  }
`;
