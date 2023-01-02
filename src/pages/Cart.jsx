import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../components/CartCard';
import {IoBagCheckOutline} from "react-icons/io5"
import Popup from '../components/Popup';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const [total, setTotal] = useState();
  const [popupTrigger, setPopupTrigger] = useState(false)
  console.log(cart);

  useEffect(()=>{
     setTotal(cart.reduce((acc, curr)=> acc+Number(curr.price)*curr.qty, 0))
  }, [cart]);

  return (
    <div className='cart'>
      <div className="cart-items">
        {
          cart.map((val) => <CartCard key={val.id} prod={val} />)
        }
      </div>
      <div className="cart-checkout">
        <div className="cart-wrapper">
          <h1>Your Shopping Cart</h1>
          <h2>Subtotal ({cart.length}) Items</h2>
          <h2>Total: ₹ {total}</h2>

          <button onClick={()=> setPopupTrigger(true)}>
            Checkout 
            <span><IoBagCheckOutline size={28} /></span>
          </button>
        </div>
      </div>

      <Popup trigger={popupTrigger} close={setPopupTrigger} total={total} />
    </div>
  )
}

export default Cart