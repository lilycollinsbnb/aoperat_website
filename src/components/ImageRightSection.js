import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

export default function ImageRightSection(props) {
  const {
    TitleTag,
    img,
    title,
    subheading,
    imgPosition = "top right",
  } = props;
  
  return (
    <React.Fragment>
      <section>
        <div className="container is-fullhd mrb-container">
          <div className="columns is-variable is-8">
            {(title || subheading) && (
              <div className="column is-flex is-flex-direction-column is-justify-content-center">
                <TitleTag className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green is-max-width-1">
                  {title}
                </TitleTag>
                <p className="mt-4 is-max-width-1">{subheading}</p>
              </div>
            )}
            <div className="column is-flex is-flex-direction-column is-justify-content-center">
            {img?.url ? (
              <img
                src={img}
                objectFit={"cover"}
                objectPosition={imgPosition}
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
                image={getImage(img)}
                objectPosition={imgPosition}
                objectFit={"cover"}
                style={{
                  gridArea: "1/1",
                  // You can set a maximum height for the image, if you wish.
                }}
                // You can optionally force an aspect ratio for the generated image
                aspectratio={3 / 1}
                layout="fullWidth"
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
  
ImageRightSection.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
};
  