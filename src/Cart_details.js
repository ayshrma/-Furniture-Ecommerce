import React from 'react';
import './style/Cart_details.css';
import sofaImage from './images/asgardsofa.png';
import { AiOutlineClose } from "react-icons/ai";

import { MdOutlineLockPerson } from "react-icons/md";
export default function Cart_details() {
  const cancel=()=>
  {
    alert("cancel item ?")
  }
  return (
    <div className='mainDiv'>
     <div className='bannerMain'>
        <div className='bannerChildF'>
        <h1>Shopping Cart</h1>
        </div>

        <div className='bannerChildS'>
        <MdOutlineLockPerson className='carticon'/>
        </div>
     </div>

     <div className="productDisc">
        <div class="image">
          <img className='sofaImage' src={sofaImage} alt=""/>
        </div>

        <div class="price">
            <h2>Asfagard Sofa</h2>
            <p>1 x Rs 4540</p>
        </div>

      <div class="cancelButton">
      <button className='buttonCancel' onClick={cancel} ><AiOutlineClose className='cancelButton' />
        </button>
      </div>

     </div>
     
     <div className="productDisc">
        <div class="image">
          <img className='sofaImage' src={sofaImage} alt=""/>
        </div>

        <div class="price">
            <h2>Asfagard Sofa</h2>
            <p>1 x Rs 4540</p>
        </div>

      <div class="cancelButton">
      <button className='buttonCancel' onClick={cancel} ><AiOutlineClose className='cancelButton' />
        </button>
      </div>
      
     </div>
     
    </div>
  )
}
