import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Header.css'
import { Prop } from '../properties/Prop';
import { Cat } from '../categories/Cat';
import { Projects } from '../projects/Projects';
import { Com } from '../compony/Com';
import { Footer } from '../footter/Footer';
import { Link } from 'react-router-dom';
export const Header = ({addTocart,addTofav}) => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplayspeed: 500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
            <>
        <div className='header '>
            <Slider className='header-slider' {...settings}>
            <div className='header-left man'>
                <h1>Men Fashion</h1>
                <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                <Link to="/Shop">Shop Now</Link>
            </div>
            <div className='header-left women'>
                <h1>women Fashion</h1>
                <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                <Link to="/Shop">Shop Now</Link>
            </div>
            <div className='header-left kids'>
                <h1>kids Fashion</h1>
                <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                <Link to="/Shop">Shop Now</Link>
            </div>
            </Slider>
            <div className="header-right">
                <div className='header-up'>
                    <p>SAVE 20%</p>
                    <h1>Special Offer</h1>
                    <Link to="/Shop">Shop Now</Link>
                </div>
                <div className='header-down'>
                <p>SAVE 20%</p>
                    <h1>Special Offer</h1>
                    <Link to="/Shop">Shop Now</Link>
                </div>
            </div>
        </div>
        <Prop/>
        <Cat/>
        <Projects addTocart={addTocart} addTofav={addTofav}/>
        <Com/>
        </>
    )
}
