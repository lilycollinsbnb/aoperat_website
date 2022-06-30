import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <div className="container">
               <h2 className="title is-size-4 is-bold-light">Naszymi klientami są:</h2>
                <div className="columns is-multiline">
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Komornicy</h2>
                    <p>Dla licytacji</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Banki</h2>
                    <p>Na kredyt hipoteczny</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Gminy</h2>
                    <p>Na określenie opłat z dzierżawy wieczystej</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Deweloperzy</h2>
                    <p>Do uzyskania kredytowania</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Spółki</h2>
                    <p>Na wniesienie nieruchomości aportem</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Spadkobiercy</h2>
                    <p>Na określenie wysokości spadku</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Ubezpieczyciele</h2>
                    <p>Na polisę ubezpieczeniową</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Sądy</h2>
                    <p>W postępowaniu sądowym</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">GDDKIA</h2>
                    <p>Inwestycje liniowe pod drogi</p>
                  </div>
                  <div className="column is-4">
                    <h2 className="is-size-5 has-text-weight-bold">Urząd Skarbowy</h2>
                    <p>Kontrola wysokości podatków</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
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
      }
    }
  }
`;
