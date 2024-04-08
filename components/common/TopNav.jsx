"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const TopNav = () => {
  var settings = {
 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    
  };
  return (
    <div className="bg-[#e87130] text-white py-3">
     <div className="container mx-auto">
     <Slider {...settings}>
 
 <div className="flex justify-center items-center ">
   <p className="text-[14px] font-bold text-heading flex justify-center items-center gap-2">
     Call for any Inquiry :-{" "}
     <Link href="tel:9352318221" className="font-normal text-white tracking-wide flex justify-center items-center gap-1">
       {/* <IoCall /> */}
       9352318221
     </Link>
   </p>
 </div>
 <div>
   <p className="font-bold text-heading tracking-wide text-[14px] flex justify-center items-center gap-2">
     {" "}
     Address :–{" "}
     <p className="font-normal text-white flex justify-center items-center">
      <p className="hidden lg:flex">Near Dugout Turf Arena, behind Chordias Atulya, Keshupura,</p>
       Bhakrota, Jaipur, Rajasthan 302026
     </p>
   </p>
 </div>
 <div className="flex justify-center items-center">
   <p className="text-center flex justify-center items-center  ">
    <p className="hidden lg:flex">{`Hems Water Park Jaipur is gearing up for an `}</p>{` EPIC grand opening!`}
   <p className="hidden lg:flex">Stay tuned for updates</p>
   </p>
 </div>

</Slider>
     </div>
     
    </div>
  );
};

export default TopNav;
