import React from 'react'
import Banner2 from "../../public/banner2.jpg"
import Image from 'next/image'
import Link from 'next/link'

const FeatureSection = () => {
  return (
    <div>
        <div className='container mx-auto  py-20'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 '>
    <div className=' h-[400px] bg-cover bg-center flex flex-col justify-end items-start p-6 gap-5'style={{ backgroundImage: `url(${Banner2.src})` }}>
    <h3 className='text-[24px] font-Fjalla  tracking-wide text-white'>Best Pools</h3>
    <p className='text-[14px] text-white  font-heebo'>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore</p>
    <Link href={'/'} className='text-[16px] font-Fjalla tracking-wide text-primary'>READ MORE</Link>
    </div>
    <div className=' h-[400px] bg-cover bg-center flex flex-col justify-end items-start p-6 gap-5'style={{ backgroundImage: `url(${Banner2.src})` }}>
    <h3 className='text-[24px] font-Fjalla  tracking-wide text-white'>Water Slides</h3>
    <p className='text-[14px] text-white font-heebo'>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore</p>
    <Link href={'/'} className='text-[16px] font-Fjalla tracking-wide text-primary'>READ MORE</Link>
    </div>
    <div className=' h-[400px] bg-cover bg-center flex flex-col justify-end items-start p-6 gap-5'style={{ backgroundImage: `url(${Banner2.src})` }}>
    <h3 className='text-[24px] font-Fjalla  tracking-wide text-white'>World Class Rides</h3>
    <p className='text-[14px] text-white font-heebo'>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore</p>
    <Link href={'/'} className='text-[16px] font-Fjalla tracking-wide text-primary'>READ MORE</Link>
    </div>
</div>
        </div>
 
    </div>
  )
}

export default FeatureSection
