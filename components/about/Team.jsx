import Image from 'next/image'
import React from 'react'
import Team1 from '../../public/team1.jpg'
import Team2 from '../../public/team2.jpg'
import Team3 from '../../public/team3.jpg'

const Team = () => {
  return (
    <div className='py-20'>
<div className='container mx-auto'>
<div className='flex  flex-col justify-center items-center gap-4 pb-10 '>
<span className='text-[16px] font-Fjalla font-medium tracking-wide text-primary ' >OUR TEAM</span>
<h2 className='text-[32px] font-Fjalla text-secondary font-bold tracking-wide'>MEET WITH PROFESSIONAL TEAM</h2>
<p className='text-center text-[16px] font-heebo text-body font-normal tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
<div>
    <Image src={Team1} className='object-contain'/>
</div>

<div>
    <Image src={Team2} className=' object-contain'/>
</div>
<div>
    <Image src={Team3} className=' object-contain'/>
</div>
</div>
    </div >
    </div>      
    </div>
  )
}

export default Team
