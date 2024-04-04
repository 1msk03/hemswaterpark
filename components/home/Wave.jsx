import Image from "next/image";
import Link from "next/link";
import Slider1 from "../../public/slider.jpg";
import Slider2 from "../../public/hero1.png";
import Slider3 from "../../public/hero2.png";
import Slider4 from "../../public/hero3.png";

const listData = [
  {
    title: "Slides & Pools",
    img: Slider1,
  },
  {
    title: "Book Tickets",
    img: Slider2,
  },
  {
    title: "Memories",
    img: Slider3,
  },
  {
    title: "Special Offers",
    img: Slider4,
  },
];

const Wave = () => {
  return (
    <div className="py-20 h-full">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-1">
          <h5 className="text-heading text-[22px] font-Fjalla font-medium uppercase tracking-wide">
            Get Ready
          </h5>
          <h3 className="lg:text-[60px] text-[30px]  text-center capitalize font-bold  text-primary tracking-wide">
            For Epic Fun and Enjoyment
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  pt-8">
          {listData.map((item, index) => {
            return (
              <div
                key={index}
                className=" group relative items-center justify-center overflow-hidden rounded-md cursor-pointer"
              >
                <div>
                  <Image
                    src={item.img}
                    alt=""
                    className=" h-[400px] object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-md"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-primary/70 group-hover:via-primary/60 group-hover:to-primary/70 rounded-md"></div>
                <div className="absolute  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%]  group-hover:translate-y-0 rounded-md">
                  <Link
                    href={`/services/${item.id}`}
                    className="text-white font-Fjalla mb-4 font-bold text-[20px] tracking-wider"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wave;
