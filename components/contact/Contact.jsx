import Link from 'next/link';
import React from 'react'
import { GrMapLocation } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter , FaLinkedinIn, FaInstagram, FaYoutube   } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-slate-100 py-28'>
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
        <div className='lg:w-1/2 w-full '>
        <div className='  flex flex-col justify-start items-start gap-5 '>
             <span className='text-[16px] font-Fjalla font-medium tracking-wider text-heading'>GET IN TOUCH</span>
             <h2 className='text-[32px] text-primary font-Fjalla font-bold'>CONTACT US TO GET BETTER INFORMATION</h2>
             <p className='text-[16px] text-body'>Have a question about your visit or any other query? The Hems Water Park team is here to help! Call us at +91 9352318221 or reach out through our contact form for quick assistance.</p>
             </div>
             <div className='flex flex-col lg:flex-row justify-between lg:items-start items-start gap-4 lg:gap-0 py-10 border-b-2'>
                <div className='flex justify-center items-start gap-3'>
                    <Link href={'https://www.google.com/maps/place/Hems+Water+Park/@26.8854313,75.7038925,15z/data=!4m6!3m5!1s0x396c4bcd4559eea7:0x8d639ac1090f4ce5!8m2!3d26.8854313!4d75.7038925!16s%2Fg%2F11vqvjlyd5?entry=ttu'} target='_blank' className='p-4 bg-primary'><GrMapLocation className='text-[30px] font-bold text-white'/></Link>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px] font-Fjalla font-medium tracking-wider text-heading'>Location</p>
                        <p className='text-[14px] text-body'>Near Dugout Turf Arena, behind Chordias Atulya, Keshupura, Bhankrota, Jaipur, Rajasthan 302026
</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <span className='p-4 bg-primary'><IoMailOutline className='text-[30px] font-bold text-white'/></span>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px] font-Fjalla font-medium tracking-wider text-heading'>
Drop Your Mail</p>
                        <p className='text-[14px] text-body'>Hemswaterpark@gmail.com</p>
                    </div>
                </div>

             </div>
             <div className='flex flex-col md:flex-row gap-6 justify-start items-center pt-10 '>
              <h3 className='text-heading text-[20px] font-bold capitalize tracking-wide'>Follow us on Social Media :
</h3>
<ul className='flex justify-start items-center gap-3  '>
                <Link href="https://www.facebook.com/hemswaterpark" target="_blank" className='p-2 bg-primary text-white rounded-full hover:scale-75 duration-300  hover:text-white group'><FaFacebookF  className='text-white text-[20px] group-hover:text-white cursor-pointer'/></Link>
                <Link href="https://twitter.com/trackonweb" target="_blank" className='p-2 bg-primary text-white rounded-full hover:scale-75 duration-300   hover:text-white group'><FaTwitter  className='text-white text-[20px] group-hover:text-white cursor-pointer'/></Link>

                <Link href="https://www.instagram.com/hemswaterpark"  target="_blank" className='p-2 bg-primary text-white hover:scale-75 duration-300  rounded-full  hover:text-white group'><FaInstagram  className='text-white text-[20px] group-hover:text-white cursor-pointer'/></Link>
                <Link href="https://www.youtube.com/@Hemswaterpark" target='_blank' className='p-2 bg-primary rounded-full text-white hover:scale-75 duration-300   hover:text-white group'><FaYoutube   className='text-white text-[20px] group-hover:text-white cursor-pointer'/></Link>
            </ul>
            <div>
            
            </div>
             </div>
          <div className='flex justify-start items-center gap-3 pt-4'>
          <h3 className='text-heading text-[20px] font-bold capitalize tracking-wide'>Call Us :</h3>
          <Link href="tel:9352318221" className='text-[16px] text-body'>+91 9352318221 </Link>
          </div>
        </div>
        <div className='lg:w-1/2 w-full '>
        <form className='flex bg-white  flex-col justify-start  gap-5 p-10'>
            <div>
              <input type='text' placeholder='Your Name*'  className='p-4 w-full outline-none border'/>
            </div>
            <div>
              <input type='text' placeholder='Your Phone No*'  className='p-4 w-full outline-none border'/>
            </div>
            <div>
              <input type='text' placeholder='Your Subject*'  className='p-4 w-full outline-none border'/>
            </div>
            <div>
              <textarea type='text' placeholder='Message*'  className='p-4 w-full outline-none border'/>
            </div>
<div className='flex justify-start items-start'>
<button className='bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide uppercase'>SEND MESSAGE</button>
</div>
           </form>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Contact
