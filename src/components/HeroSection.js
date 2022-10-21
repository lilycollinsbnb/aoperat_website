import React from "react";
import { Link } from "gatsby";

import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function HeroSection(props) {
  const {
    img,
    title,
    subheading,
  } = props;
  
  return (
    <React.Fragment>
      <section>
        <div className="container is-fullhd mrb-container">
          <div className="columns is-variable is-8">
            {(title || subheading) && (
              <div className="column is-flex is-flex-direction-column is-justify-content-center">
                <span className="has-text-weight-semibold mrb-label">AOPERAT</span>
                <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">
                  {title}
                </h1>
                <p className="mt-4 mb-4 is-max-width-1">{subheading}</p>
                <div className="buttons mt-2">
                  <Link to="/about" className="button mrb-button mrb-button-light mr-4">O projekcie</Link>
                  <Link to="/contact" className="button mrb-button mrb-button-dark">Kontakt</Link>
                </div>
              </div>
            )}
            <div className="column is-flex is-flex-direction-column is-justify-content-center">
            {img?.url ? (
              <img
                src={img}
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
            ) : (
              <GatsbyImage
                image={img}
                objectFit={"cover"}
                style={{
                  gridArea: "1/1",
                  // You can set a maximum height for the image, if you wish.
                }}
                // You can optionally force an aspect ratio for the generated image
                aspectratio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                formats={["auto", "webp", "avif"]}
              />
            )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
  
HeroSection.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
};
  