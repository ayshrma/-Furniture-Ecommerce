import React from 'react'
// import { Carousel, IconButton } from "@material-tailwind/react";
import '../src/Home.css'
export default function home() {
  return (
    <div>
    <div class="a">
      
      <div className='block'>
        <p><b>New Arival</b></p>
        <h1 className='heading'>Discover our <br/> New Collection</h1>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Corporis quo esse aspernatur qui, facilis libero?</p>
        <a href="" className='buynow'>BUY NOW</a>
      </div>
      
      <div className='firstimage'>
      <img className='first_image' src="../Images/hero.png" alt=""></img>
      </div>
      </div>
     
      <div className='browse'>
        <h1 >Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
        <div>

        <div className='browserimage'>
        <img src="../Images/Mask Group.png" alt="" srcset=""/>
        <img src="../Images/Image-living room.png" alt="" srcset=""/>
        <img src="../Images/Image-living room.png" alt="" srcset=""/>
         </div>
        
        <div className='room'> 
        <span>Dining</span>
        <span>Living</span>
        <span>Bedroom</span>
        </div>
        </div>

         <div >
        <h1>Our Products</h1>
        <div class="thirtyone">

        <div className='browserimage'>
        <img src="../Images/images.png" alt="" srcset=""/>
        <img src="../Images/Pop Up.png" alt="" srcset=""/>
        <img src="../Images/image3.png" alt="" srcset=""/>
        <img src="../Images/image 4.png" alt="" srcset=""/>
        </div>

        <div className='image_title'> 
        <span><h3>Syltherine </h3></span>
        <span><h3>Leviosa</h3></span>
        <span><h3>Lolito</h3></span>
        <span><h3>Respira</h3></span>
        </div>

        <div class="image_discription">
        <span><p>Stylish cafe chair</p></span>
        <span><p>Stylish cafe chair</p></span>
        <span><p>Luxury Big Sofa</p></span>
        <span><p>Outdoor Bar Table and Stoll</p></span>
        </div>

        <div class="image_discription">
        <span><p><b>Rp 2.50.000</b> <strike>Rp 3.50.000</strike></p></span>  
        <span><p><b>Rp 2.50.000</b> </p></span>  
        <span><p><b>Rp 7.00.000</b> <strike>Rp 14.00.000</strike></p></span>  
        <span><p><b>Rp 500.000</b> </p></span>  
        </div>

        <div class="browserimage">
        <img src="../Images/Images (1).png" alt="" srcset=""/>
        <img src="../Images/Image 6.png" alt="" srcset=""/>
        <img src="../Images/Image 7.png" alt="" srcset=""/>
        <img src="../Images/Image 8.png" alt="" srcset=""/>
        </div>

        <div className='image_title'> 
        <span><h3>Grifo </h3></span>
        <span><h3>Muggo</h3></span>
        <span><h3>Pingky</h3></span>
        <span><h3>Potty</h3></span>
         </div>

        <div class="image_discription">
        <span><p>Night Lamp</p></span>
        <span><p>Small mug</p></span>
        <span><p>Cute Bed set</p></span>
        <span><p>Minimalist flower pot</p></span>
        </div>

        <div class="image_discription">
        <span><p><b>Rp 15.00.000</b> </p></span>  
        <span><p><b>Rp 150.000</b> </p></span>  
        <span><p><b>Rp 7.000.000</b> <strike>Rp 14.00.000</strike></p></span>  
        <span><p><b>Rp 500.000</b> </p></span>  
        </div>
        <a href="" className='show_more'>Show More</a>
        </div>
      </div>

        <div class="slidediv">
          <div className='div50'>
            <h1>50+ Beautiful rooms <br/> inspiration</h1>
            <p>Our design already made a lot of beautiful <br/> propertyof rooms that inspire you </p>
            <a href="" className='buynow' id='explore'><b> Explore More </b></a>
           </div>
          </div>

        <div class="shape">
        <div class="shapetxt">
          <h4>share your setup with</h4>
          <h2 className='furniofurniture'>#FurniroFurniture</h2>
          </div>
        </div>


    </div>
  )
}
