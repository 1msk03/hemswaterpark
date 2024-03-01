"use client"
import Hero from '../../public/hero5.jpg';
import Hero1 from '../../public/hero2.png';
import Hero2 from '../../public/hero3.png';
import Hero3 from '../../public/hero4.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import Image from 'next/image';
import BookForm from '../common/BookForm';

const HeroSection = () => {
  var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 2000,
   
  };
 
  return (
    <div  className={`bg-secondary h-[calc(100vh + 80px)]  lg:py-16 py-20`}>
      <div className='bg-[hsla(12,38%,51%,0)] h-full w-full'>
      <div className='container h-full mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center h-full items-center  gap-10'>
          <div className='lg:w-1/2 w-full flex flex-col justify-start items-start gap-5 text-white'>
            <span className='text-[16px] font-bold font-Fjalla tracking-wider text-primary'>WELCOME TO WATERBOOM</span>
            <h1 className='lg:text-[60px] text-[36px]  font-Fjalla font-bold tracking-wide leading-tight'>THE GREATEST WATER AND AMUSEMENT PARK IN THE WORLD</h1>
            <p className='text-[16px] tracking-wide leading-relaxed font-heebo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <div className='flex justify-start items-center gap-5'>
              <span className='p-5 animate-ping bg-primary rounded-full flex justify-center items-center cursor-pointer'><FaPlay className=''/></span>
              <p className='text-[16px] font-Fjalla font-bold tracking-wider'>WATCH INTRO</p>
            </div>
          </div>

          <div className=' hidden lg:flex lg:w-1/2 '>
          <BookForm/>
          </div>
        </div>
      </div>
      </div>
     {/* <div className=''>
     <Slider {...settings}>
      <div className='flex justify-center items-center bg-[rgba(0,0,0,0.92)]'>
        <Image src={Hero} className='h-screen w-full object-cover'/>
      </div>
      <div className=''>
        <Image src={Hero1} className='h-screen w-full object-cover'/>
      </div>
      <div className=''>
        <Image src={Hero2} className='h-screen w-full object-cover'/>
      </div>
      <div className=''>
        <Image src={Hero3} className='h-screen w-full object-cover'/>
      </div>
    </Slider>
     </div> */}
    </div>
  );
};

export default HeroSection;
