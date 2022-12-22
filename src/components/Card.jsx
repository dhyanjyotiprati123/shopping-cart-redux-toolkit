import React from 'react';
import {AiOutlineStar, AiFillStar, AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux';
import {addToCart, removeFromCart} from "../Redux/CartSlice"

const Card = ({prod}) => {
    const rating = prod.rating;
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch()
  return (
    <div className='card'>
        <figure className="card-figure">
            <img src={prod.image} alt={prod.name} />
        </figure>

        <div className="card-info">
            <h1>{prod.name}</h1>
            <h2>₹{prod.price}</h2>
            <div className="card-rating">
              {
                [...Array(5)].map((_, i)=> (
                 <span key={i+1}>
                    {rating > i ? (<AiFillStar size={20} />) : (<AiOutlineStar size={20} />)}
                 </span>))
              }
            </div>
            <h4>In Stock:{prod.stock}</h4>
            <h4>Fast Delivery: {prod.fastDelivery.toString()}</h4>
        </div>

        <div className="card-control">
            <button className='card-add'
              onClick={()=> dispatch(addToCart(prod))}
             >
              Add To Cart
            </button>
            {
               cart.some((p)=> p.id === prod.id) && (
                <button className='card-remove'
                  onClick={()=> dispatch(removeFromCart(prod))}
                >
                  Remove From <span><AiOutlineShoppingCart size={20} /></span>
                </button>
               ) 
            }
           
        </div>
    </div>
  )
}

export default Card