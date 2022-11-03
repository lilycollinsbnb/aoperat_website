import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

export default function CarouselImage(props) {
  const {
    height = 400,
    img,
    text,
    imgPosition = "top left",
    redirectTo,
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
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
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(text) && (
          <div
            className="carousel-content-grid-wrapper"
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
            }}
          >
            <div className="carousel-text-area">
              <div style={{alignSelf: "start"}}>
                <h1 className="is-color-white has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen">{text}</h1>
              </div>
              <div style={{alignSelf: "end", marginBottom: "7px"}}>
                <a href={redirectTo} className="has-text-weight-bold button mrb-button mrb-button-dark">Dowiedz się więcej</a>
              </div>
            </div>
          </div>
        )}
        </div>
    </React.Fragment>
  );
}

CarouselImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  text: PropTypes.string,
  height: PropTypes.number,
};
