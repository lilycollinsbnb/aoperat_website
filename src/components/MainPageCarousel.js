import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import FullWidthImage from "./FullWidthImage";


export default function MainPageCarousel ({items}) {
    return (
    <React.Fragment>
        <section >
            <div className="container">
               {createCarousel(items)}
            </div>
        </section>
    </React.Fragment>
    )
}

function createCarousel (items) {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }

    return (<>
    <div>
        <Slider {...settings}>

          {items.map(x => {
            // const image = x.url 
            //   ? <img src={x.url} alt="" />
            //   : <GatsbyImage image={getImage(x)} alt=""></GatsbyImage>
            return (
            <div>
              <FullWidthImage img={x.image} text={x.text} redirectTo={x.redirectTo} >
              </FullWidthImage>
            </div>)}
          )}
        </Slider>
      </div>
    </>)
}