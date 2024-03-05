import Image from "next/image";

import Slider1 from "../../public/slider.jpg";
import Slider2 from "../../public/hero1.png";
import Slider3 from "../../public/hero2.png";
import Slider4 from "../../public/hero3.png";
const Wave = () => {
  return (
    <div className="py-20 h-full">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-2">
          <h5 className="text-heading text-[22px] font-Fjalla font-medium tracking-wide">
            Welcome to
          </h5>
          <h3 className="text-[60px] font-Fjalla font-bold  text-primary tracking-wide">
            THE PLACE OF ENJOYMENT
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  pt-8">
          <div className=" group relative items-center justify-center overflow-hidden rounded-md cursor-pointer">
            <div>
              <Image
                src={Slider1}
                className=" h-[400px] object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-md"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-primary/70 group-hover:via-primary/60 group-hover:to-primary/70 rounded-md"></div>
            <div className="absolute  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%]  group-hover:translate-y-0 rounded-md">
              <h1 className="text-white font-Fjalla mb-4 font-bold text-[20px] tracking-wider">
                Amusement
              </h1>
              <p className="opacity-0 text-white  group-hover:opacity-100 duration-500">
                jvkjkgbbb
              </p>
            </div>
          </div>
          <div className=" group relative items-center justify-center overflow-hidden rounded-md cursor-pointer">
            <div>
              <Image
                src={Slider2}
                className=" h-[400px] object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-md"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-primary/70 group-hover:via-primary/60 group-hover:to-primary/70 rounded-md"></div>
            <div className="absolute  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%]  group-hover:translate-y-0 rounded-md">
              <h1 className="text-white font-Fjalla mb-4 font-bold text-[20px] tracking-wider">
                Adventure
              </h1>
              <p className="opacity-0 text-white  group-hover:opacity-100 duration-500">
                jvkjkgbbb
              </p>
            </div>
          </div>
          <div className=" group relative items-center justify-center overflow-hidden rounded-md cursor-pointer">
            <div>
              <Image
                src={Slider3}
                className=" h-[400px] object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-md"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-primary/70 group-hover:via-primary/60 group-hover:to-primary/70 rounded-md"></div>
            <div className="absolute  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%]  group-hover:translate-y-0 rounded-md">
              <h1 className="text-white font-Fjalla mb-4 font-bold text-[20px] tracking-wider">
              Our Gallary
              </h1>
              <p className="opacity-0 text-white  group-hover:opacity-100 duration-500">
                Our Gallary
              </p>
            </div>
          </div>
          <div className=" group relative items-center justify-center overflow-hidden rounded-md cursor-pointer">
            <div>
              <Image
                src={Slider4}
                className=" h-[400px] object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-md"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-primary/70 group-hover:via-primary/60 group-hover:to-primary/70 rounded-md"></div>
            <div className="absolute  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%]  group-hover:translate-y-0 rounded-md">
              <h1 className="text-white font-Fjalla mb-4 font-bold text-[20px] tracking-wider">
                Ticket
              </h1>
              <p className="opacity-0 text-white  group-hover:opacity-100 duration-500">
                jvkjkgbbb
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wave;
