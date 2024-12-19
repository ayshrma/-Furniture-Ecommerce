import React from 'react';
import '../src/Home.css'
import filterr from '../src/images/filterr.png';
import { RxDragHandleDots2 } from "react-icons/rx";
import { LuRectangleHorizontal } from "react-icons/lu";
import { RiBardFill } from "react-icons/ri";
import '../src/Productlist.css';
import './Shop_image'
import Shop_image from './Shop_image';
import Support from './components/Support';
import Navbar from "./Navbar";



const Product_list = () => {
  return (
    <div>
    <div className='shop-image'>
    <Navbar/>

    <Shop_image/>
    </div>

      <div class="filer_options">
        <img src={filterr} alt=""/>
        <label for="icon">FILTER</label>
        <RxDragHandleDots2 />
        <LuRectangleHorizontal />
        <RiBardFill />
        <p>Showing of results</p>
        <label for="show">Show</label>
        <input type="text" name="" id="show" placeholder='44'/>
        <label for="default">Short By</label>
        <input type="text" name="" id="default"placeholder='Default' />
        </div>

        <div className='browserimage'>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
         </div>

         <div className='browserimage'>
         <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
         </div>

         <div className='browserimage'>
         <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
         </div>

         <div className='browserimage'>
         <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
        <div className='Product-list-cart'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
         </div>
         <Support />

    </div>
  )
}

export default Product_list
