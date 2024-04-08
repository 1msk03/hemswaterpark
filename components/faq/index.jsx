"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Faqpic from "../../public/faq.avif"

const faqList = [
  {
    id: 1,
    question: 'What are the opening hours of the hems water park?',
    answer: `Opening hours of hems water park are from 10am to 6pm everyday.`,
  },
  {
    id: 2,
    question: 'What is the admission price for adults and children?',
    answer: (
      <div>
        

<div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
   
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Adults (above 4 ft.2 inch )
        </th>
        <td className="px-6 py-4">
        350/- RS (Monday-Friday)
450/- RS (Saturday-Sunday)
        </td>
       
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Children (3ft 3inch - 4 ft.2 inch )
Children under (3ft 3inch)
       
        </th>
        <td className="px-6 py-4">
        250/- RS (Monday- Sunday)
FREE
        </td>
       
      </tr>
     
    </tbody>
  </table>
</div>


      </div>
    ),
  },
  {
    id: 3,
    question: 'Are there any discounts available for groups or season passes?',
    answer: (
      <div>
        <p>YES, discounts are available on Groups, Family & Couples.
Group of 5 members – 25%
</p>
<p>For Family- 20%</p>
<p>For Couples- 10%</p>
      </div>
    ),
  },
  {
    id: 4,
    question: 'Can we bring our own food and drinks into the hems water park?',
    answer: `NO, outside food & drinks are not allowed in hems water park because we want you to try our delicious food.
    `,
  },
  {
    id: 5,
    question: 'Are swimming costumes compulsory for adults and children?',
    answer: `NO, it’s not compulsory but you can rent them (optional RS/- 50).`,
  
  },
  {
    id: 6,
    question: 'Are there height or age restrictions for certain rides and attractions?',
    answer: `NO, there are no height restrictions but kids slides are also available in hems water park.
    `,
  
  },
  {
    id: 7,
    question: 'Can we rent lockers at the hems water park?',
    answer: `YES, you can rent lockers only (at RS/- 50).`,
  
  },
  {
    id: 8,
    question: 'Are there changing rooms and showers available?',
    answer: `YES, changing rooms services and showers are available at hems water park.`,
  
  },
  {
    id: 9,
    question: 'What types of water slides and attractions does the park offer?',
    answer: `There are kids slides, adult slides, terrace rain dance and wave pool are available.`,
  
  },
  {
    id: 10,
    question: 'What are the ticket counter timings at hems water park?',
    answer: `Everyday the timings are from 10am – 06pm.`,
  
  },
  {
    id: 11,
    question: 'Are there restaurants or snack bars inside the hems water park?',
    answer: `YES, food court is available inside the hems water park serving delicious food.`,
  
  },
  {
    id: 12,
    question: 'Can we bring our own inflatable’s or water toys?',
    answer: `YES, you can bring your own toys.`,
  
  },
  {
    id: 13,
    question: 'Is DJ dance available at hems water park?',
    answer: `YES, DJ dance and terrace rain dance are available at hems water park.`,
  
  },
  {
    id: 14,
    question: 'Are there designated smoking areas within the hems water park?',
    answer: `NO, designated smoking areas are not available at hems water park.`,
  
  },
  {
    id: 15,
    question: 'Can we host birthday parties or other private events at the hems water park?',
    answer: `YES, you can host all kinds of parties such as birthday parties, anniversary parties, corporate parties, kitty parties etc.at hems water park at pre bookings.`,
  
  },
  {
    id: 16,
    question: 'How can I purchase online tickets of hems water park?',
    answer: `YES, you can purchase tickets online on TRIPADVISOR.
    `,
  
  },
  {
    id: 17,
    question: 'Is parking facility available at hems water park?',
    answer: `YES, parking facilities are available at hems water park.`,
  
  },
  {
    id: 18,
    question: 'How can I get in touch with hems water park?',
    answer: (
      <div>
        <p>You can contact us at- <span className='text-blue-500'>9352318221</span> or you can email us at- <span className='text-blue-500'>hemswaterpark@gmail.com</span></p>
      </div>
    ),
  
  },
  {
    id: 19,
    question: 'Does hems water park offer rain checks in case of inclement weather?',
    answer: `NO, hems water park does not offer rain checks.`,
  
  },
  {
    id: 20,
    question: 'Are pets allowed in hems water park?',
    answer: `NO, pets are not allowed in hems water park.`,
  
  },

 
  
  
];
const Faq = () => {
  const [expanded, setExpanded] = useState(faqList[0].id);

  const handleChange = (panel) => () => {
    setExpanded((prevExpanded) =>
      prevExpanded === panel ? null : panel
    );
  };

  return (
    <div className=' bg-white '>
      <div className='container mx-auto '>
        <div className='  flex flex-col justify-center items-center pb-20 '>
          <div className=' flex justify-center items-center w-full'>
        <Image src={Faqpic} alt='faq' className='w-[600px] h-[400px] object-contain'/>
          
          </div>
         

          <div className=' lg:w-[700px] w-full shadow-md  bg-slate-100'>
            {faqList.map((item) => (
              <div key={item.id} className='mb-4'>
                <div
                  className={`border-b-2 ${
                    expanded === item.id ? 'border-b-0' : ''
                  }`}
                >
                  <div
                    className='cursor-pointer py-3 px-4 flex  justify-between items-start '
                    onClick={handleChange(item.id)}
                  >
                    <h2 className=' text-[16px] font-semibold tracking-wide'>{item.question}</h2>
                    <span className='text-[16px] font-bold'><MdKeyboardArrowDown/></span>
                  </div>
                </div>
                {expanded === item.id && (
                  <div className='py-3 px-4'>
                    <p className=' text-[14px] font-normal '>{item.answer}</p>
                    <div className='flex flex-col lg:flex-row justify-start items-start gap-2'>
                      <span className=' text-[14px] font-normal'>{item.p} </span>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className='text-blue-600 lg:text-[16px] text-[12px] font-normal'>
                        {item.url}
                      </a>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3'>
                      <span className='lg:text-[16px]  text-[14px] font-normal'>{item.li1}<a href={item.url1} rel="noopener noreferrer" className='text-blue-600'>
                        {item.url1}
                      </a></span>
                      <span className=' text-[14px] font-normal'>{item.li2}</span>
                      <span className=' text-[14px] font-normal'>{item.li3}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Faq
