import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import ImageRightSection from "../components/ImageRightSection";
import ClientsSection from "../components/ClientsSection";
import PreviewCompatibleImage from './../components/PreviewCompatibleImage'

// eslint-disable-next-line
export const AboutPageTemplate = ({ pageTitle, subheading, image, teamMembers, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  const createTeamMemberRows = (teamMembers) => {
    let rows = []
    for (let i=0; i < teamMembers.length; i+=3) {
      const membersSlice = teamMembers.slice(i, i+3)
      rows.push(createTeamMemberRow(membersSlice))
    }

    return (rows)
  }

  const createTeamMemberRow = (membersSlice) => {

    return (
      <div className="photo-row">
        {membersSlice?.map(member => createTeamMemberHtml(member))}
      </div>
    )
  }

  const createTeamMemberHtml = (member) => {
    return (
    <>
    { member.image ?
      (<div className="photo-circle">
        <PreviewCompatibleImage
          imageInfo={{
            image: member.image,
            alt: `Zdjęcie - ${member.name}`,
          }}
        />
        <div class="caption caption-bold">{member.name}</div>
        <div class="caption">{member.caption1}</div>
        <div class="caption">{member.caption2}</div>
      </div>) : null
      }
    </>
    )
  }

  return (
    <div>
      <ImageRightSection TitleTag={"h1"} title={pageTitle} subheading={subheading} img={image} />
      <ClientsSection />
      <div className="container">
        <div className="columns is-multiline is-variable is-8 mrb-columns-wrapper">
          <div className="column is-flex">
            <PageContent className="content" content={content} />
          </div>
          
        </div>
      </div>
      {createTeamMemberRows(teamMembers)}
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  teamMembers: PropTypes.array
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        pageTitle={post.frontmatter.pageTitle}
        subheading={post.frontmatter.subheading}
        image={post.frontmatter.image}
        teamMembers={post.frontmatter.teamMembers}
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
        pageTitle
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        teamMembers {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 200
                height: 200
                quality: 100
                transformOptions: {fit: COVER}
              )
            }
          }
          name
          caption1
          caption2
        }
      }
    }
  }
`;
