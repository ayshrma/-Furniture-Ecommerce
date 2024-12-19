import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div >
    <hr/>
    <footer>
        <div className='footer-main'>
       
        <div class="university ">
        <h2 className='footer_furniro'>Funiro</h2>
        <p className='universitypera'>400 University Drive suit 200 coral <br/> Globes, <br/>  FL 331134 USA</p>
        </div>

         <div class="links ">
            <h4 className='footer-link'>Link</h4> <br/>
            <a href=""className='help-links'><b>Home</b></a> <br/>
            <a href=""className='help-links'><b>Shop</b></a> <br/>
            <a href=""className='help-links'><b>About</b></a> <br/>
            <a href=""className='help-links'><b>Contact</b></a> <br/>
         </div>

         <div class="help">
         <h4 className='footer-link'>Help</h4> <br/>
            <a href="" className='help-links'><b>Payment Options</b></a>  <br/>
            <a href="" className='help-links'><b>Returns</b></a> <br/>
            <a href=""className='help-links'><b>Privacy Policy</b></a><br/>
        </div>

        <div class="newsletter ">
            <h4 className='footer-link'>Link</h4> <br/>
            <input id='input' placeholder='Enter Your Email Address' type="text"/>
        </div>

        <div class="inputbutton">
            <button id='subscribe-button'>SUBSCRIBE</button>
        </div>

    </div>
    </footer>
    <hr className='hr'/>
    <p className='reverved'>2023 furnio. All rights reverved</p>
    </div>
  )
}
