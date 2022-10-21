import React from "react";
import PropTypes from "prop-types";

import scroll from "../img/icons/pajamas_scroll-down.svg";

export default function Box(props) {
  const {
    title,
    subheading,
  } = props;
  
  return (
  <React.Fragment>
    <section>
      <div className="container is-fullhd is-background-primary-green mrb-container mrb-box">
        <div className="columns">
          {(title || subheading) && (
            <div className="column is-flex is-flex-direction-column">
              <span className="has-text-weight-semibold mrb-label is-color-white">AOPERAT</span>
              <h2 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-white is-max-width-1">
                {title}
              </h2>
            </div>
          )}
          <div className="column is-flex is-flex-direction-column is-justify-content-flex-end">
            <p className="my-3 is-size-5-mobile is-size-4-widescreen is-color-white is-max-width-1">{subheading}</p>
          </div>
        </div>
        <img
          src={scroll}
          className="mrb-scroll-arrow"
          alt="Scroll Arrow"
          style={{ width: "38px", height: "38px" }}
        />
      </div>
    </section>
  </React.Fragment>
  );
}
  
Box.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
};