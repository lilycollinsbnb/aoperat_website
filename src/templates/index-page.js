import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import MainPageBlogRoll from "../components/MainPageBlogRoll";
import MainPageCarousel from "../components/MainPageCarousel";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  carouselItems
}) => {
  
  const isSSR = typeof window === "undefined"

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <div>
    { !isSSR &&
      <Popup contentStyle={{minWidth: "300px", maxHeight: "600px", overflow: "auto"}} defaultOpen={true} modal>
      { close => (
        <div>
          <button type="button" style={{float: "right", backgroundColor: "transparent", border: "none", outline: "none", fontSize: "30px"  }} onClick={close} >
            &times;
          </button>
          <div style={{padding: "20px 0px"}}>
            <div className="" > 
              <h3 style={{textAlign: "center"}} className="has-text-weight-semibold is-size-5-mobile is-size-4-tablet is-size-4-widescreen is-color-secondary-dark mt-3">AOPERAT.PL</h3>
            </div>
            <div className="center-content mt-5">
              Chesz uzyskać możliwość <b>darmowego</b> używania platformy AOperat przez <b>3 miesiące</b>? Zostaw swój adres mailowy.
            </div>
            <div className="center-content mt-3">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label mrb-label-hidden" htmlFor={"email"}>
                    Adres email
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        id={"email"}
                        placeholder={"Adres email"}
                        // onChange={e => {e.preventDefault(); setEmail(e.target.value)} }
                        required={true}
                      />
                    </div>
                </div>
                <div className="mt-5 checkbox-field">
                  <input
                      className="checkbox"
                      type={"checkbox"}
                      name={"consent-to-contact"}
                      id={"consent-to-contact"}
                      // checked={consentToContact}
                      // onChange={e => {setConsentToContact(!consentToContact)} }
                      required={true}
                      
                    />
                  <label htmlFor="consent-to-contact" className="center-content">Na podstawie art. 10 ust. 2 ustawy o świadczeniu usług drogą elektroniczną wyrażam zgodę na przekazywanie przez AOperat Prosta Spółka Akcyjna, na udostępniony przeze mnie adres e-mail informacji handlowych.</label>
                </div>
                <button type="submit" style={{width: "100%"}} className="mt-5 has-text-weight-bold button mrb-button mrb-button-dark">ZAPISZ MNIE</button>
                
                <div className="mrb-text-div mt-6">
                  Przed wyrażeniem zgody prosimy o zapoznanie się z <Link to="/terms-and-conditions">Regulaminem</Link> i <Link to="/privacy-policy">Polityką Prywantości</Link>. Wyrażenie zgody na kontakt drogą mailową i zaakceptowanie postanowień Polityki Prywatności oraz Regulaminu jest dobrowolne ale niezbędne do tego abyśmy mogli się z Tobą skontaktować. Zgodę można w każdej chwili cofnąć kontaktując się z Administratorem Danych Osobwych wskazanym w <Link to="/privacy-policy">Polityce Prywantości</Link>. 
                </div>
               
              </form>
            </div>
          </div>
        </div>
      )}
      </Popup>
    }
      <MainPageCarousel items={carouselItems} />
      <section>
        <div className="container is-fullhd mrb-container">
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
