import React from 'react';
import {AiFillCloseCircle} from "react-icons/ai"
import { useSelector } from 'react-redux';
import PopCard from './PopCard';
import {BsCreditCard} from "react-icons/bs"

const Popup = (props) => {
    const cart = useSelector(state => state.cart.cart)
  return (
    props.trigger ? ( 
    <div className='popup'>
    <div className="popup-inner">
        <button className="popup-close"
          onClick={()=> props.close(!props.trigger)}
        >
          <AiFillCloseCircle size={24} />
        </button>
        <div className="popup-main">
          {
            cart.map((val) => <PopCard key={val.id} prod={val} />)
          }
        </div>

        <div className="popup-proceed">
            <span>Total: {props.total}</span>
            <button>
               Proceed To Payment
               <span><BsCreditCard size={24} /></span> 
            </button>
        </div>
    </div>
   </div>) : ""
   
  )
}

export default Popup