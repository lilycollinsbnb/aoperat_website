import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const liStyle = {
  fontSize: "16px"
}
const separator = ', '

// eslint-disable-next-line
export const CareerOfferTemplate = ({ title, typeOfContract, vacancy, responsibilities, requirements, whatWeOffer }) => {
    return (
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
                <div className="column is-10 is-offset-1">
                    <div className="section">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                            {title}
                        </h2>
                        { typeOfContract && vacancy &&
                          <div>
                            <div className="columns is-multiline">
                              <div className="column is-4">
                                <h2 className="is-size-5 has-text-weight-bold">Rodzaj umowy:</h2>
                                <p>{typeOfContract.join(separator)}</p>
                              </div>
                              <div className="column is-4">
                                <h2 className="is-size-5 has-text-weight-bold">Rodzaj etatu:</h2>
                                <p>{vacancy.join(separator)}</p>
                              </div>
                            </div>
                          </div>
                        }
                    </div>
                    { responsibilities && 
                      <div className="section">
                          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                              Zakres obowiązków:
                          </h2>
                          <div className="column is-10">
                            <ul style={{listStyleType: "disc"}}>
                              {responsibilities.map(x => <li style={liStyle}>{x}</li>)}
                            </ul>
                          </div>
                      </div>
                    }
                    { requirements &&
                    <div className="section">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                            Wymagania:
                        </h2>
                        <div className="column is-10">
                          <ul style={{listStyleType: "disc"}}>
                            {requirements.map(x => <li style={liStyle}>{x}</li>)}
                          </ul>
                        </div>
                    </div>
                    }
                    { whatWeOffer &&
                      <div className="section">
                      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                          Oferujemy:
                      </h2>
                      <div className="column is-10">
                        <ul style={{listStyleType: "disc"}}>
                          {whatWeOffer.map(x => <li style={liStyle}>{x}</li>)}
                        </ul>
                      </div>
                  </div>
                    }
                </div>
            </div>
      </div>
    </section>
    )
}

CareerOfferTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    typeOfContract: PropTypes.string.isRequired,
    vacancy: PropTypes.string.isRequired
};

const CareerOffer = ({ data }) => {
    const { markdownRemark: offer } = data;
  
    return (
      <Layout>
        <CareerOfferTemplate
          title={offer.frontmatter.title}
          responsibilities={offer.frontmatter.responsibilities}
          requirements={offer.frontmatter.requirements}
          whatWeOffer={offer.frontmatter.whatWeOffer}
          typeOfContract={offer.frontmatter.typeOfContract}
          vacancy={offer.frontmatter.vacancy}
        />
      </Layout>
    );
};
  
CareerOffer.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  };

export default CareerOffer;

export const pageQuery = graphql`
  query CarrerOfferById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        typeOfContract
        vacancy
        responsibilities
        requirements
        whatWeOffer
      }
    }
  }
`;