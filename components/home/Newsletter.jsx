import React from 'react'
import Banner2 from "../../public/banner2.jpg"

const Newsletter = () => {
  return (
    <div  className="  bg-cover bg-center md:h-[400px] h-full py-10 md:py-0 flex justify-center items-center " style={{ backgroundImage: `url(${Banner2.src})` }}>
<div className='container mx-auto'>
<div className='flex justify-center items-center'>
<div className='flex flex-col  justify-center items-center gap-7'>
    <h1 className='text-[32px] tracking-wide font-Fjalla text-white text-center font-bold'>GET NEWS, UPDATES, SPECIAL EVENT NOTICES AND MORE<br/> WHEN YOU JOIN OUR EMAIL LIST</h1>
    <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
        <input type='text' placeholder='Your Email Address ' className='md:w-[500px] w-[300px]  py-5 outline-none px-5'/>
        <button className='bg-primary text-white px-8 py-5 text-[16px] font-bold tracking-wide'>Subscribe</button>
      
       
    </div>
</div>
</div>
</div>
    </div>
  )
}

export default Newsletter
