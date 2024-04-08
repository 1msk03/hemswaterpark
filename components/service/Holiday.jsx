import React from 'react'
import BookForm from '../common/BookForm'
import { IoMailOutline } from "react-icons/io5";
import { IoTime } from 'react-icons/io5'
import { FiPhoneCall } from "react-icons/fi";
import Link from 'next/link';

const Holiday = () => {
  return (
    <div className=' py-28'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center w-full gap-10'>
            <div className='w-1/2 hidden lg:flex'>
                <BookForm/>
            </div>
            <div className='lg:w-1/2 w-full'>
               <div className='flex flex-col gap-3'>
               <span className='text-[16px] font-Fjalla font-medium tracking-wide text-heading'>BOOK NOW</span>
             <h2 className='text-[32px] text-primary font-Fjalla font-bold'>Make Your Holiday Unforgettable!
</h2>
             <p className='text-[16px] text-body'>{`Experience a memorable family holiday at our water park! Enjoy thrilling body slides, wave pool excitement, and a fun-filled DJ dance. With delicious food options, free parking, CCTV surveillance, and safety lockers, we offer complete enjoyment for all. Book now for an unforgettable FUN adventure!`}</p>
               </div>
               <div>
                <h5 className='text-[20px] font-bold font-Fjalla tracking-wide text-primary mt-5'>Opening Hours</h5>
               <div className='flex flex-col py-3 '>

<div className='flex justify-between items-center border-b border-body py-3'>
    <h5 className= ' text-body text-[16px] font-Fjalla tracking-wide font-normal'>Everyday</h5>
    <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime className='text-primary'/><p>10:00 AM - 06:00 PM</p></span>
</div>



       </div>
               </div>

<div className='flex flex-col md:flex-row justify-between md:items-center items-start mt-6'>
    <div className='flex justify-start items-center gap-5'>
        <span ><IoMailOutline className='text-[40px] font-bold text-primary'/></span>
        <div className='flex flex-col gap-2'>
        <p className='text-heading text-[20px] font-medium font-Fjalla tracking-wide'>Email Address</p>
        <p className='text-body text-[16px]'>Hemswaterpark@gmail.com</p>
        </div>
    </div>
    <div className='flex justify-start items-center gap-5'>
        <span ><FiPhoneCall className='text-[40px] font-bold text-primary'/></span>
        <div className='flex flex-col gap-2'>
        <p className='text-heading text-[20px] font-medium font-Fjalla tracking-wide'>Phone Number</p>
        <Link href="tel:9352318221" className='text-body text-[16px]'>+91 9352318221</Link>
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
