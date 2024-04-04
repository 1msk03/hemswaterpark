import Image from 'next/image'
import React from 'react'
import Blog1 from '../../public/blog1.png'
import Blog2 from '../../public/blog2.jpg'
import Blog3 from '../../public/blog3.jpg'
import { FaHeart } from "react-icons/fa";

import Blog4 from '../../public/blog4.jpg'
import { IoTime } from "react-icons/io5";
import Link from 'next/link'
import { FaCalendarDays } from "react-icons/fa6";


const Blog = () => {
  return (
    <div className=' bg-slate-100 py-20'>
      <div className='container mx-auto'>
      <div className='flex  flex-col justify-center items-center gap-4 pb-10 '>
<span className='text-[16px] font-Fjalla font-medium tracking-wide text-heading ' >OUR BLOG</span>
<h2 className='text-[32px] font-Fjalla text-primary font-bold tracking-wide'>LATEST BLOG & ARTICLES</h2>
<p className='text-center text-[16px]  text-body font-normal tracking-wide'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`}</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    <div className='flex flex-col justify-center items-center bg-white shadow-md  gap-3'>
  <div>
    <Image src={Blog1} alt={'Hems Water Park Jaipur!'} className='w-full h-full object-cover' />
  </div>

    <div className='flex justify-center items-center gap-20 '>
      <div className='flex justify-center items-center gap-2'>
        <FaCalendarDays className='text-[14px] text-heading'/>
        <p className='text-[14px]'>30 March 2024</p>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <FaHeart className='text-[14px] text-heading'/>
        <p className='text-[14px]'>106</p>
      </div>
    </div>
    <div className='flex flex-col gap-1 justify-start items-start mt-auto px-3'>
    <h5 className='text-[18px] font-medium text-start tracking-wide font-Fjalla text-heading'>{`Hems Water Park, Jaipur! – Tickets, Entry fees, Contact info, and more`}</h5>

    <p className='text-[14px] text-body text-justify tracking-wide'>{`Dive into the excitement at Hems Water Park, the best water park in Jaipur! Enjoy summer, dominate the slides, and conquer the waves with family-friendly fun and thrilling rewards.`}</p>
  </div>
  <Link href={'/blog/hemswaterpark-tickets-information'} className='mt-auto '>
    <button  className='bg-primary my-4 hover:bg-secondary transition-all duration-300 focus:bg-secondary text-white px-7 py-3 rounded-md '>Read More</button>
    </Link> 

</div>

    
    </div>
      </div>
    </div>
  )
}

export default Blog
