import React from 'react'
import '../src/style/Cart.css';
import { AiFillDelete } from "react-icons/ai";
import Support from './components/Support';
import Navbar from './Navbar';
import Footer from './Footer.js'
import Shop_image from './Shop_image';
const Cart = () => {
  function alerts()
  {
    alert("Hello")
  }

  return (
    <div>
    <Navbar/>
    <Shop_image/> 
     <div class="cartMain">
      <div className="tableofProduct">
        <table>
        <tr>
    <th className='headContent'>Product</th>
    <th className='headContent'>Price</th>
    <th className='headContent'>Quantity</th>
    <th className='headContent'>Subtotal</th>
    <th className='headContent'>Action</th>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/6QXQ6jT.png"/>
    </td>
    <td><h3>45000</h3></td>
    {/* <td><input type="text" name="" value={4} id=""/></td> */}
    <td> <h3>4</h3></td>
    <td><h3>180000</h3></td>
    <td><button><AiFillDelete /></button></td>
  </tr>
        </table>
      </div>
      <div className="cartTotal">
        <h1>Cart Totals</h1>
        <label for=""><b>Subtotal</b>  </label>
        <input type="text" name="" id="" value={45000}/>
        <br/>
        <label for=""><b>Total</b>  </label>
        <input type="text" className='totalAmount' name="" id=""value={45000} />
        <br/>
        <button className='checkoutButton' onClick={alerts}>Checkout</button>
      </div>
     </div>
     <Support/>
     <div class="footer">
      <Footer/>
     </div>
    </div>
  )
}

export default Cart
