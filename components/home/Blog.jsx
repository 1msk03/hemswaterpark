import Image from 'next/image'
import React from 'react'
import Blog1 from '../../public/blog1.jpg'
import Blog2 from '../../public/blog2.jpg'
import Blog3 from '../../public/blog3.jpg'
import Blog4 from '../../public/blog4.jpg'
import { IoTime } from "react-icons/io5";
import Link from 'next/link'

const Blog = () => {
  return (
    <div className='lg:pt-32 pt-20 pb-20'>
      <div className='container mx-auto'>
      <div className='flex  flex-col justify-center items-center gap-4 pb-10 '>
<span className='text-[16px] font-Fjalla font-medium tracking-wide text-primary ' >OUR BLOG</span>
<h2 className='text-[32px] font-Fjalla text-secondary font-bold tracking-wide'>LATEST BLOG & ARTICLES</h2>
<p className='text-center text-[16px]  text-body font-normal tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
      <div className='flex flex-col md:flex-row gap-5'>
        <div>
          <Image src={Blog1} className='w-[700px]   object-cover'/>
        </div>
        <div className='flex flex-col gap-1 justify-start items-start'>
          <h5 className='text-[18px] font-medium tracking-wide font-Fjalla text-secondary'>Why Children Dont Like Getting Out Of The Water</h5>
          <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime/><p>August 10, 2021</p></span>
          <p className='text-[16px] text-body  tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          <Link href={'/'} className='text-primary font-bold font-Fjalla text-[14px] tracking-wide'>READ MORE</Link>
        </div>
      </div>
      <div className='flex  flex-col md:flex-row  gap-5'>
        <div>
          <Image src={Blog2} className='w-[700px]  object-cover'/>
        </div>
        <div className='flex flex-col gap-1 justify-start items-start'>
          <h5 className='text-[18px] font-medium tracking-wide font-Fjalla text-secondary'>5 Reasons To Escape The Cold Weather This Season</h5>
          <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime/><p>August 5, 2021</p></span>
          <p className='text-[16px] text-body  tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          <Link href={'/'} className='text-primary font-bold font-Fjalla text-[14px] tracking-wide'>READ MORE</Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row  gap-5'>
        <div>
          <Image src={Blog3} className='w-[700px]   object-cover'/>
        </div>
        <div className='flex flex-col gap-1 justify-start items-start'>
          <h5 className='text-[18px] font-medium tracking-wide font-Fjalla text-secondary'>5 Ways To Enjoy Waterboom This Spring Break</h5>
          <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime/><p>August 10, 2021</p></span>
          <p className='text-[16px] text-body  tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          <Link href={'/'} className='text-primary font-bold font-Fjalla text-[14px] tracking-wide'>READ MORE</Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row  gap-5'>
        <div>
          <Image src={Blog4} className='w-[700px]    object-cover'/>
        </div>
        <div className='flex flex-col gap-1 justify-start items-start'>
          <h5 className='text-[18px] font-medium tracking-wide font-Fjalla text-secondary'>4 Things You Must Do To Save Money While Planning A Vacation</h5>
          <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime/><p>August 5, 2021</p></span>
          <p className='text-[16px] text-body  tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          <Link href={'/'} className='text-primary font-bold font-Fjalla text-[14px] tracking-wide'>READ MORE</Link>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Blog
