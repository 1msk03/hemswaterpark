import React from 'react'
import { MdDone } from "react-icons/md";

const Ticket = () => {
  return (
    <div className='bg-[#F2FDFF] py-28'>
        <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row gap-5  w-full'>
            <div className=' md:w-[40%] w-full flex flex-col justify-start items-start gap-5 '>
             <span className='text-[16px] font-Fjalla font-medium tracking-wide text-primary'>TICKET PACKAGES</span>
             <h2 className='text-[32px] text-secondary font-Fjalla font-bold'>CHOOSE THE BEST PACKAGES FOR YOUR FAMILY</h2>
             <p className='text-[16px] text-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori</p>
             <div className='flex flex-col justify-center items-start gap-4'>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Best Waterpark in the world</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Best Packages For Your Family</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Enjoy Various Kinds of Water Park</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Win Up To 3 Free All Day Tickets</p></span>
             </div>
             <button className='bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide uppercase'>All Packages</button>
            </div>
            <div className=' md:w-[60%] w-full gap-5 md:gap-0 flex flex-col md:flex-row '>
                <div className='md:w-1/2  w-full py-10 md:py-0 bg-secondary flex flex-col justify-center gap-6  items-center'>
                    <h3 className='text-[24px] font-Fjalla font-[400] text-white '>Family Packages</h3>
<div className='flex justify-center items-center border-b-2 border-body pb-3 '>                    <span className='text-[30px] font-Fjalla font-[400] text-primary'>$299.90</span><span className='text-[16px] text-body'>/family</span></div>
                    <div className='flex flex-col justify-center items-start gap-4'>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>All Access To Waterpark</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Get Two Gazebo</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>
Free Soft Drinks</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Get Four Lockers</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Free Four Towels</p></span>
              
             </div>
             <button className='bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide'>BOOK NOW</button>
                </div>
                <div className='md:w-1/2 w-full bg-primary flex flex-col justify-center gap-6  my-auto py-10 items-center'>
                <h3 className='text-[24px] font-Fjalla font-[400] text-white'>Basic Packages</h3>
<div className='flex justify-center items-center border-b-2 border-body pb-3'>                    <span className='text-[30px] font-Fjalla font-[400] text-secondary'>$59,90</span><span className='text-[16px] text-white'>/person</span></div>
                    <div className='flex flex-col justify-center items-start gap-4'>
               <span className='flex justify-start items-center gap-3 text-[16px] text-white'><MdDone className='text-[20px] font-bold text-secondary'/><p>Get Small Gazebo</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-white'><MdDone className='text-[20px] font-bold text-secondary'/><p>Free Soft Drink</p></span>
              
               <span className='flex justify-start items-center gap-3 text-[16px] text-white'><MdDone className='text-[20px] font-bold text-secondary'/><p>Get One Locker</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-white'><MdDone className='text-[20px] font-bold text-secondary'/><p>Free Towel</p></span>
              
             </div>
             <button className='bg-white text-primary px-6 py-3 text-[16px] font-bold tracking-wide'>BOOK NOW</button>
                </div>
            </div>

        </div>
        </div>
    
    </div>
  )
}

export default Ticket
