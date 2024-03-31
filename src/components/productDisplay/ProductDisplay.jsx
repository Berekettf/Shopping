import React, { useContext } from 'react'
import './productdisplay.css'
import { MdOutlineStarOutline } from "react-icons/md";
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart}= useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="prooductdisplay-img-star">
                <MdOutlineStarOutline className='star' />
                <MdOutlineStarOutline className='star' />
                <MdOutlineStarOutline className='star'/>
                <MdOutlineStarOutline className='star'/>
                <MdOutlineStarOutline className='star'/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            This section presents concise yet informative text that highlights the product's unique 
            selling points 
            </div>
            <div className="productdisplay-right-sizes">
                <h1>Select sizes</h1>
                <div className="productdisplay-right-size">
                    <dic>S</dic>
                    <dic>M</dic>
                    <dic>L</dic>
                    <dic>XL</dic>
                    <dic>XXL</dic>
                </div>
            </div>
            <button className='btn' onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className="productdisplay-right-catagory">
                <span>Category :</span> Women, T-shirt, Crop top
            </p>
            <p className="productdisplay-right-catagory">
                <span>Tags :</span> Modern, Latest
            </p>
      </div>
        
      
    </div>
  )
}

export default ProductDisplay
