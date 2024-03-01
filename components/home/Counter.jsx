import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { GoThumbsup } from "react-icons/go";
import { GoPeople } from "react-icons/go";

const Counter = () => {
  return (
    <div className='hidden lg:flex lg:bottom-[-30%] md:bottom-[-100%] md:left-0 md:right-0'>
     <div className='container mx-auto'>
        <div className='bg-primary grid md:grid-cols-2 gap-5 lg:grid-cols-4 py-10'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <TfiWorld className='text-[30px] font-bold text-white'/>
                <span className='text-secondary text-[32px] font-Fjalla font-bold tracking-wide flex justify-center items-center gap-2'>8,450 <p className='text-[30px] text-white font-medium'>+</p></span>
                <h5 className='text-[16px] tracking-wide font-medium text-white'>Happy Visitors</h5>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <LiaSwimmingPoolSolid className='text-[30px] font-bold text-white'/>
                <span className='text-secondary text-[32px] font-Fjalla font-bold tracking-wide flex justify-center items-center gap-2'>30 <p className='text-[30px] text-white font-medium'>+</p></span>
                <h5 className='text-[16px] tracking-wide font-medium text-white'>World Class Rides</h5>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <GoThumbsup className='text-[30px] font-bold text-white'/>
                <span className='text-secondary text-[32px] font-Fjalla font-bold tracking-wide flex justify-center items-center gap-2'>15 <p className='text-[30px] text-white font-medium'>+</p></span>
                <h5 className='text-[16px] tracking-wide font-medium text-white'>Years Of Experience</h5>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <GoPeople className='text-[30px] font-bold text-white'/>
                <span className='text-secondary text-[32px] font-Fjalla font-bold tracking-wide flex justify-center items-center gap-2'>40 <p className='text-[30px] text-white font-medium'>+</p></span>
                <h5 className='text-[16px] tracking-wide font-medium text-white'>Certified Lifeguard</h5>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Counter
