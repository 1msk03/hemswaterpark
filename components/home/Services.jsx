import React from "react";
import Services1 from "../../public/gazebo-M7GHEMR.png";
import Services2 from "../../public/food.png";
import Services3 from "../../public/lcoker.png";
import Services4 from "../../public/hhh.jpg";
import Services5 from "../../public/services5.jpg";


import Image from "next/image";
import { IoTime } from "react-icons/io5";

const Services = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-[16px] text-center font-Fjalla font-medium tracking-wide capitalize text-heading">
            What We’re Offering
          </p>
          <h2 className="text-[32px] text-center text-primary font-Fjalla font-bold">
            Fun Never Stops at HemsWaterPark
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 pt-8 w-full">
          <div className="lg:w-1/2 w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/20 flex flex-col justify-center items-center gap-5 p-6">
                <div>
                  <Image
                    src={Services1}
                    alt=""
                    className="h-[60px] w-[60px] object-cover"
                  />
                </div>
                <h3 className="text-[16px] font-Fjalla font-medium tracking-wide text-heading">
                  Changing Rooms
                </h3>
                <p className="text-[16px] text-body ">
                 {`Spacious, clean changing rooms for comfort during your visit.`}
                </p>
              </div>
              <div className="bg-primary/20 flex flex-col justify-center items-center gap-5 p-6">
                <div>
                  <Image
                    src={Services2}
                    alt=""
                    className="h-[60px] w-[60px] object-cover"
                  />
                </div>
                <h3 className="text-[16px] font-Fjalla font-medium tracking-wide text-heading">
                  Food & Beverages
                </h3>
                <p className="text-[16px] text-body">
                  {`Enjoy delicious food at our water park for a great dining experience`}
                </p>
              </div>
              <div className="bg-primary/20 flex flex-col justify-center items-center gap-5 p-6">
                <div>
                  <Image
                    src={Services3}
                    alt=""
                    className="h-[60px] w-[60px] object-cover"
                  />
                </div>
                <h3 className="text-[16px] font-Fjalla font-medium tracking-wide text-heading">
                  Safety Lockers
                </h3>
                <p className="text-[16px] text-body">
                 {`Big-sized, secure lockers available at just ₹50
`}
                </p>
              </div>
              <div className="bg-primary/20 flex flex-col justify-center items-center gap-5 p-6">
                <div>
                  <Image
                    src={Services4}
                    alt=""
                    className="h-[60px] w-[60px] object-cover"
                  />
                 
                </div>
                <h3 className="text-[16px] font-Fjalla font-medium tracking-wide text-heading">
                  Parking
                </h3>
                <p className="text-[16px] text-body">
                  {`Free parking with CCTV surveillance available for hassle-free experience`}
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col py-3 ">
              <div className="flex justify-between items-center border-b border-body py-3">
                <h5 className=" text-heading text-[16px] font-Fjalla tracking-wide font-normal">
                  Monday - Friday
                </h5>
                <span className="flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal">
                  <IoTime className="text-primary" />
                  <p>11:00 AM - 16:00 PM</p>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-body py-3">
                <h5 className=" text-heading text-[16px] font-Fjalla tracking-wide font-normal">
                  Saturday - Sunday
                </h5>
                <span className="flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal">
                  <IoTime className="text-primary" />
                  <p>09:00 AM - 17:00 PM</p>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-body py-3">
                <h5 className=" text-heading text-[16px] font-Fjalla tracking-wide font-normal">
                  Holiday
                </h5>
                <span className="flex justify-start items-center gap-2 text-body text-[16px] font-Fjalla tracking-wide font-normal">
                  <IoTime className="text-primary" />
                  <p>09:00 AM - 17:00 PM</p>
                </span>
              </div>
            </div> */}
          </div>
          <div className="lg:w-1/2 w-full">
            <Image src={Services5}  alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
