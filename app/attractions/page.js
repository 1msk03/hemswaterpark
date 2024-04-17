
import Attractions from "@/components/home/Attractions";
import Link from "next/link";



export default function Page(){
    return (
        <div className="pt-10"> 
      <Attractions/>
      <div className="container mx-auto">
        <div className="flex justify-center items-center pb-10">
          <Link href={'/book'} className="bg-primary px-8 py-3 rounded-md text-white">Book Tickets</Link>
        </div>
      </div>
        </div>
    )
}
export function generateMetadata(){
  return {
      title: "Dive, Swim and Play All Day!! : Best of Hems Water Park Jaipur!",
      description:
        `Explore Hems Water Park Jaipur's top attractions: terrace rain dance, wave pool thrills, family-friendly fun, thrilling slides, and mouthwatering dining options. Dive into excitement today!`,
        
  }
}