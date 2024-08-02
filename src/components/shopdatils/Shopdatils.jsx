import React from 'react'
import { Shop } from '../pages/Shop'
import im1 from '../../img/i.webp'
import './Shopdatils.css'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const Shopdatils = () => {
    return (
        <div className='Shopdatils container'>
            <h2>About the shop</h2>
            <div className="shop-info">
                <img className='shop-info-img' src={im1} alt="" srcset="" />
                <div className='text'>
                    <h3>The name of our shop is <span>KIAN </span>SHOP</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nostrum voluptate omnis quibusdam rem animi placeat? Beatae quaerat consequatur, praesentium modi blanditiis accusamus, tempora rem alias molestias nulla sapiente quisquam?</p>
                    <div className='stars'>
                        <h3>Rate : </h3>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <Link className='bt' to="/Shop">SHOP NOW</Link>
                </div>
            </div>
        </div>
    )
}
