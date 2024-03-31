import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FaChevronDown } from "react-icons/fa";
import Item from '../components/Item/Item';
import './css/shopCategory.css'

const ShopCategory = (props) => {

  const {all_product}=useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
            <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
            sorted by <FaChevronDown />
        </div>
      </div>
      <div className="item-container">
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
            if (props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            }
            else{
                return null;
            }
        })}
      </div>
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
