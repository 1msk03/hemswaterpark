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
    <div className='pt-20'>
       
   <div className='container mx-auto'>

    <div className='flex  flex-col justify-center items-center gap-4 pb-10 '>
<p className='text-[22px] font-Fjalla font-medium tracking-wide text-heading ' >OUR GALLERY</p>
<h2 className='lg:text-[40px] capitalize text-[30px] text-center font-Fjalla text-primary font-bold tracking-wide'>Captured moments filled with excitement, fun, and adventure</h2>
<p className='text-center text-[16px] font-Fjalla text-body font-normal tracking-wide'>With thousands of memories created with people, we need your presence to create lakhs more.</p>
    </div>
<div className='grid md:grid-cols-3 gap-4 '>
<div className='flex flex-col gap-4'>
  <div>
  <Image src={Gallary1} alt=''/>
  </div>
  <div>
  <Image src={Gallary2} alt=''/>
  </div>
</div>
<div className='flex flex-col gap-4'>
<div>
  <Image src={Gallary3} alt=''/>
  </div>
  <div>
  <Image src={Gallary4} alt=''/>
  </div>

</div>
<div className='flex flex-col gap-4'>
<div>
  <Image src={Gallary5} alt=''/>
  </div>
  <div>
  <Image src={Gallary6} alt=''/>
  </div>

</div>
</div>
   </div>
    </div>
  )
}

export default Gallary
