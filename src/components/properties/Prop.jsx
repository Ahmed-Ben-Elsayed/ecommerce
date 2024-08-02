import React from 'react'
import { BsCheck } from "react-icons/bs";
import { FaCaravan } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import '../properties/Prop.css'
export const Prop = () => {
    return (
        <div className='props container'>
            <div>
                <BsCheck className='prop-icon'/>
                <h1>Quality Product</h1>
            </div>
            <div>
                <FaCaravan className='prop-icon'/>
                <h1>Free Shipping</h1>
            </div>
            <div>
                <BsArrowLeftRight className='prop-icon'/>
                <h1>14-Day Return</h1>
            </div>
            <div>
                <FaPhoneVolume className='prop-icon'/>
                <h1>24/7 Support</h1>
            </div>
        </div>
    )
}
