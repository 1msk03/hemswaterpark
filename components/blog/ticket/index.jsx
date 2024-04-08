import React from "react";
import Blog1 from "../../../public/blog1.png";
import Blog2 from "../../../public/blogp.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbWorldBolt } from "react-icons/tb";

const TicketInfo = () => {
  return (
    <div className=" ">
      <div className="container mx-auto bg-white my-10 py-10 w-full lg:w-[700px]">
        <div className="     ">
          <div className="flex  flex-col justify-center items-center">
            <h3 className="md:text-[32px] text-[20px] font-bold tracking-wide  text-start">{`Hems Water Park, Jaipur! – Tickets, Entry fees, Contact info, and more`}</h3>
            <p className="md:text-[16px] text-[14px] pt-3 text-justify">{`Dominate the slides, conquer the waves, and create lasting memories at Hems Water Park, Jaipur's premier destination for aquatic fun! This vibrant water park offers something for everyone, from heart-pounding thrills to family-friendly delights, all at an unbeatable price.`}</p>
            <div className="py-8">
              <Image
                src={Blog1}
                alt="Hems Water Park, Jaipur!"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <h5 className="md:text-[18px] text-[16px] font-bold">
            Unleash Your Inner Thrill Seeker :
          </h5>
          <p className="md:text-[16px] text-[14px] font-bold text-justify py-2">
            Terrace Rain Dance:{" "}
            <span className="font-normal">
               
              {`Feel the rhythm of the rain as you dance under the open sky in Hems' captivating rain dance arena. Arrive early to secure the best spot and prepare to be drenched in pure joy!`}
            </span>
          </p>
          <p className="md:text-[16px] text-[14px] font-bold text-justify">
            Conquer the Slides:{" "}
            <span className="font-normal">
               
              {`For the adrenaline junkies, Hems boasts a collection of exhilarating slides that will leave you breathless. Take on the challenge, conquer your fears, and create memories that will last a lifetime.`}
            </span>
          </p>
        </div>
        <div className="pt-5">
          <h5 className="md:text-[18px] text-[16px] font-bold">
            Family Fun for All Ages :
          </h5>
          <p className="md:text-[16px] text-[14px] font-bold text-justify py-2">
            Hems Wave Pool :
            <span className="font-normal">
               
              {`Take a relaxing dip and feel the gentle waves caress you as you unwind in the expansive Hems Wave Pool. Perfect for families and couples seeking a refreshing escape.
`}
            </span>
          </p>
          <p className="md:text-[16px] text-[14px] font-bold text-justify">
            {`Kids' Paradise :`}{" "}
            <span className="font-normal">
               
              {`Watch your little ones splash and play in the designated Kids' Pool, designed for their safety and enjoyment. Laughter and joy are guaranteed in this vibrant aquatic playground.
`}
            </span>
          </p>
        </div>
        <div className="pt-5">
          <h5 className="md:text-[18px] text-[16px] font-bold">
            A Culinary Adventure Awaits :
          </h5>
          <p className="md:text-[16px]  text-[14px] font-bold text-justify py-2">
            Food Court Delights :{" "}
            <span className="font-normal">
               
              {`After a thrilling morning, tantalize your taste buds at the vibrant Food Court. Explore a delectable array of local and international dishes, offering something to satisfy every palate. Enjoy a delicious meal with a refreshing view, creating the perfect interlude between your aquatic adventures.`}
            </span>
          </p>
          <p className="md:text-[16px] text-[14px] font-bold text-justify">
            Picnic by the Pool :{" "}
            <span className="font-normal">
               
              {`For a unique dining experience, consider setting up a picnic by the pool. Pack your favorite snacks and drinks, relax under the sun, and create lasting memories with your loved ones.
`}
            </span>
          </p>
        </div>
        <div className="pt-5">
          <h5 className="md:text-[18px] text-[16px] font-bold">
            Plan Your Hems Water Park Getaway :
          </h5>
          <p className="md:text-[16px]  text-[14px] font-bold text-justify py-2">
            Operating Hours :{" "}
            <span className="font-normal">
               
              {`Ensure a day packed with excitement by planning your visit between 10:00 AM and 6:00 PM. Arriving early allows you to maximize your time and take advantage of shorter lines for popular attractions.`}
            </span>
          </p>
          <p className="md:text-[16px] text-[14px] font-bold text-justify">
            Convenient Location :{" "}
            <span className="font-normal">
               
              {`Located near Dugout Turf Arena, behind Chordias Atulya, Keshupura, Bhakrota, Jaipur, Rajasthan 302026, Hems Water Park is easily accessible. Use navigation apps for precise directions, and consider carpooling for a hassle-free journey.
`}
            </span>
          </p>
          <Link
            className="mt-4"
            href={
              "https://www.google.com/maps/place/Hems+Water+Park/@26.8854313,75.7038925,15z/data=!4m6!3m5!1s0x396c4bcd4559eea7:0x8d639ac1090f4ce5!8m2!3d26.8854313!4d75.7038925!16s%2Fg%2F11vqvjlyd5?entry=ttu"
            }
            target="_blank"
          >
            <FaArrowAltCircleRight className="text-[30px] font-bold text-blue-500 " />
          </Link>
        </div>
        <div>
          <h5 className="md:text-[18px] text-[16px] font-bold">
            Making the Most of Your Visit :
          </h5>
          <p className="md:text-[16px] text-[14px] font-bold text-justify py-2">
            Budget-Friendly Fun :{" "}
            <span className="font-normal">
               
              {`Enjoy an unforgettable day without breaking the bank! Hems Water Park offers affordable ticket prices starting from just ₹250, making it the perfect choice for families and budget-conscious travelers`}
            </span>
          </p>
          <p className="md:text-[16px] text-[14px] font-bold text-justify">
            Secure Your Belongings :{" "}
            <span className="font-normal">
               
              {`Prioritize security and convenience with Hems' affordable locker and costume services (₹50). Focus on creating memories and capturing the fun, knowing your belongings are safe.
 `}
            </span>
          </p>
          <p className="md:text-[16px] text-[14px] font-bold text-justify pt-2">
            Event Booking (Coming Soon!) : 
            <span className="font-normal">
               
              {`Stay tuned for the exciting launch of event booking services! Plan unforgettable birthday parties, celebrations, ceremonies, and more at Hems Water Park.
 `}
            </span>
          </p>
          <div className="py-8">
            <Image
              src={Blog2}
              alt="Hems Water Park, Jaipur!"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div>
          <h5 className="md:text-[18px] text-[16px] font-bold">
            Relaxation and Rejuvenation :
          </h5>
          <p className="md:text-[16px] text-[14px] font-bold text-justify py-2">
            Free Parking : 
            <span className="font-normal">
               
              {`Enjoy the convenience of free parking at Hems Water Park, ensuring a stress-free start to your aquatic adventure.`}
            </span>
          </p>
          <p className="md:text-[16px] text-[14px] font-bold text-justify">
            Refreshing Break : 
            <span className="font-normal">
               
              {`Take a rejuvenating dip in the meticulously maintained swimming pools, suitable for all ages. These pristine pools offer the perfect respite after a thrilling day on the slides.`}
            </span>
          </p>
        </div>

        <div className="py-5">
          <h5 className="md:text-[18px] text-[16px] font-bold">
            Hems Water Park Jaipur Social Links and Contact Info:
          </h5>
          <div className="flex md:justify-start justify-center items-center gap-3 pt-4">
            <Link href="tel:9352318221">
              <IoCall className="text-[20px] text-blue-500" />
            </Link>
            <Link href="mailto:hemswaterpark@gmail.com">
              <IoMail className="text-[20px] text-blue-500" />
            </Link>
            <Link href={"https://www.hemswaterpark.com/"} target="_blank">
              <TbWorldBolt className="text-[20px] text-blue-500" />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=61557188300697"}
              target="_blank"
            >
              <FaFacebookF className="text-[20px] text-blue-500" />
            </Link>
            <Link
              href={"https://www.instagram.com/hemswaterpark/"}
              target="_blank"
            >
              <FaInstagram className="text-[20px] text-blue-500" />
            </Link>
            <Link
              href={"https://www.youtube.com/@Hemawaterpark"}
              target="_blank"
            >
              <FaYoutube className="text-[20px] text-blue-500" />
            </Link>
          </div>
          <div>
            <h5 className="md:text-[29px] text-[16px] font-bold pt-10">
              Frequently Asked Questions :{" "}
            </h5>
            <ul className="flex flex-col justify-center  list-decimal items-start py-4">
             <li>
             <p className="md:text-[16px] text-[14px] font-bold text-justify ">
                What is the ticket price at Hems Water Park?
              </p>
               
              <span className="font-normal">
                 
                {`
 Enjoy a day of aquatic fun starting from just ₹250!
`}
              </span>
             </li>
             <li className="pt-4">
             <p className="md:text-[16px] text-[14px] font-bold text-justify ">
              	Does Hems Water Park offer free parking? 
              </p>
               
              <span className="font-normal">
                 
                {`
Yes, Hems provides free parking for your convenience.

`}
              </span>
             </li>
             <li className="pt-4">
             <p className="md:text-[16px] text-[14px] font-bold text-justify ">
              Is Hems Water Park suitable for families? 
              </p>
               
              <span className="font-normal">
                 
                {`
Absolutely! Hems Water Park offers attractions and amenities designed for the enjoyment of all ages, making it the perfect family outing.

`}
              </span>
             </li>
              <li className="pt-4">
              <p className="md:text-[16px] text-[14px] font-bold text-justify ">
              Are lockers and costumes available? 
              </p>
               
              <span className="font-normal">
                 
                {`

Yes, Hems offers secure locker and costume services (₹50) for a stress-free and enjoyable experience.


`}
              </span>
              </li>
            </ul>
          </div>
          <p className="md:text-[16px] text-[14px] font-medium text-justify">{`Dive into the exhilarating world of Hems Water Park! Pack your swimsuit, grab your sunscreen, and get ready for a day filled with laughter, excitement, and memories that will last a lifetime.`}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
