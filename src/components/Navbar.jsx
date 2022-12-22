import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {filterBySearch} from "../Redux/FilterSlice"

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()
  return (
    <div className='navbar'>
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <Link className='link' to={'/'}>
            Shop-Cart
          </Link>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder='Search'
             onChange={(e)=> dispatch(filterBySearch(e.target.value))}
           />
        </div>

        <div className="navbar-control">
          <Link className='link navbar-link' to="/cart">
            <AiOutlineShoppingCart size={32} />
            <span>{cart.length}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar