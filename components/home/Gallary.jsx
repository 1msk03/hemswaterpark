import React from 'react'
import Gallary1 from '../../public/gallary1.jpg'
import Gallary2 from '../../public/gallary2.jpg'
import Gallary3 from '../../public/gallary3.jpg'
import Gallary4 from '../../public/gallary4.jpg'
import Gallary5 from '../../public/gallary5.jpg'
import Gallary6 from '../../public/gallary6.jpg'
import Image from 'next/image'

const Gallary = () => {
  return (
    <div className='py-20'>
   <div className='container mx-auto'>

    <div className='flex  flex-col justify-center items-center gap-4 pb-10 '>
<p className='text-[16px] font-Fjalla font-medium tracking-wide text-primary ' >OUR GALLERY</p>
<h2 className='text-[32px] font-Fjalla text-secondary font-bold tracking-wide'>CAPTURED MOMENTS IN WATERBOOM</h2>
<p className='text-center text-[16px] font-Fjalla text-body font-normal tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
<div className='grid md:grid-cols-3 gap-4 '>
<div className='flex flex-col gap-4'>
  <div>
  <Image src={Gallary1}/>
  </div>
  <div>
  <Image src={Gallary2}/>
  </div>
</div>
<div className='flex flex-col gap-4'>
<div>
  <Image src={Gallary3}/>
  </div>
  <div>
  <Image src={Gallary4}/>
  </div>

</div>
<div className='flex flex-col gap-4'>
<div>
  <Image src={Gallary5}/>
  </div>
  <div>
  <Image src={Gallary6}/>
  </div>

</div>
</div>
   </div>
    </div>
  )
}

export default Gallary
