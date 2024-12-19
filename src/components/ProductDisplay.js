import React, { useState } from 'react';
import '../style/ProductDisplay.css';
import Shop_image from '.././images/Shop_image.jpg';
import sofaImage from '../images/sofaimage.png'
const ProductDisplay = () => {

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) => {
      if (action === 'increment') return prevQuantity + 1;
      if (action === 'decrement' && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  const  cart =()=>
  {
    alert("Add To Cart")
  }

  const  compare =()=>
  {
    alert("Compare the item ??")
  }


  return (
    <div class="maiin">
    <div className="product-display">
      <div className="product-images">
        <img
          className="main-image"
          src={Shop_image} 
          alt="Asgaard Sofa"
        />
        <div className="thumbnail-images">
          <img src={Shop_image} alt="Thumbnail 1" />
          <img src={Shop_image}  alt="Thumbnail 2" />
          <img src={Shop_image}  alt="Thumbnail 3" />
          <img src={Shop_image}  alt="Thumbnail 4" />
        </div>
      </div>

      <div className="product-details">
        <h1>Asgaard Sofa</h1>
        <p className="price">Rs. 250,000.00</p>
        <div className="rating">
          <span>⭐⭐⭐⭐⭐</span> <span>5 Customer Reviews</span>
        </div>
        <p className="description">
          Setting the bar as one of the loudest speakers in its class, the Kilburn
          is a compact,<br/> stout-hearted hero with a well-balanced audio which
          boasts a clear midrange and <br/> extended highs for a sound.
        </p>

        <div className="options">
          <div className="sizes">
            <h3>Size</h3>
            <button className="size-button">L</button>
            <button className="size-button">XL</button>
            <button className="size-button">XS</button>
          </div>
          <div className="colors">
            <h3>Color</h3>
            <button className="color-button purple"></button>
            <button className="color-button black"></button>
            <button className="color-button gold"></button>
          </div>
        </div>

        <div className="quantity-control">
          <button onClick={() => handleQuantityChange('decrement')}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange('increment')}>+</button>
        </div>

        <div className="actions">
          <button className="add-to-cart" onClick={cart}>Add To Cart</button>
          <button className="compare"onClick={compare} >+ Compare</button>
        </div>

        <div className="product-meta">
          <p>SKU: SS001</p>
          <p>Category: Sofas</p>
          <p>Tags: Sofa, Chair, Home, Shop</p>
        </div>

        <div className="social-share">
          <p>Share:</p>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
     
    </div>

      <div className="discription-main">
      <div className="three">
          <div className="discription">
              <h1 className='discriptionHeading'>Description</h1>
          </div>
          <div className="addInfo">
            <p>Additional Information</p>
          </div>

          <div className="review">
            <p>Reviews [5]</p>
          </div>
          </div>
          <div className="discFirst">
            <p>Embodying the raw, way ward spirit of rock 'n' roll, the kiburn portable active speaker takes the unmistakeable look and <br/> sound of marshall, unplugs the chords, and takes the show on the road.</p>
          </div>

          <div class="discSecond">
            <p>Weighing in under 7 pounds, the kilburn is the lightweight piece of vintage styled engineering. Seeting the bar as one of the loudest <br/> speakers in its class, the kilburn is a compact, stout-hearted hero with a well-balance audio which boosts a clear midrange <br/> and extends highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the contols <br/> to your personal preferences whilr the guitar-influenced the leather strap enabels easy and stylish travel.    </p>
          </div>

          <div class="imageMain">
          <div className="discrImage">
            <img className='sofaImage' src={sofaImage} alt=""/>
          </div>

          <div className="discrImage and">
            <img className='sofaImage' src={sofaImage} alt=""/>
          </div>
          </div>
      </div>

      <div className="mainrelated">

      <div className="relatedProducts">
      <h1 className='relatedProductHeading'>Related Products</h1>
      <div className='browseimage'>
         <div className='Product-list-carts'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>

        <div className='Product-list-carts'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>

        <div className='Product-list-carts'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>

        <div className='Product-list-carts'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <h3>Syltherine</h3>
        <p>Stylish cafe chair</p>
        <h4>RP 4.500.00</h4>
        </div>
         
         </div>
         <button className='showMoreButton'>Show More</button>
         </div>
      </div>

    </div>
  );
};

export default ProductDisplay;