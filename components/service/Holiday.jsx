import React from 'react'
import BookForm from '../common/BookForm'
import { IoMailOutline } from "react-icons/io5";
import { IoTime } from 'react-icons/io5'
import { FiPhoneCall } from "react-icons/fi";

const Holiday = () => {
  return (
    <div className='bg-secondary py-28'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center w-full gap-10'>
            <div className='w-1/2'>
                <BookForm/>
            </div>
            <div className='w-1/2'>
               <div className='flex flex-col gap-3'>
               <span className='text-[16px] font-Fjalla font-medium tracking-wide text-primary'>BOOK NOW</span>
             <h2 className='text-[32px] text-white font-Fjalla font-bold'>SPEND YOUR HOLIDAY</h2>
             <p className='text-[16px] text-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco incididunt magna aliqua veniam quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
               </div>
               <div>
                <h5 className='text-[20px] font-bold font-Fjalla tracking-wide text-white mt-5'>Opening Hours</h5>
               <div className='flex flex-col py-3 '>

<div className='flex justify-between items-center border-b border-body py-3'>
    <h5 className= ' text-body text-[16px] font-Fjalla tracking-wide font-normal'>Monday - Friday</h5>
    <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime className='text-primary'/><p>11:00 AM - 16:00 PM</p></span>
</div>
<div className='flex justify-between items-center border-b border-body py-3'>
    <h5 className= ' text-body text-[16px] font-Fjalla tracking-wide font-normal'>Saturday - Sunday</h5>
    <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime className='text-primary'/><p>09:00 AM - 17:00 PM</p></span>
</div>
<div className='flex justify-between items-center border-b border-body py-3'>
    <h5 className= ' text-body text-[16px] font-Fjalla tracking-wide font-normal'>Holiday</h5>
    <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime className='text-primary'/><p>
09:00 AM - 17:00 PM</p></span>
</div>


       </div>
               </div>

<div className='flex justify-between items-center mt-6'>
    <div className='flex justify-start items-center gap-5'>
        <span ><IoMailOutline className='text-[40px] font-bold text-primary'/></span>
        <div className='flex flex-col gap-2'>
        <p className='text-white text-[20px] font-medium font-Fjalla tracking-wide'>Email Address</p>
        <p className='text-body text-[16px]'>support@domain.com</p>
        </div>
    </div>
    <div className='flex justify-start items-center gap-5'>
        <span ><FiPhoneCall className='text-[40px] font-bold text-primary'/></span>
        <div className='flex flex-col gap-2'>
        <p className='text-white text-[20px] font-medium font-Fjalla tracking-wide'>Phone Number</p>
        <p className='text-body text-[16px]'>(+62)81 1235 3368</p>
        </div>
    </div>
</div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Holiday
