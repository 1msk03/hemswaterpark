import FeatureSection from "@/components/home/FeatureSection";
import Gallary from "@/components/home/Gallary";
import HeroSection from "@/components/home/HeroSection";
import Newsletter from "@/components/home/Newsletter";
import Image from "next/image";
import Ticket from "../components/home/Ticket";
import Blog from "@/components/home/Blog";
import Banner from "@/components/home/Banner";
import Services from "@/components/home/Services";


export default function Home() {
  return (
  <>
<HeroSection/>
<FeatureSection/>
<Services/>
<Ticket/>
<Gallary/>
<Banner/>

<Blog/>
<Newsletter/>
  </>
  );
}
