import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import ImageRightSection from "../components/ImageRightSection";
import ClientsSection from "../components/ClientsSection";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, subheading, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <ImageRightSection TitleTag={"h1"} title={title} subheading={subheading} />
      <ClientsSection />
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
      }
    }
  }
`;
