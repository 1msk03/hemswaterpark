
import Gallary from "@/components/home/Gallary";
import HeroSection from "@/components/home/HeroSection";
import Newsletter from "@/components/home/Newsletter";
import Image from "next/image";
import Ticket from "../components/home/Ticket";
import Blog from "@/components/home/Blog";

import Services from "@/components/home/Services";
import Wave from "@/components/home/Wave";
import Banner from "@/components/home/Banner";


export default function Home() {
  return (
  <>
<HeroSection/>
<Wave/>

<Services/>
<Ticket/>
<Gallary/>
<Banner/>

<Blog/>
{/* <Newsletter/> */}
  </>
  );
}
