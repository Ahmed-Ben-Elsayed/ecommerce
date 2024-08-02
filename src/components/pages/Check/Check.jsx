import React from 'react'
import './Check.css'
export const Check = ({cartitems,total}) => {
    total=0;
    return (
        <>
        <div className='Check container'>
            <div className='Check-left'>
            <h1>BILLING ADDRESS</h1>
            <div className='info'>

            <div className='name'>
                <p>First name</p>
                <input type="text" placeholder='Ahmed' />
            </div>
            <div className='name'>
                <p>Last name</p>
                <input type="text" placeholder='Elsayed' />
            </div>
            <div className='name'>
                <p>E-mail</p>
                <input type="email" placeholder='exapmle@gmail.com' />
            </div>
            <div className='name'>
                <p>Mobile No</p>
                <input type="number" placeholder='+20 1069762490' />
            </div>
            <div className='name'>
                <p>Address Line 1</p>
                <input type="text" placeholder='123 street' />
            </div>
            <div className='name'>
                <p>Address Line 2</p>
                <input type="text" placeholder='123street' />
            </div>
            <div className='name'>
                <p>countery</p>
                    <select id="country" name="country">
                    <option value="egypt">Egypt</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="france">France</option>
                    </select>
            </div>
            <div className='name'>
                <p>City</p>
                <input type="text" placeholder='Zagazig' />
            </div>
            <div className='name'>
                <p>State</p>
                <input type="text" placeholder='New York' />
            </div>
            <div className='name'>
                <p>ZIP Code</p>
                <input type="text" placeholder='607559' />
            </div>
            </div>
            </div>
            <div className='Check-right'>
                <h1>ORDER TOTAL</h1>
                <div className='ch-up'>
                <h4>Products</h4>
            {cartitems.map(function(item){
                    total=item.price+total
                return(
                    <div>
                    <h5>{item.title.slice(0,10)}</h5>
                    <h5>{item.price} $</h5>
                </div>                
                )
            })}
                </div>
                <hr/>
                <div className='ch-middle'>
                <div>
                {cartitems.map(function(item){
                        total=item.price+total
            })}
                      <h5>Subtotal</h5>
                    <h5>{total.toString().slice(0,7)}$</h5>
                </div>
                </div>
                <hr />
                <div className='ch-middle'>
                <div>
                    <h5>Tottal</h5>
                    <h5>{total.toString().slice(0,6)}$</h5>
                </div>
                </div>
                <hr />
                <div className='check-down'>
                    <h1>PAYMENT</h1>
                    <div >
                        <input type="radio" name="select" id=""/>
                        <p>Paypal</p>
                    </div>
                    <div >
                        <input type="radio" name="select" id="" />
                        <p>Direct Check</p>
                    </div>
                    <div >
                        <input type="radio" name="select" id="" />
                        <p>Bank Transfer</p>
                    </div>
                <button>Place Order</button>
                </div>
            </div>
        </div>
        </>
    )
}
