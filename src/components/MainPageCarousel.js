import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImage from "./CarouselImage";

export default function MainPageCarousel ({items}) {
    return (
    <React.Fragment>
        <section >
            <div className="container carousel-container">
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
            return (
            <div>
              <CarouselImage img={x.image} text={x.text} redirectTo={x.redirectTo} >
              </CarouselImage>
            </div>)}
          )}
        </Slider>
      </div>
    </>)
}