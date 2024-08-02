import React from 'react'
import './cart.css'
import { FaWindowClose } from 'react-icons/fa'
export const Cart = ({cartitems , decrese , addTocart ,removeFromcart}) => {
    let total = 0;
    return (
        (cartitems.length==0 ? 
            <div className='cart-t'>
                <h1 className='noo'>Not Exist Any Products Here</h1>
            </div>
            :
            <div className='cart-table'>
            <div className='left-cart'>
            {cartitems.map(function(item){
                total = total + item.price*item.qty
                let totalp = item.price*item.qty
                return(
                    <div className='products-table'>
                            <div className='product-t'>
                                <div className='im'>
                                <img src={item.image} alt="" />
                                <p>x{item.qty}</p>
                                </div>
                                <h3>{item.title}</h3>
                                <div className='quantity'>
                                    <button onClick={()=>addTocart(item)}>+</button>
                                        <h4> {item.qty} </h4>
                                    <button onClick={()=>decrese(item)}>-</button>
                                </div>
                                <h4> price : {totalp.toString().slice(0,6)} $</h4>
                                <button onClick={ ()=> removeFromcart(item)}><FaWindowClose/></button>
                            </div>
                    </div>
                )
            })}
            </div>
            <div className="cart-right">
                <h1>total : {total.toString().slice(0,6)} $</h1>
            </div>
        </div>
    )
)
}
