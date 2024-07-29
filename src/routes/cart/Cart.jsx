
import React from 'react';
import './Cart.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr'

const Cart = () => {
    const cartproducts = useSelector(state => state.cart)
    console.log(cartproducts);
  return (
    <div style={{backgroundColor:"#f7f8fa"}} className='cart'>
        <div className="cart_navbar">
            <Link to="/">
          
            </Link>
            <h2>Shopping Card</h2>
        </div>
        <div className="shopping_cart">

            { cartproducts.length  ?
              <div className="div">
                { cartproducts?.map((cartpro, index ) => (
                      <div key={index} className="cartprodct">
                      <img src={cartpro[0].pro.url} alt="" />
                      <h2>{cartpro[0].pro.name}</h2>
                      <h2>{cartpro[0].pro.price}</h2>
                      <GrFormClose/>
                    </div>
                    )
                    )}
       


            </div>                       
              :
              <div className="nul-div">
              <img height="100px" src="data:image/png;base64,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" alt=""


/>
            <span>
            <h1>Your shopping cart is empty.</h1>
            <Link style={{textDecoration:"none", marignTop:"40px"}} to="/">
            Continue Shopping.
            </Link>
            </span>
            </div>
             }
                
             
           
        </div>
      

    </div>
  )
}

export default Cart