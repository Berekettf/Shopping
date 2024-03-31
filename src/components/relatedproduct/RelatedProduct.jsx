import React from 'react'
import './relatedproduct.css'
import Data from '../assets/data'
import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproduct-item">
        {Data.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}
      </div>

    </div>
  )
}

export default RelatedProduct
