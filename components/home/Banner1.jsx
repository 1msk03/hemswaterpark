import React from 'react'
import Banner11 from '../../public/newsletter-image--1-.jpeg'
import Image from 'next/image'
const Banner1 = () => {
  return (
    <div className='bg-[#e87130] text-white md:h-[200px] h-full '>
     <div className=' mx-auto'>
        <div className='flex flex-col lg:flex-row justify-start  items-center gap-10'>
            <siv className='  flex flex-col justify-center items-start gap-3'>
                <div>
                    <Image src={Banner11} alt=' ' className='w-[500px] h-[200px] object-cover'/>
                </div>
                
            </siv>
            <div className='  flex flex-col  gap-6 '>
            <h3 className='text-[40px] tracking-wide text-center md:text-start px-4 font-bold'>Subscribe to our newsletter!</h3>
              

<div className='flex flex-col md:flex-row justify-center items-center gap-5 md:pr-10 p-4'>
<p className='text-[20px] tracking-wide text-center md:text-start font-medium'>Subscribe to have a complete experience and be up-to-date of all news, offers and promos for Splish Splash.</p>
<button className='py-3 px-8 bg-white rounded-md shadow-md text-black tracking-wide font-medium'>Subscribe</button>
</div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Banner1
