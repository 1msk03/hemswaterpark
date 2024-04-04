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
    <div className='h-[80px] bg-white'>
   <div className='container mx-auto'>
    <div className='flex justify-between items-center '>
        <Link href={'/'}>
        <Image  src={Logo} alt='' className='h-[80px] w-[169px] object-cover '/>
        </Link>
        <div className='hidden lg:flex justify-center items-center gap-4'>
        <Link href={'/'} className=' capitalize tracking-wider hover:text-primary duration-300'>Home</Link>
        <li className="hidden lg:flex relative group  ">
              <div className="flex justify-center items-center space-x-3">
                <div
                
                  className={`hidden menu-hover hover:text-primary capitalize  lg:flex   tracking-wider `}
                 
                >
                  About
                </div>
              </div>
              <div
                className={`absolute top-0 -left-14 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform `}
              >
                <div className="relative top-8 py-3 bg-white border-t-2 border-t-heading   w-full">
                  <div className="relative z-10 ">
                    <div className=" flex flex-col gap-3 justify-center items-center ">
                      <Link
                        href={'/information'}
                        className={`w-full  text-center hover:text-primary `}
                     
                      >
                        Information
                      </Link>
                      <Link
                        href={'/blog'}
                        className={` w-full  text-center hover:text-primary`}  
                      >
                      Blog
                      </Link>
                      <Link
                        href={'/faq'}
                        className={`w-full  text-center hover:text-primary  `}
                      
                      >
                        FAQs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
        <Link href={'/attractions'} className='  capitalize tracking-wider hover:text-primary duration-300'>Attractions</Link>
        <Link href={'/events-and-offers'} className='  capitalize tracking-wider hover:text-primary duration-300'>Events & Offers</Link>
     
        <Link href={'/contact'} className=' capitalize tracking-wider hover:text-primary duration-300'>Contact</Link>
        <Link href={'/book'} className='  capitalize tracking-wider hover:text-primary duration-300'>Book Tickets</Link>
        </div>
        <div className='hidden md:flex justify-center items-center gap-5'>
          <span className='bg-secondary/15 cursor-pointer hover:bg-primary duration-500 transition-transform  ease-in-out  p-4 rounded-full group'>  <Link href={'/'}><LuPhoneCall className='text-primary group-hover:text-white  duration-500 text-[24px]'/></Link></span>
        <div className='flex flex-col justify-center items-start'>
        <p className='text-heading text-[15px]'>Call Anytime</p>
           <Link href="tel:9352318221" className=' font-bold text-primary text-[15px] cursor-pointer'>+91 9352318221</Link>
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
