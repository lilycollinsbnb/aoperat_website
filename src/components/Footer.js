import * as React from "react";
import { Link } from "gatsby";

import logoFooter from "../img/logo-footer.svg";
import facebook from "../img/social/facebook.svg";
import vimeo from "../img/social/vimeo.svg";
import linkedin from "../img/social/linkedin-white-1.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter is-background-secondary-dark">
        <div className="container is-fullhd has-text-white-ter mrb-footer-container">
          <div className="columns is-variable is-8">
            <div className="column is-4">
              <img
                src={logoFooter}
                alt="AOperat"
                style={{ width: "68.66px", height: "50.5px" }}
              />
              <p className="is-max-width-2 pt-3">
                Kochamy nieruchomości oraz pracę związaną z nimi. 
              </p>
            </div>
            <div className="column is-3">
              <h4 className="has-text-weight-semibold is-size-5">Podstrony</h4>
              <section className="menu mrb-menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Strona główna
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      O Nas
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/product">
                      O Produkcie
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Aktualności
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/training">
                      Szkolenia
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </section>
            </div>

            <div className="column is-3">
              <h4 className="has-text-weight-semibold is-size-5">Informacje</h4>
              <section className="menu mrb-menu">
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/terms-and-conditions">
                      Regulamin
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/privacy-policy">
                      Polityka prywatności
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-2">
              <h4 className="has-text-weight-semibold is-size-5">Obserwuj nas</h4>
              <div className="mrb-socials">
                <a title="facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/groups/aoperat/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1.1em", height: "1.1em" }}
                  />
                </a>
                <a title="vimeo" target="_blank" rel="noreferrer" href="https://vimeo.com/user161246910">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1.1em", height: "1.1em" }}
                  />
                </a>
                <a title="linkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/aoperat/">
                  <img
                    src={linkedin}
                    alt="linkedIn"
                    style={{ width: "1.1em", height: "1.1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
