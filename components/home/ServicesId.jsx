"use client"
import { useState } from "react";
import React, { useRef } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import WaveModel1 from "../../public/services/ser1.jpeg";
import WaveModel2 from "../../public/services/ser2.jpeg";
import WaveModel3 from "../../public/services/ser3.jpeg";

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import Link from "next/link";

const ServicesId = ({title}) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
   
  
    
   
  
    emailjs.sendForm('service_uq0vtgy', 'template_eq68wkc', form.current, 'wudLZeSOTd66m7lLK')
    .then(
      (result) => {
        toast.success("Message sent successfully!");
  
        
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        toast.error("Error sending message. Please try again.");
      });
  };
  return (
    <div className="bg-slate-100 py-20">
      <div className="container mx-auto">
        <div>
          <h3 className="text-[40px] font-bold pb-5">{title}</h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          <div className="lg:w-[65%] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div>
                <Image
                  src={WaveModel1}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src={WaveModel2}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src={WaveModel3}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src={WaveModel1}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src={WaveModel1}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>

              <div>
                <Image
                  src={WaveModel1}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[35%] h-full bg-white w-full p-9">
            <h3 className="font-bold text-[25px]">Get in Touch</h3>
            <form ref={form}
              onSubmit={sendEmail} className="flex flex-col  gap-6 w-full py-10">
              <div>
                <input
                 name="user_name"
           
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 required
                  type="text"
                  placeholder="Name"
                  className="outline-none border-b py-3 hover:border-b-black w-full"
                />
              </div>
              <div>
                <input
                 name="user_email"
            
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                  type="text"
                  placeholder="Email"
                  className="outline-none border-b py-3 hover:border-b-black w-full"
                />
              </div>
              <div>
                <input
                 name="message"
            
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 required
                  type="text"
                  placeholder="Massage"
                  className="outline-none border-b py-3 hover:border-b-black w-full"
                />
              </div>
              <button type="submit" className="bg-yellow-400 rounded-full text-white font-medium text-[16px] py-3 px-8">
                Get in Touch
              </button>
            </form>
            <h3 className="text-[25px] font-bold">Contact Info</h3>
            <div className="flex-col flex justify-center items-start gap-4 pt-5">
              <div className="flex justify-start items-start gap-5">
                <FaLocationDot className="text-[40px]" />
                <div>
                  Near Dugout Turf Arena, behind Chordias Atulya, Keshupura,
                  Bhakrota, Jaipur, Rajasthan 302026
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <IoMailSharp className="text-[30px]" />
                <Link  href="mailto:Hemswaterpark@gmail.com">Hemswaterpark@gmail.com</Link>
              </div>
              <div className="flex justify-start items-start gap-3">
                <IoCall className="text-[30px]" />
                <Link href="tel:9352318221">+91 9352318221</Link>
              </div>
            </div>
            <div className="pt-5 flex justify-center items-center">
              <Link href={"/book-tickets"} className="px-8 py-3 border-2 border-yellow-400 rounded-full text-[18px]">
                Book Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesId;
