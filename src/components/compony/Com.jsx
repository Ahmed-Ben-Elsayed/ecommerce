import React from 'react'
import img1 from'../../img/vendor-1.jpg'
import img2 from'../../img/vendor-2.jpg'
import img3 from'../../img/vendor-3.jpg'
import img4 from'../../img/vendor-4.jpg'
import img5 from'../../img/vendor-5.jpg'
import img6 from'../../img/vendor-6.jpg'
import img7 from'../../img/vendor-7.jpg'
import img8 from'../../img/vendor-8.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Com.css'

export const Com = () => {
    var settings = {
        dots:false,
        autoplay:true,
        infinite: true,
        autoplayspeed:500,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 786,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                }
              ]
      };
    return (
        <Slider  {...settings} className='com container'>
            <div>
                    <img src={img1} alt="" srcset="" />
            </div>
            <div>
                    <img src={img2} alt="" srcset="" />
            </div>
            <div>
                    <img src={img3} alt="" srcset="" />
            </div>
            <div>
                    <img src={img4} alt="" srcset="" />
            </div>
            <div>
                    <img src={img5} alt="" srcset="" />
            </div>
            <div>
                    <img src={img6} alt="" srcset="" />
            </div>
            <div>
                    <img src={img7} alt="" srcset="" />
            </div>
            <div>
                    <img src={img8} alt="" srcset="" />
            </div>
             </Slider>
    )
}
