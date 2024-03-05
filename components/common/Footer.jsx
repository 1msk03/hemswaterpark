import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline , IoCallOutline} from "react-icons/io5";
import {  IoTime } from "react-icons/io5";
import Logo from '../../public/HemsLogo.png'
import { AiOutlineMail } from "react-icons/ai";

import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary'>
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row w-full justify-between items-start gap-10 pt-14 pb-8 '>
        <div className='flex lg:w-[35%] w-full flex-1 flex-col justify-center items-start gap-3'>
            <div>
                <Image src={Logo}  alt='' className=' h-20 w-20 object-contain'/>
            </div>
            <h1 className="text-[14px] text-white font-medium tracking-wider">Lorem ipsum dolor sit amet,</h1>
           <div className='flex flex-col gap-2 justify-start items-start'>
           <div className='flex justify-center lg:items-center items-start gap-3'>
           <IoLocationOutline className='text-white text-[20px]'/>
           <span className='text-white'>xyz</span>
           </div>
           <div className='flex justify-center items-center gap-3'>
           <AiOutlineMail className='text-white text-[20px]'/>
           <span className='text-white'>Hemswaterpark@gmail.com</span>
           </div>
           <div className='flex justify-center items-center gap-3'>
           <IoCallOutline className='text-white text-[20px]'/>
           <span className='text-white'>+91 9352318221</span>
           </div>
            </div>

        </div>
        <div className='lg:w-[15%] w-full flex  flex-col justify-center items-start gap-3'>
            <h4 className='text-[22px] font-medium  text-white font-Fjalla'>Quick Links</h4>
            <ul className='flex flex-col justify-center items-start gap-2'>
                <Link href={'/about'} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>About Us</Link>
                <Link href={'/services'} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>Services</Link>
                <Link href={'/booking'} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>Booking</Link>
                <Link href={'/blog'} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>Packages</Link>
                <Link href={'/contact'} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>Contact</Link>


            </ul>
        </div>
        <div className='flex lg:w-[15%] w-full  flex-col justify-center items-start gap-3'>
            <h4 className='text-[22px] font-medium  text-white font-Fjalla'>Useful Links</h4>
            <ul className='flex flex-col justify-center items-start gap-2'>
                <Link href={`/`} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>Privacy Policy</Link>
                <Link href={`/`} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>Terms and Conditions</Link>
                <Link href={`/`} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>Disclaimer</Link>
                <Link href={`/`} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>Support</Link>
                <Link href={`/`} className='text-[16px] text-white hover:text-primary duration-500 font-heebo tracking-wide font-medium'>FAQ</Link>


            </ul>
        </div>
        <div className='flex  lg:w-[35%] w-full flex-col text-white justify-center items-start gap-4'>
            <h4 className='text-[24px] font-medium text-white'>Opening Hours</h4>
          <div className='flex xl:flex-row flex-row lg:flex-col justify-center items-start gap-5'>
           <div className='flex flex-col gap-3'>
           <p>Monday - Friday</p>
            <p>Saturday - Sunday</p>
            <p>Holiday</p>
           </div>
           <div className='flex flex-col gap-3'>
           <div className='flex justify-center items-center gap-3'><IoTime/>   <p>11:00 AM - 16:00 PM</p></div>
           <div className='flex justify-center items-center gap-3'><IoTime/>   <p>09:00 AM - 17:00 PM</p></div>
           <div className='flex justify-center items-center gap-3'><IoTime/>   <p>09:00 AM - 17:00 PM</p></div>
           </div>
           
         
          </div>
          <div className='flex justify-center items-start gap-5'>
          
         
         
          </div>
          <div className='flex justify-center items-start gap-5'>
           

          
         
          </div>
        </div>
    </div>
    <hr/>
 <div className='flex flex-col lg:flex-row justify-between lg:items-center items-start py-7 '>
    <span className='text-white'>Water & Amusement Park Template Kit by Jegtheme </span>
    <span className='text-white cursor-pointer '>Copyright © 2024. All rights reserved.</span>
 </div>

   </div>
    </div>
  )
}

export default Footer
