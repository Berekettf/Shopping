import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe our NewsLetter and stey updated</p>
      <div className="subscription">
        <input placeholder='Your Email' className="sub-input" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
