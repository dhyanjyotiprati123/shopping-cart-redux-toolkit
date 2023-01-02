import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart, AiFillEdit} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {filterBySearch} from "../Redux/FilterSlice";
import Profile from "../asley.jpg";
import {CgProfile} from "react-icons/cg"

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [dropdown, setDropdown] = useState(false)
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

        <div className="navbar-dropdown"
          onClick={()=> setDropdown(!dropdown)}
        >
          <img src={Profile} alt="profile" />
          {
            dropdown && (
             <div className='navbar-dropmenu'>
              <div className="navbar-dropitem">
               <span><CgProfile /></span>
               <span>John Doe</span>
              </div>
               <div className="navbar-dropitem">
                 <span><AiFillEdit /></span>
                 <span>Edit Profile</span>
               </div>
             </div>)
          }
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