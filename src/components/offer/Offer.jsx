import React from 'react'
import './Offer.css'
import offer1 from '../assets/offer.svg'

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
          <h1>Exclusive </h1>
          <h1>Offer for You</h1>
          <p>ONLY ONE BEST SELLER PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className="offer-right">
           <img src={offer1} alt="" />
        </div>
      
    </div>
  )
}

export default Offer
