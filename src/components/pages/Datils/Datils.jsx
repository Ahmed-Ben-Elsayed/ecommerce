import React, { useEffect, useState } from 'react'
import { Shop } from '../Shop'
import { Link, useParams } from 'react-router-dom'
import'./Datils.css'
import { FaStar } from 'react-icons/fa'
import { BiCartAdd } from 'react-icons/bi'
export const Datils = ({addTocart}) => {
    let[product ,setproduct] = useState([])
    const {id}= useParams()
    useEffect(function(){

        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response=> response.json())
        .then(function(data){
         setproduct(data)
        })
    },[])
    return (
        <div className='productt container'>
            <div className='img-info'>
            <img src={product.image} alt="" srcset="" />
            </div>
            <div className='text'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className='text-down'>
            <div className='stars'>
                <h5>Rate : </h5>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <h2>Price: <span>{product.price}</span> $</h2>
            {/* <h2 className='count'>Count: <span>{product.rating.count}</span></h2> */}
            </div>
            <div className='bttn'>
             <button onClick={()=> addTocart(product)} className='bt'> <BiCartAdd/>  ADD TO CART</button>
             <Link to='/Shop' className='bt'>Back To Shop</Link>
            </div>
            </div>
        </div>
    )
}
