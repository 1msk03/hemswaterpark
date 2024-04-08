import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import Events1 from '../../public/sky-screamer-1.jpg'
import Image from 'next/image'
const EventsSection1 = () => {
  return (
    <div className=' mb-20'>
     <div className=' container mx-auto'>
      <h3></h3>
        <div className='flex flex-col lg:flex-row bg-[#e87130] font-bold justify-center  items-center gap-10'>
            <div className=' lg:w-[30%] w-full'>
                <div>
                    <Image src={Events1} alt=' ' className='w-full h-full object-contain'/>
                </div>
                
            </div>
            <div className='lg:w-[70%] p-4 lg;p-0 w-full  text-white   flex flex-col   '>
            <h3 className='lg:text-[25px] text-[18px] tracking-wide text-center md:text-start  font-bold'>The Grand Opeing is on April 15, 2024, Monday</h3>
              

<div className='flex flex-col  justify-start items-start gap-5  '>
<p className='lg:text-[20px] text-[16px] tracking-wide text-center md:text-start font-medium'>Grab offers on the opening of Hems Water Park
</p>
<p className='lg:text-[20px] text-[16px] tracking-wide text-center md:text-start font-medium'>Get 15% Discount on your first visit to Water Park
</p>
<div className='flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between lg:items-start items-center w-full'>
<div>
<p className='flex justify-start items-center gap-3'>Follow <Link href={'https://www.instagram.com/hemswaterpark/'} target='_blank' className='text-white uppercase underline '>Instagram</Link>  </p>
<p>Share story and mention us</p>
</div>
<div>
<button className='py-3 px-8 bg-white rounded-md shadow-md text-black tracking-wide font-medium'>Get Offers</button>
</div>
<div>

</div>
</div>

</div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default EventsSection1
