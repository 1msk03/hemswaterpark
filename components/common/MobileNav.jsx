"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";


const MobileNav = ({ onLinkClick }) => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setCoursesDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleCoursesDropdownToggle = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);

    setServicesDropdownOpen(false);
  };

  const handleServicesDropdownToggle = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);

    setCoursesDropdownOpen(false);
  };
  return (
    <div className=" bg-white z-50 top-0   py-7 fixed w-full  lg:py-0 shadow">
      <div className="container mx-auto">
        <ul className="lg:hidden relative flex flex-col justify-center items-start gap-5 ">
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Home
          </Link>
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Services
          </Link>
          <Link
            href={"/services"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Booking
          </Link>
          <Link
            href={"/booking"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Contact
          </Link>
        


         
        </ul>
        <div className="lg:hidden flex absolute top-4 right-3 ">
          <span onClick={handleLinkClick}><IoClose className="text-4xl cursor-pointer"/></span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
