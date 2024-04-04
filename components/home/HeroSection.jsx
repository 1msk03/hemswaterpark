"use client"
import Slider from "react-slick";


import { FaPlay } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import HeroImage from '../../public//hero1.png'


const HeroSection = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
    arrows: false,
  };
 
  return (
    <div>
    <section className="">
        {/* <div className='wave wave1'></div>
      <div className='wave wave2'></div>
      <div className='wave wave3'></div>
      <div className='wave wave4'></div> */}
        <div  className={`  flex items-center justify-center   `}>
      {/* <div className='bg-[hsla(12,38%,51%,0)] h-full w-full'>
  
      <div className='container h-full mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center  items-center  gap-10'>
          <div className='lg:w-1/2 w-full flex flex-col justify-start items-start gap-5 text-white'>
            <span className='text-[16px] font-bold font-Fjalla tracking-wider text-white'>WELCOME TO WATERBOOM</span>
            <h1 className='lg:text-[60px] text-[36px]  font-Fjalla font-bold tracking-wide leading-tight'>THE GREATEST WATER AND AMUSEMENT PARK IN THE WORLD</h1>
            <p className='text-[16px] tracking-wide leading-relaxed font-heebo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <div className='flex justify-start items-center gap-5'>
              <span className='p-5 animate-ping bg-black rounded-full flex justify-center items-center cursor-pointer'><FaPlay className=''/></span>
              <p className='text-[16px] font-Fjalla font-bold tracking-wider'>WATCH INTRO</p>
            </div>
          </div>

          <div className='w-full hidden lg:flex  lg:w-1/2 '>
          <Slider {...settings} className="">
      <div >
      <Image src={Slider1} className="w-[280px] h-[400px] object-cover rounded-md"/>
      </div>
      <div>
      <Image src={Slider2} className="w-[280px] h-[400px] object-cover rounded-md"/>
      </div>
      <div>
      <Image src={Slider3} className="w-[280px] h-[400px] object-cover rounded-md"/>
      </div>
      <div>
      <Image src={Slider4} className="w-[280px] h-[400px] object-cover rounded-md"/>
      </div>
     
    </Slider>
          </div>
        </div>
      </div>
      </div> */}
    <Image src={HeroImage} alt="Hero Background" className="w-full h-full object-contain"/>
    </div>
    </section>
  </div>
  );
};

export default HeroSection;
