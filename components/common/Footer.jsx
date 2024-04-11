import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import Logo from "../../public/HemsLogo.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaYoutube , FaTwitter,FaPinterest  } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";



import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t-4 border-t-primary">
        {/* <div className="">
          <div className="wavess" id="waves1"></div>
          <div className="wavess" id="waves2"></div>
          <div className="wavess" id="waves3"></div>
          <div className="wavess" id="waves4"></div>
        </div> */}
        <div className="container mx-auto">
          <div className="flex  flex-wrap  justify-between items-start gap-10 pt-14 pb-8 ">
            {/* <div className="flex  w-full flex-1 flex-col justify-center items-start gap-3">
              <div>
                <Image src={Logo} alt="" className=" h-24 w-36 object-cover" />
              </div>
              <h1 className="text-[14px] text-heading  tracking-wider">
                Lorem ipsum dolor sit amet,
              </h1>
            </div> */}
            <div className="  flex  flex-col justify-center items-start gap-3">
              <h4 className="text-[22px]   text-heading font-Fjalla">
                Quick Links
              </h4>
              <ul className="flex flex-col justify-center items-start gap-2">
                <Link
                  href={"/"}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Home
                </Link>
                <Link
                  href={"/"}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Information
                </Link>
                <Link
                  href={"/attractions"}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Attractions
                </Link>
                <Link
                  href={"/events-and-offers"}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                 {` Events & Offers`}
                </Link>

                <Link
                  href={"/book"}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Book Tickets
                </Link>
                <Link
                  href={"/blog"}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Blog
                </Link>
              </ul>
            </div>
            <div className="flex    flex-col justify-center items-start gap-3">
              <h4 className="text-[22px]   text-heading font-Fjalla">
                Useful Links
              </h4>
              <ul className="flex flex-col justify-center items-start gap-2">
                <Link
                  href={`/`}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Privacy Policy
                </Link>
                <Link
                  href={`/`}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Terms and Conditions
                </Link>
                <Link
                  href={`/`}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Disclaimer
                </Link>
                <Link
                  href={`/`}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  Support
                </Link>
                <Link
                  href={`/faq`}
                  className="text-[16px] text-heading hover:text-primary duration-500 font-heebo tracking-wide "
                >
                  FAQ
                </Link>
              </ul>
            </div>
            <div className="flex    flex-col text-heading justify-center items-start gap-4">
              <h4 className="text-[24px]  text-heading">
                Contact Info
              </h4>
              <div className="flex xl:flex-row flex-row lg:flex-col justify-center items-start gap-5">
                <div className="flex flex-col gap-2 justify-start items-start">
                  <div className="flex justify-center lg:items-center items-start gap-3">
                    <IoLocationOutline className="text-heading text-[20px]" />
                    <span className="text-heading">
                      Near Dugout Turf Arena,
                      <br /> behind Chordias Atulya, Keshupura,
                      <br /> Bhakrota, Jaipur, Rajasthan 302026
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <AiOutlineMail className="text-heading text-[20px]" />
                    <span className="text-heading">Hemswaterpark@gmail.com</span>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <IoCallOutline className="text-heading text-[20px]" />
                    <Link href="tel:9352318221" className="text-heading">+91 9352318221</Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-start gap-5"></div>
              <div className="flex justify-center items-start gap-5"></div>
            </div>
          </div>
          <hr />
          {/* <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start py-7 ">
            <span className="text-heading">
              Water & Amusement Park Template Kit by Jegtheme{" "}
            </span>
            <span className="text-heading cursor-pointer ">
              Copyright © 2024. All rights reserved.
            </span>
          </div> */}
        </div>
        <div className={`bg-[url('/bgg.jpg')]  bg-cover bg-center text-white `}>
<div className="bg-[rgba(103,238,248,0.70)] py-16">
<div className="container mx-auto">
  <div className="flex flex-col justify-center items-center gap-3">
<h3 className="text-[40px] tracking-wide font-bold">{`We're Social!`}</h3>
<p className="text-[18px] tracking-wide ">Follow our Social Media to stay up to date!</p>
<ul className="flex flex-wrap justify-center items-center gap-3">
<Link href={'https://www.facebook.com/hemswaterpark'} target="_blank" className="bg-[#3b5998] p-4 rounded-md cursor-pointer"><FaFacebookF className="text-[20px]"/></Link>
<Link href={'https://www.instagram.com/hemswaterpark'} target="_blank" className="bg-[#262626] p-4 rounded-md cursor-pointer"><FaInstagram className="text-[20px]"/></Link>
<Link href={'https://www.youtube.com/@Hemswaterpark'} target="_blank" className="bg-[#cd201f] p-4 rounded-md cursor-pointer"><FaYoutube className="text-[20px]"/></Link>
<Link href={'https://twitter.com/KishanShar37128'} target="_blank" className="bg-[#1da1f2] p-4 rounded-md cursor-pointer"><FaTwitter className="text-[20px]"/></Link>
{/* <Link href={'/'} target="_blank" className="bg-[#ddff00] p-4 rounded-md cursor-pointer"><FaSnapchat className="text-[20px] text-black"/></Link>
<Link href={'/'} target="_blank" className="bg-[#bd081c] p-4 rounded-md cursor-pointer"><FaPinterest className="text-[20px]"/></Link> */}
</ul>
  </div>
</div>
</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
