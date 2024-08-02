import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Projects.css';
import HashLoader  from "react-spinners/HashLoader";
import'../projects/jquery-3.7.1.min'
import { MdOutlineQuestionMark } from "react-icons/md";
export const Projects = ({addTocart,spinner,addTofav}) => {
    let [products , setproducts] = useState([])
    useEffect(function(){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(function(data){
                setproducts(data)
            })
        },[])
    return (
        <>
        <div className='products container  '>
            
            {products.map(function(item){
                return(
                    <>
                    {spinner ?   <div className='spinner'>
                    <HashLoader  className='sp'
                         color={'yellow'}
                         loading={spinner}
                                size={150}
                                        /> 
                                        </div> 
        
                                                :
                    <div  className='product'>
                        <img src={item.image} alt="" />
                        <h1>{item.title.slice(0,10)}...</h1>
                        <div>
                        <p> price : {item.price} $</p>
                        </div>
                        <div className='stars'>
                        <AiFillStar/> 
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        </div>
                        <div className='add-like'>
                         <button title='add to cart' onClick={()=> addTocart(item)}>
                        <BsCartPlusFill className='add'/>
                            </button>
                            <button title='add to favorite list' onClick={()=> addTofav(item)} >
                        <AiFillHeart className='add'/>
                                </button>   
                            <Link title='Information' to={`/Shop/${item.id}`}>
                        <MdOutlineQuestionMark className='add'/>
                                </Link>   
                        </div>
                    </div>
                }
                    </>
                )
            })}
        </div>
            </>
    )
}
