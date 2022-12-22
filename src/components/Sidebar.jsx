import React from 'react';
import {AiOutlineStar, AiFillStar, AiOutlineClear} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import {filterByPrice,filterByRating,filterByFastDelivery,filterByStock,clearFilters} from "../Redux/FilterSlice";


const Sidebar = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const {byRating, byPrice,byStock,byFastDelivery} = filter
    
  return (
    <div className='sidebar'>
        <h1 className="sidebar-title">
            Filter-Products
        </h1>

        <ul className="sidebar-list">
            <li className="sidebar-item">
               <input type="radio" id='low'
                 onChange={()=> dispatch(filterByPrice("lowToHigh"))}
                 checked={byPrice === "lowToHigh"}
                /> 
               <label htmlFor="low">Price Low to High</label>
            </li>
            <li className="sidebar-item">
               <input type="radio" id='high'
                  onChange={()=> dispatch(filterByPrice("highToLow"))}
                  checked={byPrice === "highToLow"}
                /> 
               <label htmlFor="high">Price High to Low</label>
            </li>
            <li className="sidebar-item">
               <input type="checkbox" id='fast'
                 onChange={()=> dispatch(filterByFastDelivery())}
                 checked={byFastDelivery}
                /> 
               <label htmlFor="fast">By Fast Delivery</label>
            </li>
            <li className="sidebar-item">
               <input type="checkbox" id='stock'
                  onChange={() => dispatch(filterByStock())}
                  checked={byStock}
                /> 
               <label htmlFor="stock">By In Stock</label>
            </li>
            <li className="sidebar-rating">
               <label htmlFor="rating">By Rating</label>
               <div>
               {
                [...Array(5)].map((_, i) =>(
                    <span key={i} onClick={()=> dispatch(filterByRating(i+1))}>
                       {byRating > i ? (<AiFillStar size={20} />) : (<AiOutlineStar size={20} />) }
                    </span>
                ))
               } 
               </div> 
            </li>
        </ul>

        <div className="sidebar-clear">
            <button
              onClick={()=> dispatch(clearFilters()) }
            >
                Clear Filters
                <span>
                   <AiOutlineClear size={24} /> 
                </span>
            </button>
        </div>
    </div>
  )
}

export default Sidebar