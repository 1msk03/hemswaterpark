import Image from 'next/image'
import React from 'react'
import Logo from '../../public/HemsLogo.png'
import Link from 'next/link'
import { FaFacebookF ,FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className='h-[80px]'>
   <div className='container mx-auto'>
    <div className='flex justify-between items-center '>
        <div>
        <Image  src={Logo} className='h-[80px] w-[169px] object-contain '/>
        </div>
        <div className='hidden lg:flex justify-center items-center gap-5'>
        <Link href={'/'} className='text-[16px] text-secondary font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Home</Link>
        <Link href={'/about'} className='text-[16px] text-secondary font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>About Us</Link>
        <Link href={'/services'} className='text-[16px] text-secondary font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Services</Link>
        <Link href={'/booking'} className='text-[16px] text-secondary font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Booking</Link>
        <Link href={'/blog'} className='text-[16px] text-secondary font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Blog</Link>
        <Link href={'/contact'} className='text-[16px] text-secondary font-Fjalla  uppercase tracking-wider hover:text-primary duration-300'>Contact</Link>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <Link href={'/'}><FaFacebookF className='hover:text-primary duration-300'/></Link>
            <Link href={'/'}><FaTwitter className='hover:text-primary duration-300'/></Link>
            <Link href={'/'}><FaYoutube className='hover:text-primary duration-300'/></Link>
            <Link href={'/'}><FaInstagram className='hover:text-primary duration-300'/></Link>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Header
