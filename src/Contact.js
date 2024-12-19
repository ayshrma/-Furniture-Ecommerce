import React from 'react'
import './style/Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";


const Contact = () => {
  return (
    <div>
    <div className="info">
      <h1>Get In Touch With Us</h1>
      <p>For more information about Our Product And Services. Please Fill Free To Drop Us <br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate </p>
    </div>
    <div class="container">
      <div className="address">
        <address><h2><FaLocationDot />
        Address</h2></address>
        456 5th SE Avenue, New  <br/>York NY9000, United <br/>States

        <address><h2><FaPhone />
          Phone</h2></address>
        Mobile: +(84)546-6789 <br/>Hotline: +(84)456-6789

        <address><h2> <MdWatchLater />
        Working Time</h2></address>
        Monday-Friday: 9:00 -   <br/>44:00<br/>Saturday-Sunday: 9:00 - <br/>45:00 
      </div>
      

      <div className="contactForm">
        <label for="name">Your name </label> <br/>
        <input type="text"  className='contactInput' id="name" placeholder='Abc' /> <br/>

        <label for="email">Email Address</label> <br/>
        <input type="text" className='contactInput'  id="email" placeholder='Abcdef.com'/> <br/>

        <label for="subject">Subject</label> <br/>
        <input type="text" className='contactInput' id="subject" placeholder='This is an Optional' /> <br/>

        <label for="message">Message</label> <br/>
        <input type="text" className='contactInput' id="message"placeholder="Hi i'd Like to ask about" /> <br/>
        <button className='submitButton'>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Contact
