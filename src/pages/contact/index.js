import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";

import contactImage from "../../img/contact.png"
import contactIcon1 from "../../img/icons/contact-address.svg";
import contactIcon2 from "../../img/icons/contact-company-name.svg";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section>
          <div className="container is-fullhd mrb-container">
            <div className="columns is-variable is-8">
              <div className="column is-flex is-flex-direction-column is-justify-content-center">
                  <span className="has-text-weight-semibold mrb-label">AOPERAT</span>
                  <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">Skontaktuj się z nami</h1>
                  <ContactForm/>
              </div>
              <div className="column is-flex is-flex-direction-column is-justify-content-center">
                  <img
                    src={contactImage}
                    objectFit={"cover"}
                    style={{
                      gridArea: "1/1",
                      // You can set a maximum height for the image, if you wish.
                      width: "100%",
                    }}
                    // You can optionally force an aspect ratio for the generated image
                    aspectratio={3 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt=""
                    formats={["auto", "webp", "avif"]}
                  />
              </div>
            </div>
            <h2 className="has-text-weight-semibold has-text-centered is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green mt-6">Dane firmy</h2>
            <div className="columns is-variable is-8 mrb-columns-wrapper">
              <div className="column is-flex is-flex-direction-column is-full-mobile is-one-quarter-tablet is-offset-one-quarter mt-5">
                <div className="pb-3 has-text-centered">                 
                  <img
                    src={contactIcon1}
                    alt="Komornicy"
                    style={{ minWidth: "50px", width: "50px", height: "50px" }}
                  />
                </div>
                <div className="has-text-centered">
                  <h3 className="has-text-weight-semibold is-size-4">Adres</h3>
                  <p className="mt-3">ul. Eugeniusza Kwiatkowskiego 9,<br />37-450 Stalowa Wola</p>
                </div>
              </div>
              <div className="column is-flex is-flex-direction-column is-full-mobile is-one-quarter-tablet mt-5">
                <div className="pb-3 has-text-centered">                 
                  <img
                    src={contactIcon2}
                    alt="Komornicy"
                    style={{ minWidth: "50px", width: "50px", height: "50px" }}
                  />
                </div>
                <div className="has-text-centered">
                  <h3 className="has-text-weight-semibold is-size-4">Pełna nazwa firmy</h3>
                  <p className="mt-3">AOperat Prosta<br />Spółka Akcyjna</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
