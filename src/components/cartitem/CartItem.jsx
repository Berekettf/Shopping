import React, {useContext} from 'react'
import './cartitem.css'
import {ShopContext} from '../../Context/ShopContext'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";



const CartItem = () => {
  const {getTotalCartAmount,all_product, removeFromCart, cartItem} = useContext(ShopContext)
  return (
    <div className='cartitem'>
      <div className="cartitem-main-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if (cartItem[e.id]>0){
          return <div>
                   <div className="carditem-format cartitem-main-format">
                     <img src={e.image} alt="" className="carticon-product-icon" />
                     <p>{e.name}</p>
                     <p>{e.new_price}</p>
                     <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                     <p>${e.new_price*cartItem[e.id]}</p>
                     <MdOutlineRemoveShoppingCart className='remove-icon' onClick={()=>{removeFromCart(e.id)}}/>
                   </div>
                  </div>
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
               <p>Shipping Fee</p>
               <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitem-promocodebox">
            <input type="text" placeholder='Promo Code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
