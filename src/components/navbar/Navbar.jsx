import React, { useContext, useState } from 'react'
import './Navbar.css'
import { MdOutlineWeb } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import {Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <MdOutlineWeb className='logo'/>
        <span>ETH</span>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'className='menu-link'>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to='/mens' className='menu-link'>Men</Link>{menu==="men"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("women")}}><Link to='/womens' className='menu-link'>Women</Link>{menu==="women"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kid")}}><Link to='/kids' className='menu-link'>kids</Link>{menu==="kid"? <hr/>:<></>}</li>
      </ul>
      <div className="nav-sign-cart">
        <Link to='/login'className='menu-link'><button>Sign Up</button></Link>
        <div className="cart">
          <Link to='/cart'><FaShoppingCart className='nav-icon' /></Link>
          <div className="nav-badge">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
