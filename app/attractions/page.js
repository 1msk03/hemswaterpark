
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