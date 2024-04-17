import React from "react";
import Image from "next/image";
import WaveModel1 from "../../public/services/ser1.jpeg";
import WaveModel2 from "../../public/services/ser2.jpeg";
import WaveModel3 from "../../public/services/ser3.jpeg";

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";

const ServicesId = () => {
  return (
    <div className="bg-slate-100 py-20">
      <div className="container mx-auto">
        <div>
          <h3 className="text-[40px] font-bold pb-5">Tsunami</h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          <div className="lg:w-[65%] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div>
                <Image
                  src={WaveModel1}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src={WaveModel2}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src={WaveModel3}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src={WaveModel1}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <Image
                  src={WaveModel1}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>

              <div>
                <Image
                  src={WaveModel1}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[35%] h-full bg-white w-full p-9">
            <h3 className="font-bold text-[25px]">Get in Touch</h3>
            <form className="flex flex-col  gap-6 w-full py-10">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-none border-b py-3 hover:border-b-black w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none border-b py-3 hover:border-b-black w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Massage"
                  className="outline-none border-b py-3 hover:border-b-black w-full"
                />
              </div>
              <button className="bg-yellow-400 rounded-full text-white font-medium text-[16px] py-3 px-8">
                Get in Touch
              </button>
            </form>
            <h3 className="text-[25px] font-bold">Contact Info</h3>
            <div className="flex-col flex justify-center items-start gap-4 pt-5">
              <div className="flex justify-start items-start gap-5">
                <FaLocationDot className="text-[40px]" />
                <div>
                  Near Dugout Turf Arena, behind Chordias Atulya, Keshupura,
                  Bhakrota, Jaipur, Rajasthan 302026
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <IoMailSharp className="text-[30px]" />
                <div>Hemswaterpark@gmail.com</div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <IoCall className="text-[30px]" />
                <div>+91 9352318221</div>
              </div>
            </div>
            <div className="pt-5 flex justify-center items-center">
              <button className="px-8 py-3 border-2 border-yellow-400 rounded-full text-[18px]">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesId;
