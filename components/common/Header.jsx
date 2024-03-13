"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/HemsLogo.png'
import Link from 'next/link'
import { LuPhoneCall } from "react-icons/lu";
import MobileNav from './MobileNav'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };
  return (
    <div className='h-[80px]'>
   <div className='container mx-auto'>
    <div className='flex justify-between items-center '>
        <div>
        <Image  src={Logo} className='h-[80px] w-[169px] object-cover '/>
        </div>
        <div className='hidden lg:flex justify-center items-center gap-5'>
        <Link href={'/'} className='text-[16px] text-heading font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Home</Link>
        <Link href={'/about'} className='text-[16px] text-heading font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>About Us</Link>
        <Link href={'/services'} className='text-[16px] text-heading font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Services</Link>
        <Link href={'/booking'} className='text-[16px] text-heading font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Booking</Link>
        <Link href={'/blog'} className='text-[16px] text-heading font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Blog</Link>
        <Link href={'/contact'} className='text-[16px] text-heading font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Contact</Link>
        </div>
        <div className='hidden md:flex justify-center items-center gap-5'>
          <span className='bg-secondary/15 cursor-pointer hover:bg-primary duration-500 transition-transform  ease-in-out  p-4 rounded-full group'>  <Link href={'/'}><LuPhoneCall className='text-primary group-hover:text-white  duration-500 text-[24px]'/></Link></span>
        <div className='flex flex-col justify-center items-start'>
        <p className='text-heading text-[15px]'>Call Anytime</p>
           <p className=' font-bold text-primary text-[15px] cursor-pointer'>+91 9352318221</p>
        </div>
        </div>
        <div className="lg:hidden flex" onClick={toggleMobileNav}>
                <GiHamburgerMenu className="text-[28px] cursor-pointer" />
              </div>
    </div>

   </div>
   {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav}/>}
    </div>
  )
}

export default Header
