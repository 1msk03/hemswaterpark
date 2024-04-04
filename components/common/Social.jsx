"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebookF, FaTwitter,FaInstagram  } from "react-icons/fa";


const Social = () => {

  const router = useRouter();
 
  const hanlebt = ()=>{
    router.push('/events-and-offers')
  }

  return (
    <div className='fixed hidden md:flex left-0 top-1/2 z-50 transform -translate-y-1/2'>
      <ul className='list-none p-0 m-0'>
        <button onClick={hanlebt} className='bg-primary px-6 py-2 rounded-b-md text-white transform -rotate-90 origin-top-left'>
        Get Offers
      </button>
      
      </ul>
    </div>
  );
}

export default Social;
