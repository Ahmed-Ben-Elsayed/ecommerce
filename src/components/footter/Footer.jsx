import React from 'react'
import './Footer.css'
import { BiSolidMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
export const Footer = () => {
    return (
        <div className='footer'>
            <div className='first'>
                <h1>GET IN TOUCH</h1>
                <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                <div>
                <BiSolidMap className='icon'/>
                    <p>123 Street, New York, USA</p>
                </div>
                <div>
                <FiMail className='icon'/>
                    <p>info@example.com</p>
                </div>
                <div>
                <BsTelephoneFill className='icon'/>
                    <p>+012 345 67890</p>

                </div>
            </div>
            <div className='second'>
                <h1>QUICK SHOP</h1>
                <div className='social_media'>
                 <span> <BiChevronRight /><a href="http://">Home</a></span>
                <span> <BiChevronRight /><a href="http://">Our shop</a></span>
                <span><BiChevronRight /><a href="http://">Shop Details</a></span>
                <span><BiChevronRight /><a href="http://">Shopping cart</a></span>
                <span><BiChevronRight /><a href="http://">Checkout</a></span>
                <span><BiChevronRight /><a href="http://">Contact us</a></span>
                </div>
            </div>
            <div className='finsh'>
                <h1>QUICK SHOP</h1>
                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                <div className='se'>
                <input type="text" name="" id="" />
                <button>search</button>
                </div>
                <h1>Follow Us</h1>
                <div className='sc'>
                <AiFillFacebook className='ss' />
                <AiFillTwitterSquare className='ss'/>
                <FaInstagramSquare className='ss'/>
                <BsTelegram className='ss'/>
                </div>
            </div>
        </div>
    )
}
