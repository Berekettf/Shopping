import React from 'react'
import './hero.css';
import { MdOutlineWavingHand } from "react-icons/md";
import icon from '../assets/baground2.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div className='hero-left-mid'>
            <div className='hand-hand-icon'>
               <p>NEW</p>
               <MdOutlineWavingHand className='hi'/>
            </div>
            <p>Collections</p>
            <p>for every one</p>
           </div>
           <div className="hero-lattest-btm">
             <div>Latest Collection</div>
           </div>
        </div>
        <div className="hero-right">
          <img src={icon} alt="" />
        </div>
     </div>
    
  )
}

export default Hero
