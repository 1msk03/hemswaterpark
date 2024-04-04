import React from 'react'
import Events1 from '../../public/sky-screamer-1.jpg'
import Image from 'next/image'
const EventsSection = () => {
  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-start'>
            <div className='lg:w-[50%] w-full'>
            <div>
                <Image src={Events1} alt='' className='w-full h-full object-contain'/>
            </div>
            </div>
            <div className='lg:w-[50%] w-full flex flex-col justify-start items-start gap-3'>
                <h5 className='text-[16px] font-medium text-heading tracking-wide'>TALLEST RIDE IN NORTH INDIA</h5>
                <h3 className='text-[40px] font-bold tracking-wide text-primary'>Fun Kingdom |
Sky Screamer</h3>
                <p className='text-[16px]'>The Tallest Ride in North India. </p>
                <p className='text-[16px] text-body'>Experience the City like never before, get complete 360 views of city while you experience thrill and adventure beyond imaginations.</p>
           <div className='flex justify-between items-center gap-4'>
            <div>
            <Image src={Events1} alt='' className='w-full h-full object-contain'/>
            </div>
            <div>
            <Image src={Events1} alt='' className='w-full h-full object-contain'/>
            </div>
           </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default EventsSection
