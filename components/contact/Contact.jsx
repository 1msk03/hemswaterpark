import Link from 'next/link';
import React from 'react'
import { GrMapLocation } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter , FaLinkedinIn, FaInstagram, FaYoutube   } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-[#F2FDFF] py-28'>
   <div className='container mx-auto'>
    <div className='flex gap-10 justify-center items-center'>
        <div className='w-1/2 '>
        <div className='  flex flex-col justify-start items-start gap-5 '>
             <span className='text-[16px] font-Fjalla font-medium tracking-wider text-primary'>GET IN TOUCH</span>
             <h2 className='text-[32px] text-secondary font-Fjalla font-bold'>CONTACT US TO GET BETTER INFORMATION</h2>
             <p className='text-[16px] text-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori</p>
             </div>
             <div className='flex justify-between items-center py-10 border-b-2'>
                <div className='flex justify-center items-center gap-3'>
                    <span className='p-4 bg-primary'><GrMapLocation className='text-[30px] font-bold text-white'/></span>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px] font-Fjalla font-medium tracking-wider text-secondary'>Location</p>
                        <p className='text-[14px] text-body'>Jl. Raya Ubud No.88, Bali 80571</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <span className='p-4 bg-primary'><IoMailOutline className='text-[30px] font-bold text-white'/></span>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px] font-Fjalla font-medium tracking-wider text-secondary'>
Drop Us a Line</p>
                        <p className='text-[14px] text-body'>support@domain.com</p>
                    </div>
                </div>

             </div>
             <div className='flex gap-6 justify-start items-center pt-10 '>
              <h3 className='text-secondary text-[20px] font-bold tracking-wide'>Official Social Media :
</h3>
<ul className='flex justify-start items-center gap-3  '>
                <Link href="https://www.facebook.com/trackonweb/" target="_blank" className='p-2 bg-primary text-white rounded-full hover:scale-75 duration-300  hover:text-white group'><FaFacebookF  className='text-white text-[20px] group-hover:text-white cursor-pointer'/></Link>
                <Link href="https://twitter.com/trackonweb" target="_blank" className='p-2 bg-primary text-white rounded-full hover:scale-75 duration-300   hover:text-white group'><FaTwitter  className='text-white text-[20px] group-hover:text-white cursor-pointer'/></Link>

                <Link href="https://www.instagram.com/trackonweb/"  target="_blank" className='p-2 bg-primary text-white hover:scale-75 duration-300  rounded-full  hover:text-white group'><FaInstagram  className='text-white text-[20px] group-hover:text-white cursor-pointer'/></Link>
                <Link href={'/'} className='p-2 bg-primary rounded-full text-white hover:scale-75 duration-300   hover:text-white group'><FaYoutube   className='text-white text-[20px] group-hover:text-white cursor-pointer'/></Link>
            </ul>
             </div>
        </div>
        <div className='w-1/2 '>
        <form className='flex bg-white  flex-col justify-start  gap-5 p-10'>
            <div>
              <input type='text' placeholder='Your Name*'  className='p-4 w-full outline-none border'/>
            </div>
            <div>
              <input type='text' placeholder='Your Email*'  className='p-4 w-full outline-none border'/>
            </div>
            <div>
              <input type='text' placeholder='Your Subject*'  className='p-4 w-full outline-none border'/>
            </div>
            <div>
              <textarea type='text' placeholder='Message*'  className='p-4 w-full outline-none border'/>
            </div>
<div className='flex justify-start items-start'>
<button className='bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide uppercase'>SEND MESSAGE</button>
</div>
           </form>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Contact
