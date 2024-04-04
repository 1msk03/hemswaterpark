"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Faqpic from "../../public/faq.avif"

const faqList = [
  {
    id: 1,
    question: 'What are the opening hours of Hemswaterpark?',
    answer: `Hemswaterpark's opening hours typically vary depending on the day of the week and the season. It's recommended to check their official website or contact them directly for the most up-to-date information on opening hours.`,
  },
  {
    id: 2,
    question: 'What attractions and facilities does Hemswaterpark offer?',
    answer: `Hemswaterpark offers a range of attractions and facilities, including water slides, pools, wave pools, lazy rivers, children's play areas, snack bars, and picnic areas. Visitors can enjoy a variety of water-based activities suitable for all ages.`,
  },
  {
    id: 3,
    question: 'Are there any age or height restrictions for certain rides at Hemswaterpark?',
    answer: `Yes, some rides and attractions at Hemswaterpark may have age, height, or weight restrictions for safety reasons. It's essential to review the park's guidelines and restrictions before planning your visit, especially if you have young children or individuals with specific requirements.`,
  },
  {
    id: 4,
    question: 'Is outside food and drink allowed at Hemswaterpark?',
    answer: `Policies regarding outside food and drink may vary at Hemswaterpark. Some parks allow visitors to bring their food and drinks, while others have restrictions or designated picnic areas. It's advisable to check the park's regulations beforehand to avoid any inconvenience.`,
  },
  {
    id: 5,
    question: 'Does Hemswaterpark offer discounts or special promotions?',
    answer: `Hemswaterpark may offer discounts, special promotions, or package deals during certain times of the year or for specific groups such as students, seniors, or large families. Visitors can inquire about available discounts or check the park's website for any ongoing promotions before purchasing tickets.`,
  
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
