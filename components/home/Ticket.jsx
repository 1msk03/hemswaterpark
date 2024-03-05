import React from 'react'
import { MdDone } from "react-icons/md";

const Ticket = () => {
  return (
    <div className='bg-[#F2FDFF] py-28'>
        <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row gap-5  w-full'>
            <div className=' md:w-[40%] w-full flex flex-col justify-start items-start gap-5 '>
             <span className='text-[22px] font-Fjalla font-medium tracking-wide text-heading'>TICKET PACKAGES</span>
             <h2 className='text-[48px] text-primary font-Fjalla font-bold'>CHOOSE THE BEST PACKAGES FOR YOUR FAMILY</h2>
             <p className='text-[16px] text-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori</p>
             {/* <div className='flex flex-col justify-center items-start gap-4'>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Best Waterpark in the world</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Best Packages For Your Family</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Enjoy Various Kinds of Water Park</p></span>
               <span className='flex justify-start items-center gap-3 text-[16px] text-body'><MdDone className='text-primary text-[20px] font-bold'/><p>Win Up To 3 Free All Day Tickets</p></span>
             </div> */}
             <button className='bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide uppercase'>All Packages</button>
            </div>
          
          <div classname="md:w-[60%] flex gap-4">
  <div className="plan">
    <div className="inner">
      <span className="pricing">
        <span>
          $49 <small>/ m</small>
        </span>
      </span>
      <p className="title">Kids</p>
      <p className="info">This plan is for those who have a team already and running a large business.</p>
      <ul className="features">
        <li>
          <span className="icon">
            <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </svg>
          </span>
          <span><strong>20</strong> team members</span>
        </li>
        <li>
          <span className="icon">
            <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </svg>
          </span>
          <span>Plan <strong>team meetings</strong></span>
        </li>
        <li>
          <span className="icon">
            <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </svg>
          </span>
          <span>File sharing</span>
        </li>
      </ul>
      <div className="action">
        <a className="button" href="#">
          Choose plan
        </a>
      </div>
    </div>

    
  </div>

</div>

        </div>
        </div>
   
    </div>
  )
}

export default Ticket


