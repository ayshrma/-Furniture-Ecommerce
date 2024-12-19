// import React from 'react'
// // import { CiSearch } from "react-icons/ci";
// import './Navbar.css'

// export default function Navbar() {
//   return (
//     <>
//       <nav className='main-nav'>
        
//           <ul className='ul'>
//           <li className='firstimage'><a href="www.google.com"> <img src="./Logos/furniro.png" alt="" srcset=""/></a></li>
//           </ul>
          
//           <div class="minu-link">
//           <ul className='ul2'>
//             <li><a className='navbar_item' href="/">Home</a></li>
         
//             <li><a className='navbar_item' href="">Shop</a></li>
         
//             <li><a className='navbar_item' href="">About</a></li>
          
//             <li><a  className='navbar_item' href="">Contact</a></li>
//             </ul>
//             </div>
 
//             {/* <li><a href=""><CiSearch /></a></li> */}
//             <div class="social-media">
//             <ul className='ul3'>
//             <li><a href=""> <img src="./Logos/Vector.png" alt="" srcset=""/></a></li>
//             <li><a href=""> <img src="./Logos/search.png" alt="" srcset=""/></a></li>
//             <li><a href=""> <img src="./Logos/like.png" alt="" srcset=""/></a></li>
//             <li><a href=""> <img src="./Logos/cart.png" alt="" srcset=""/></a></li>
//             </ul>
//             </div>
//       </nav>
//       </>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <ul className="ul">
          <li className="firstimage">
            <Link to="/">
              <img src="./Logos/furniro.png" alt="Logo" />
            </Link>
          </li>
        </ul>

        <div className="menu-link">
          <ul className="ul2">
            <li>
              <Link className="navbar_item" to="/">Home</Link>
            </li>
            <li>
              <Link className="navbar_item" to="/shop">Shop</Link>
            </li>
            <li>
              <Link className="navbar_item" to="/about">About</Link>
            </li>
            <li>
              <Link className="navbar_item" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="ul3">
            <li>
              <a href="#">
                <img src="./Logos/Vector.png" alt="Social" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./Logos/search.png" alt="Search" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./Logos/like.png" alt="Like" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./Logos/cart.png" alt="Cart" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
