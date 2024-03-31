import React from 'react'
import './NewCollection.css'
import New_Collection from '../assets/new_collection'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h1>New Collection</h1>
        <hr/>
        <div className="collection-container">
           <div className="collections">
              {New_Collection.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
               })}

            </div>
        </div>
      
    </div>
  )
}

export default NewCollection
