import React from 'react'
import './descriptionbox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
            These platforms offer robust infrastructure, scalability, security, and a variety of services 
            to meet different website deployment needs. Consider factors such as pricing, ease of use, support, 
            and specific features required for your project when choosing the best platform for your website deployment.
            </p>
            <p>On the Microsoft Azure website, you can find detailed information about the platform, its features, 
                pricing, documentation, and various services offered for cloud computing, hosting, and deployment. 
                You can also sign up for a free Azure account to explore and experiment with the platform's services 
                and capabilities</p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
