import React from 'react'
import Shopimage from '.././src/images/imags.jpg';
import '.././src/Shop_image.css';
export default function Shop_image() {
  return (
    <div>
    <div className="image">
    <div className="image-container">
    <img className='images' src={Shopimage} alt=""/>
    </div>
        <div className="overlay-text">
            <h1>Shop</h1>
            <h4>HOME > Shop</h4>
        </div>
    </div>
    </div>
  )
}
