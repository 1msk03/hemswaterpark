import React from 'react'
import { MdDone } from "react-icons/md";

const Terms = () => {
  return (
    <div className='bg-[#fff] py-28'>
        <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row gap-5  w-full'>
            <div className=' md:w-[35%] w-full flex flex-col justify-start items-start gap-5 '>
             <span className='text-[16px] font-Fjalla font-medium tracking-wider text-heading'>TERMS</span>
             <h2 className='text-[32px] text-primary font-Fjalla font-bold'>{`Infique Ai Services Pvt Ltd`}</h2>
             <p className='text-[16px] text-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori</p>
             <div className='flex flex-col justify-center items-start gap-4'>
               <div className='flex justify-start items-center w-full gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Kids under 4 must wear protective swim pants</p></div>
               <div className='flex justify-start items-center w-full gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Kids under 13 must be supervised at all times by an adult aged 18 years or older</p></div>
               <div className='flex justify-start items-center w-full gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Kids under 13 may not use the adult whirlpools</p></div>
               <div className='flex justify-start items-center w-full gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Not Permitted Smoking, Coolers, Food and beverage from outside sources</p></div>
               <div className='flex justify-start items-center w-full gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Slides have a minimum height requirement of 44 inches</p></div>
             </div>

            </div>
            <div className=' md:w-[65%] w-full flex '>
                <div className='w-1/2 bg-secondary flex flex-col justify-center   items-center'>
                  <h3 className='text-[22px] font-bold text-white'>Image</h3>
                </div>
                <div className='w-1/2  flex flex-col justify-center    items-center'>
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.568850902543!2d75.70131757450386!3d26.88543606126395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4bcd4559eea7%3A0x8d639ac1090f4ce5!2sHems%20Water%20Park!5e0!3m2!1sen!2sin!4v1712134290223!5m2!1sen!2sin"
        width="100%"
        height="100%"
      
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
                </div>
            </div>

        </div>
        </div>
    
    </div>
  )
}

export default Terms
