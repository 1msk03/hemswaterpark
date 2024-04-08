import React from 'react'
import Events1 from '../../public/eve.jpg'
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
            <div className='lg:w-[50%] w-full flex flex-col justify-start items-start lg:gap-5 gap-3'>
                <h5 className='text-[16px] font-medium text-heading tracking-wide'>Welcome to Grand Opening of</h5>
                <h3 className='lg:text-[40px] text-[25px] font-bold tracking-wide text-primary'>HEMS WATER PARK!!!</h3>
                <p className='text-[16px] text-body'>{`It provides Fun for all age groups such as children, adults and elder people.`}</p> 
                {/* <p className='text-[16px]'>The Tallest Ride in North India. </p> */}
                <p className='text-[16px] text-body'>{`There are many types of attractions like Terrace Rain Dance, DJ Dance, Kids Slides, Adult Slides, Wave Pool for everyone, Different sizes of swimming pools and food court for delicious food!!`}</p>
           <div className='flex justify-between items-center mt-6 gap-4'>
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
