import Image from "next/image";
import React from "react";
import Gallary1 from "../../public/gallary1.jpg";

const list = [
  {
    title: "Enjoy Wave Pool",
    img: Gallary1,
  },
  {
    title: "Kids & Family Pools",
    img: Gallary1,
  },
  {
    title: "3rd & 4th floor Body Slides",
    img: Gallary1,
  },
  {
    title: "Kids Slides",
    img: Gallary1,
  },
  {
    title: "Jaipur's Best Terrace Rain Dance",
    img: Gallary1,
  },
  {
    title: "Dining Area & Food Court",
    img: Gallary1,
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
                  <Image src={item.img} alt="" className="object-contain" />
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
