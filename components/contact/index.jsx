import Link from 'next/link';
import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className='bg-secondary h-[300px] flex justify-center items-center'>
      <div className='container mx-auto'>

         <div className='text-white flex flex-col justify-center items-center gap-5'>
            <h1 className='text-[32px] font-bold font-Fjalla tracking-wider '>CONTACT US</h1>
            <div className='flex justify-center items-center gap-3'>
                <Link href={'/'}  className='hover:text-primary duration-300 transition-all'>Home</Link>
                <span><FaChevronRight className='text-primary'/></span>
                <span>Contact</span>
            </div>
     
        </div>
      </div>
    </div>
  )
}

export default ContactPage
