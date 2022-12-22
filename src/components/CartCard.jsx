import React from 'react';
import {AiOutlineStar, AiFillStar, AiOutlineMinusCircle, AiOutlinePlusCircle,AiTwotoneDelete} from "react-icons/ai";
import {changeQuantity,removeFromCart} from "../Redux/CartSlice";
import { useDispatch } from 'react-redux';

const CartCard = ({prod}) => {
    const dispatch = useDispatch();
    const rating = prod.rating
  return (
    <div className='lcard'>
        <figure className="lcard-figure">
            <img src={prod.image} alt={prod.name} />
        </figure>
        <h1>{prod.name}</h1>
        <h2>₹ {prod.price}</h2>
        <div className="lcard-rating">
           {
            [...Array(5)].map((_, i) => (
                <span key={prod.id+i}>
                 {
                    rating> i ? (<AiFillStar size={20} />): (<AiOutlineStar size={20} />)
                 }
                </span>
            ))
           }
        </div>

        <div className="lcard-controls">
            <button className="lcard-dec"
              onClick={()=> {dispatch(changeQuantity({id:prod.id, qty: prod.qty -1}))}}
              disabled={prod.qty === 1}
            >
                <AiOutlineMinusCircle size={28} />
            </button>
            <span className="lcard-qty">{prod.qty}</span>
            <button className="lcard-add"
              onClick={()=> {dispatch(changeQuantity({id:prod.id, qty: prod.qty+1}))}}
            >
               <AiOutlinePlusCircle size={28} /> 
            </button>
        </div>

        <div className="lcard-remove">
            <button
              onClick={()=> dispatch(removeFromCart(prod))}
            >
              <AiTwotoneDelete size={28} />
            </button>
        </div>
    </div>
  )
}

export default CartCard