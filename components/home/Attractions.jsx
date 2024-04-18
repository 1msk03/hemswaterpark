import Image from "next/image";
import React from "react";
import Gallary2 from "../../public/attration/faimaly.png";
import Gallary1 from "../../public/attration/pool.png";
import Gallary3 from "../../public/attration/floor.png";
import Gallary4 from "../../public/attration/kids.png";
import Gallary5 from "../../public/attration/rain.png";
import Gallary6 from "../../public/attration/Dining.png";

const list = [
  {
    title: "Enjoy Wave Pool",
    img: Gallary1,
  },
  {
    title: "Kids & Family Pools",
    img: Gallary2,
  },
  {
    title: "3rd & 4th floor Body Slides",
    img: Gallary3,
  },
  {
    title: "Kids Slides",
    img: Gallary4,
  },
  {
    title: "Jaipur's Best Terrace Rain Dance",
    img: Gallary5,
  },
  {
    title: "Dining Area & Food Court",
    img: Gallary6,
  },
];

const Attractions = () => {
  return (
    <div className="pb-20 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-heading text-[22px] font-Fjalla font-medium uppercase tracking-wide">
            HEMSWATERPARK
          </span>
          <h3 className="lg:text-[60px] text-[30px]  text-center capitalize font-bold  text-primary tracking-wide">
            Attractions and Fun Activities
          </h3>
        </div>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-10">
          {list.map((item, index) => {
            return (
              <div key={index} className=" border-b border-b-black">
                <div>
                  <Image src={item.img} alt="" className="object-cover" />
                </div>
                <h5 className="text-[20px] font-bold py-4 px-2">
                  {item.title}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Attractions;
