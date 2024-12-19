import React from 'react';
import '../../src/style/Support.css'
import { LuTrophy } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
export default function Support() {
  return (
    <div className='main'>

            
    <div className="inline-example">
  <LuTrophy className="trophy" />
</div>
<div className="inline-example">
  <h2 className="High">High Quality</h2>
  <p>Crafted from top material</p>
</div>

<div className="inline-example">
  <MdOutlineVerified className="trophy" />
</div>
<div className="inline-example">
  <h2 className="High">Warranty Protection</h2>
  <p>Over two year</p>
</div>

<div className="inline-example">
  <FaShippingFast className="trophy" />
</div>
<div className="inline-example">
  <h2 className="High">Free Shipping</h2>
  <p>Order Over 450 $</p>
</div>

<div className="inline-example">
  <BiSupport className="trophy" />
</div>
<div className="inline-example">
  <h2 className="High">4 / 7 Support</h2>
  <p>Dedicated Support</p>
</div>

    </div>
  )
}
