import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AffiliateProgramPageTemplate = ({ title, subtitle, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    // <div>
    //   <div className="container">
    //     <h2 className="title is-size-3 has-text-weight-bold is-bold-light is-color-primary-green">
    //           {title}
    //     </h2>
    //     <div className="columns is-multiline is-variable is-8 mrb-columns-wrapper">
    //       <div className="column is-flex">
    //         <PageContent className="content mb-5" content={content} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section>
      <div className="container is-max-desktop mrb-container">
      <span className="has-text-weight-semibold has-text-centered mrb-label">{subtitle}</span>
        <h1 className="has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">
          {title}
        </h1>
        <div className="columns is-multiline is-variable is-8 mrb-columns-wrapper pt-3">
          <div className=" column is-flex">
             <PageContent className="content mb-5" content={content} />
           </div>
       </div>
      </div>
    </section>
  );
};

AffiliateProgramPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AffiliateProgramPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AffiliateProgramPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
      />
    </Layout>
  );
};

AffiliateProgramPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AffiliateProgramPage;

export const AffiliateProgramPageQuery = graphql`
  query AffiliateProgramPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
