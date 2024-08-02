import React from 'react'
import'./fav.css'
import { FaWindowClose } from 'react-icons/fa'
import { BsCartPlusFill } from 'react-icons/bs'
export const Fav = ({favoritelist,addTocart,removeFromecfav}) => {
    return (
        (favoritelist.length == 0 ?

            <div className='cart-t'>
                 <h1 className='noo'>Not Exist Any Products Here</h1>
            </div>            :        
            <div className='favorite'>
            {favoritelist.map(function(product){
                return(
                    <div className='product-f'>
                        <img src={product.image} alt="" />
                        <h4>{product.title.slice(0,20)}...</h4>
                        <div>
                            <button onClick={()=> removeFromecfav(product)}>
                            <FaWindowClose/>
                            </button>
                            <button onClick={()=> addTocart(product)}>
                            <BsCartPlusFill/>
                            </button>
                        </div>
                        </div>
                
            )
        })}
        </div>
    )
    )
}
