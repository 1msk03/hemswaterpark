import React from 'react'
import Services1 from "../../public/gazebo-M7GHEMR.png"
import Services2 from "../../public/food.png"
import Services3 from "../../public/lcoker.png"
import Services4 from "../../public/slide.png"
import Services5 from "../../public/services5.jpg"


import Image from 'next/image'
import { IoTime } from 'react-icons/io5'

const Services = () => {
  return (

    <div className='pb-20'>
      <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-16 w-full'>
      <div className='lg:w-1/2 w-full '>
        
       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
       <div className='bg-[#E1F6F9] flex flex-col justify-center items-center gap-5 p-6'>
            <div>
                <Image src={Services1} className='h-[60px] w-[60px] object-cover'/>
            </div>
         <h3 className='text-[16px] font-Fjalla font-medium tracking-wide text-secondary'>Private Gazebo</h3>
         <p className='text-[16px] text-body w-full'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className='bg-[#E1F6F9] flex flex-col justify-center items-center gap-5 p-6'>
            <div>
                <Image src={Services2} className='h-[60px] w-[60px] object-cover'/>
            </div>
         <h3 className='text-[16px] font-Fjalla font-medium tracking-wide text-secondary'>Delicious Food</h3>
         <p className='text-[16px] text-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className='bg-[#E1F6F9] flex flex-col justify-center items-center gap-5 p-6'>
            <div>
                <Image src={Services3} className='h-[60px] w-[60px] object-cover'/>
            </div>
         <h3 className='text-[16px] font-Fjalla font-medium tracking-wide text-secondary'>Safety Lockers</h3>
         <p className='text-[16px] text-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className='bg-[#E1F6F9] flex flex-col justify-center items-center gap-5 p-6'>
            <div>
                <Image src={Services4} className='h-[60px] w-[60px] object-cover'/>
            </div>
         <h3 className='text-[16px] font-Fjalla font-medium tracking-wide text-secondary'>River Rides</h3>
         <p className='text-[16px] text-body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
       </div>
       <div className='flex flex-col py-3 '>

<div className='flex justify-between items-center border-b border-body py-3'>
    <h5 className= ' text-secondary text-[16px] font-Fjalla tracking-wide font-normal'>Monday - Friday</h5>
    <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime className='text-primary'/><p>11:00 AM - 16:00 PM</p></span>
</div>
<div className='flex justify-between items-center border-b border-body py-3'>
    <h5 className= ' text-secondary text-[16px] font-Fjalla tracking-wide font-normal'>Saturday - Sunday</h5>
    <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime className='text-primary'/><p>09:00 AM - 17:00 PM</p></span>
</div>
<div className='flex justify-between items-center border-b border-body py-3'>
    <h5 className= ' text-secondary text-[16px] font-Fjalla tracking-wide font-normal'>Holiday</h5>
    <span className='flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal'><IoTime className='text-primary'/><p>
09:00 AM - 17:00 PM</p></span>
</div>


       </div>
      </div>
      <div className='lg:w-1/2 w-full'>
    <Image src={Services5}/>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Services
