"use client"
import { useState } from "react";
import Link from "next/link";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
const BookForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guest, setGuest] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; 
  
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    
   
  
    emailjs.sendForm('service_uq0vtgy', 'template_eq68wkc', form.current, 'wudLZeSOTd66m7lLK')
    .then(
      (result) => {
        toast.success("Message sent successfully!");
  
        
        setName('');
        setEmail('');
        setGuest('');
        setPhone('');
      }, (error) => {
        toast.error("Error sending message. Please try again.");
      });
  };
  return (
    <div>
       <form  ref={form}
              onSubmit={sendEmail} className='flex bg-[rgba(113,248,237,0.37)]  w-[500px] flex-col justify-start  gap-5 p-10'>
            <div>
              <input
           
               name="user_name"
           
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
              type='text' placeholder='Your Name*'  className='p-4 w-full outline-none'/>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <input
               name="user_phone"
            
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               required
              type='text' placeholder='Your Phone*'  className='p-4 w-full outline-none'/>
              <input
            
               name="user_email"
            
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
              type='text' placeholder='Your Email*' className='p-4 w-full outline-none'/>
            </div>
            <div className='flex justify-center items-center gap-4'>
             
              <input
            
               name="user_guests"
            
               value={guest}
               onChange={(e) => setGuest(e.target.value)}
               required
              type='text' placeholder='Number of Guests*' className='p-4 w-full outline-none'/>
            </div>
            <div>
            <input type='datetime-local' placeholder='Select Date and Time*' className='p-4 text-gray-400 w-full outline-none' />
            </div>
           
            <button type="submit" className='bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide uppercase'>Book Now</button>
           </form>
    </div>
  )
}

export default BookForm
