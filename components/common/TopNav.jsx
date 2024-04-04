"use client";
import Marquee from "react-fast-marquee";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className="bg-secondary text-white py-3">
      <Marquee>
        <div className="flex justify-center items-center gap-20">
          <div className="flex justify-center items-center gap-">
            <p className="text-[14px] font-bold text-heading flex justify-center items-center gap-2">
              Call for any Inquiry :-{" "}
              <Link href="tel:9352318221" className="font-normal text-white tracking-wide flex justify-center items-center gap-1">
                {/* <IoCall /> */}
                9352318221
              </Link>
            </p>
          </div>
          <div>
            <p className="font-bold text-heading tracking-wide text-[14px] flex justify-center items-center gap-2">
              {" "}
              Address :–{" "}
              <p className="font-normal text-white">
                Near Dugout Turf Arena, behind Chordias Atulya, Keshupura,
                Bhakrota, Jaipur, Rajasthan 302026
              </p>{" "}
            </p>
          </div>
          <div className="pr-20">
            <p>
              Hems Water Park Jaipur is gearing up for an EPIC grand opening!
              Stay tuned for updates
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default TopNav;
