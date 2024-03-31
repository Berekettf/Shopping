import React from 'react'
import './Popular.css';
import Data from '../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h2>Popular in Women</h2>
        <hr/>
        <div className="popular-contaner">
          <div className="popular-itmes">
            {Data.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
          </div>
        </div>
      
    </div>
  )
}

export default Popular
