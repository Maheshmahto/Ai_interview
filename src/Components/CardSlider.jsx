import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 1000,
      };
  return (
    <div className=''>
        <Slider {...settings}>
      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
      </Slider>
    </div>
  )
}

export default CardSlider
