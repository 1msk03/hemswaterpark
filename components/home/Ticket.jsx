import React from "react";
import { MdDone } from "react-icons/md";

const Ticket = () => {
  return (
    <div className={`bg-[url('/bgg.jpg')]  bg-cover bg-center text-white  `}>
     <div className='bg-[rgba(253,253,253,0.9)] py-20'>
     <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-1">
          <span className="text-[16px] text-center font-Fjalla font-medium tracking-wide text-heading">
            TICKET PACKAGES
          </span>
          <h2 className="text-[32px] text-primary font-Fjalla text-center font-bold">
            CHOOSE THE BEST PACKAGES FOR YOUR FAMILY
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5  justify-center items-center pt-7 w-full">
          {/* <div className=" md:w-[40%] w-full flex flex-col justify-start items-start gap-5 ">
            <p className="text-[16px] text-body">
              {` We're so confident you'll love our delicious food! Skip the
              outside hassle and dive right into the fun We recommend nylon
              swimsuits for water activities. Don't worry if you don't have one,
              you can easily rent one from us`}
            </p>
            <div className="flex flex-col justify-center items-start gap-4">
              <span className="flex justify-start items-center gap-3 text-[16px] text-body">
                <MdDone className="text-primary text-[20px] font-bold" />
                <p>Best Waterpark in the world</p>
              </span>
              <span className="flex justify-start items-center gap-3 text-[16px] text-body">
                <MdDone className="text-primary text-[20px] font-bold" />
                <p>Best Packages For Your Family</p>
              </span>
              <span className="flex justify-start items-center gap-3 text-[16px] text-body">
                <MdDone className="text-primary text-[20px] font-bold" />
                <p>Enjoy Various Kinds of Water Park</p>
              </span>
              <span className="flex justify-start items-center gap-3 text-[16px] text-body">
                <MdDone className="text-primary text-[20px] font-bold" />
                <p>Win Up To 3 Free All Day Tickets</p>
              </span>
            </div>
            <button className="bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide uppercase">
              All Packages
            </button>
          </div> */}
          <div className="   gap-5 flex flex-col md:flex-row ">
            <div className="  md:w-[400px] w-[320px] py-5 px-5 md:py-5 bg-secondary rounded-md shadow-lg  flex flex-col justify-center items-center">
              <h3 className="text-[24px] font-Fjalla font-[700]">
                Adults Packages
              </h3>
              <p>{`(Above 4 ft. to 2 inch)`}</p>
              <div className="flex justify-between pt-8">
                <div className="flex flex-col justify-center items-center  pr-4 ">
                  {" "}
                  <span className="text-[30px] font-Fjalla font-[400] text-heading">
                    ₹350.00
                  </span>
                  <p>{`( MON-FRI )`}</p>
                </div>
                <div className=" border-r-2 border-r-black"></div>
                <div className="flex flex-col justify-center items-center pl-4">
                  {" "}
                  <span className="text-[30px] font-Fjalla font-[400] text-heading">
                    ₹450.00
                  </span>
                  <p>{`( SAT-SUN )`}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-4 pt-6">
                <span className="flex justify-start items-center gap-3 text-[16px]  ">
                  <MdDone className="text-heading text-[20px] font-bold" />
                  <p>{`Free parking`}</p>
                </span>
                <span className="flex justify-start items-center gap-3 text-[16px] ">
                  <MdDone className="text-heading text-[20px] font-bold" />
                  <p>{`Delicious food (extra charges)`}</p>
                </span>
                <span className="flex justify-start items-center gap-3 text-[16px]">
                  <MdDone className="text-heading text-[20px] font-bold" />
                  <p>{`locker 50/- (optional)`}</p>
                </span>
                <span className="flex justify-start items-center gap-3 text-[16px]">
                  <MdDone className="text-heading text-[20px] font-bold" />
                  <p>{`costume 50/- (optional)`}</p>
                </span>
              </div>
              <button className="bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide mt-7">
                BOOK NOW
              </button>
            </div>
            <div className="  md:w-[400px] w-[320px] py-5 px-5 md:py-5 bg-secondary rounded-md shadow-lg  flex flex-col justify-center items-center">
              <h3 className="text-[24px] font-Fjalla font-[700]">
                Kids Packages
              </h3>
              <p>{`(Above 3 ft. 3 inch to 4 ft. 2 inch)`}</p>
              <div className="flex justify-between pt-8">
                <div className="flex flex-col justify-center items-center  pr-4 ">
                  {" "}
                  <span className="text-[30px] font-Fjalla font-[400] text-heading">
                    ₹250.00
                  </span>
                  <p>{`( MON-SUN )`}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-4 pt-6">
                <span className="flex justify-start items-center gap-3 text-[16px]  ">
                  <MdDone className="text-heading text-[20px] font-bold" />
                  <p>{`Kids Below 3ft 3inch (Free entry)`}</p>
                </span>
                <span className="flex justify-start items-center gap-3 text-[16px] ">
                  <MdDone className="text-heading text-[20px] font-bold" />
                  <p>{`Kids pool`}</p>
                </span>
                <span className="flex justify-start items-center gap-3 text-[16px]">
                  <MdDone className="text-heading text-[20px] font-bold" />
                  <p>{`Kids slides`}</p>
                </span>
                <span className="flex justify-start items-center gap-3 text-[16px]">
                  <MdDone className="text-heading text-[20px] font-bold" />
                  <p>{`Safety features`}</p>
                </span>
              </div>
              <button className="bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide mt-7">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Ticket;
