// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import Home from './Home';
// import Product_list from './Product_list';
// import Single_product from "./Single_product";
// import Cart_sidebar from "./Cart_sidebar";
// import Product_comprasion from "./Product_comprasion";
// import Cart from "./Cart";
// import Checkout from "./Checkout";
// import Contact from "./Contact";
// import Blog from "./Blog";
// import { GlobalStyle } from "./Global_style";
// import { ThemeProvider } from "styled-components"
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// function App() {
//   return (
//     <>
//     <Navbar/>
//     {/* <ThemeProvider theme = {theme}> */}
//     <Router>
//     {/* <Global_style/> */}
//     <Routes>
//     <Route path="/" element = {<Home/>}  />
//     <Route path="/Product_list" element= {<Product_list/>} />
//     <Route path="/Single_product" element= {<Single_product/>} />
//     <Route path="/Cart_sidebar" element= {<Cart_sidebar/>} />
//     <Route path="/Product_comprasion" element= {<Product_comprasion/>} />
//     <Route path="/Cart" element= {<Cart/>} />
//     <Route path="/Checkout" element= {<Checkout/>} />
//     <Route path="/Contact" element= {<Contact/>} />
//     <Route path="/Blog" element= {<Blog/>} />
//     </Routes>
//     </Router>
//     {/* </ThemeProvider> */}
//     <Footer/>
//     </>
//   );
// }


import React from 'react';
import Navbar from './Navbar';
import Cart_details from './Cart_details';
import ProductList from './Product_list';
import Home from './Home';
import ShopImage from './Shop_image';
import Support from './components/Support';
import ProductDisplay from './components/ProductDisplay';
import Blog from './Blog';
import Cart from './Cart';
import Contact from './Contact';
import ProductComparison from './ProductComparision';

export default function App() {
  return (
    <div>
    <Navbar />
      {/* <Cart_details /> */}
      {/* <ProductList /> */}
      {/* <Home /> */}
      {/* <ShopImage /> */}
      {/* <Support /> */}
      {/* <Blog /> */}
      {/* <Cart /> */}
      {/* <Contact /> */}
      {/* <ProductDisplay /> */}
      {/* <ProductComparison /> */}
    </div>
  );
}


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from './Home';
// import Shop from './Product_list';
// import About from './About';
// import Contact from './Blog';

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }
