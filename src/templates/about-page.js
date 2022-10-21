import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import ImageRightSection from "../components/ImageRightSection";
import ClientsSection from "../components/ClientsSection";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <ImageRightSection TitleTag={"h1"} title={"Pomagamy okreslić wartość nieruchomości, w sposób szybki i dokładny."} subheading={"W naszej codziennej pracy zauważyliśmy, że klienci za długo czekają na wykonanie operatu szacunkowego. Operaty między rzeczoznawcami są różnej jakości, nie ma standardów szablonu dokumentu. Dlatego stworzyliśmy platformę do szybkiego i dokładnego generowania operatów szacunkowych, dzięki której możesz jak najszybciej działać."} />
      <ClientsSection />
    </div>
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
