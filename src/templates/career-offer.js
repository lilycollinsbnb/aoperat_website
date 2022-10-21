import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import postThumb from "../img/blog-post-thumb.png";
import carrerIcon1 from "../img/icons/carrer-rodzaj-umowy.svg";
import carrerIcon2 from "../img/icons/carrer-rodzaj-etatu.svg";

const liStyle = {
  fontSize: "16px"
}
const separator = ', '

// eslint-disable-next-line
export const CareerOfferTemplate = ({ title, typeOfContract, vacancy, responsibilities, requirements, whatWeOffer }) => {
    return (
        <section className="section section--gradient">
          <div className="container mrb-carrer-container">
            <div className="columns">
                <div className="column is-8 is-offset-2">
                    <div>
                      <img
                        src={postThumb}
                        alt="alt z CMSa"
                        width={"400px"}
                        height={"400px"}
                        className="mrb-carrer-thumb"
                      />
                      <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">
                          {title}
                      </h1>
                      { typeOfContract && vacancy &&
                        <div className="columns is-multiline is-variable is-8 mrb-columns-wrapper">
                          <div className="column is-flex is-full-mobile is-half-tablet mt-3">
                            <div className="pr-5">                 
                              <img
                                src={carrerIcon1}
                                alt="Komornicy"
                                style={{ minWidth: "50px", width: "50px", height: "50px" }}
                              />
                            </div>
                            <div>
                              <h3 className="has-text-weight-semibold is-size-4 no-margin-top is-color-secondary-dark">Rodzaj umowy:</h3>
                              <p className="mt-1">{typeOfContract.join(separator)}</p>
                            </div>
                          </div>
                          <div className="column is-flex is-full-mobile is-half-tablet mt-3">
                            <div className="pr-5">                 
                              <img
                                src={carrerIcon2}
                                alt="Komornicy"
                                style={{ minWidth: "50px", width: "50px", height: "50px" }}
                              />
                            </div>
                            <div>
                              <h3 className="has-text-weight-semibold is-size-4 no-margin-top is-color-secondary-dark">Rodzaj etatu:</h3>
                              <p className="mt-1">{vacancy.join(separator)}</p>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                    { responsibilities && 
                      <div>
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
                      <div>
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
                      <div>
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
                    <div>
                      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                          Dołącz do zespołu AOperat!
                      </h2>
                      <p>Osoby zainteresowane prosimy o przesłanie CV  na adres <b>praca@aoperat.pl</b> wraz ze <b>zgodą na przetwarzanie danych osobowych</b> o następującej treści:</p>
                      <br/>
                      <p>
                        <i>
                          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
                        </i>
                      </p>
                    </div>
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