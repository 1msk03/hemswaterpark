import React from "react";
import Banner1 from "../../public/banner.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div
        className=" relative  bg-cover bg-center lg:h-[500px] h-full lg:mb-20 mb-0"
        style={{
          backgroundImage: `url(${Banner1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[rgba(20,20,20,0.27)] h-full flex justify-center items-center">
          <div className="flex flex-col  gap-y-6 justify-between items-center py-20 md:px-10 ">
            <div className="flex flex-col items-center justify-center  gap-3  w-full">
              <h2 className="text-white md:text-[50px]  uppercase text-[32px] text-center  font-Fjalla font-bold tracking-wide">
                SPEND YOUR HOLIDAY IN Hemswaterpark
              </h2>
            </div>
            <div className="flex flex-col md:flex-row   gap-6">
              <Link   href={"/book-tickets"} className="bg-white text-primary px-6 py-3 text-[16px] font-bold tracking-wide">
                BOOK NOW
              </Link>
              <Link
                href={"/contact"}
                className="bg-black text-white px-6 py-3 text-[16px] font-bold tracking-wide uppercase"
              >
                Contact NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
