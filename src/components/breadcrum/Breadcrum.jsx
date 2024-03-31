import React from 'react'
import './breadcrum.css'
import { FaChevronRight } from "react-icons/fa";


const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className='breadcrum'>
      Home <FaChevronRight /> SHOP <FaChevronRight />{product.category} <FaChevronRight />{product.name}
    </div>
  )
}

export default Breadcrum
