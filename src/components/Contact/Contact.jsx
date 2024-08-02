import React from 'react'
import './Contact.css'
import { BiSolidMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { Formik } from 'formik';
export const Contact = () => {
    return (
        <div className='Contact container'>
            <h1>Contact</h1>
            <div className='con'>
            <form action='functions/store.php'  method='post' >
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" name='email' placeholder='Your Email' />
                <input type="text" name='subject' placeholder='Subject'/>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button type='submit'>Submit</button>
            </form>
            <div className='con-right'>
            <div className='if'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"        title="Example Iframe"
                width="600"
                height="400"
                frameBorder="0"
                />
                </div>
                <div className='inf'>
                    <span><BiSolidMap className='icons'/>123 Street, New York, USA</span>
                    <span><FiMail className='icons'/>info@example.com</span>
                    <span><BsTelephoneFill className='icons'/>+012 345 67890</span>
                </div>
                </div>
                </div>
       </div>
    )
}
