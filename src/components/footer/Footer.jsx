import React from 'react'
import './Footer.css'
import { MdOutlineWeb } from "react-icons/md";
import { FaInstagram, FaTelegram,FaYoutube,FaTwitter,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
           <MdOutlineWeb className='logo'/>
           <p>ETH</p>
        </div>
        <div className="footer-links">
            <div className="link-left">
                <p>Company</p>
                <p>Products</p>
                <p>Offices</p>
            </div>
            <div className="link-right">
                <p>About</p>
                <p>Contacts</p>
                <p>Location</p>
            </div>
        </div>
        <div className="footer-social">
            <div className="social-container">
              <FaInstagram className='social-icon'/>
            </div>
            <div className="social-container">
              <FaTelegram className='social-icon'/>
            </div>
            <div className="social-container">
              <FaYoutube className='social-icon'/>
            </div>
            <div className="social-container">
              <FaTwitter className='social-icon'/>
            </div>
            <div className="social-container">
              <FaFacebook className='social-icon'/>
            </div>
        </div>
        <div className="footer-copyright">
            <p> Copyrght @ 2024 All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
