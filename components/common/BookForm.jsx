import React from 'react'

const BookForm = () => {
  return (
    <div>
       <form className='flex bg-[rgba(255,255,255,0.37)]  w-[500px] flex-col justify-start  gap-5 p-10'>
            <div>
              <input type='text' placeholder='Your Name*'  className='p-4 w-full outline-none'/>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <input type='text' placeholder='Your Phone*'  className='p-4 w-full outline-none'/>
              <input type='text' placeholder='Your Email*' className='p-4 w-full outline-none'/>
            </div>
            <div>
            <select
                  name='course_type'
                  id='course_type'
                   
                  className='p-4 w-full outline-none text-gray-400'
                >
                  <option value=''  >
                   Select Packages
                  </option>
                  <option value='Family Packages'>Family Packages</option>
                 
                  <option value='Basic Packages'>Basic Packages</option>
                  <option value='Premium Packages'>Premium Packages</option>
                 
                  
                </select>
            </div>
            <div>
            <input type='datetime-local' placeholder='Select Date and Time*' className='p-4 text-gray-400 w-full outline-none' />
            </div>
            <div>
              <input type='number' placeholder='Guest*' className='p-4 w-full outline-none'/>
            </div>
            <button className='bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide uppercase'>Book Now</button>
           </form>
    </div>
  )
}

export default BookForm
