import React from 'react';
import { FaFacebookF, FaTwitter,FaInstagram  } from "react-icons/fa";


const Social = () => {
  return (
    <div className='fixed hidden md:flex right-0 top-1/2 z-50 transform -translate-y-1/2  '>
      <ul className='list-none p-0 m-0'>
        <li className='mb-2 bg-secondary text-white p-3 flex justify-center items-center rounded-l-full cursor-pointer' ><span className='bg-primary p-2 rounded-full'><FaFacebookF/></span></li>
        <li className='mb-2 bg-secondary text-white p-3 flex justify-center items-center  rounded-l-full cursor-pointer'><span className='bg-primary p-2 rounded-full'><FaTwitter/></span></li>
        <li className='mb-2 bg-secondary text-white p-3 flex justify-center items-center  rounded-l-full cursor-pointer'><span className='bg-primary p-2 rounded-full'><FaInstagram/></span></li>
      </ul>
    </div>
  );
}

export default Social;
